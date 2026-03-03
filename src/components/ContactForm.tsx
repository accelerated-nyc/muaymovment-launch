import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { sendContactEmail } from "@/lib/emailjs";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("sending");
    try {
      await sendContactEmail(values);
      setStatus("sent");
      form.reset();
      setTimeout(() => {
        onOpenChange(false);
        setStatus("idle");
      }, 2000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[hsl(0_0%_5%)] border-white/10 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-off-white">
            Contact <span className="text-gold">Us</span>
          </DialogTitle>
          <DialogDescription className="text-silver/50 text-sm">
            Send us a message and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        {status === "sent" ? (
          <p className="text-gold text-center py-8 font-heading text-lg">
            Message sent successfully!
          </p>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-silver/60 text-[12px] tracking-[0.15em] uppercase">
                      Name
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-off-white text-sm focus:border-gold/40 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-silver/60 text-[12px] tracking-[0.15em] uppercase">
                      Email
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        className="w-full bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-off-white text-sm focus:border-gold/40 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-silver/60 text-[12px] tracking-[0.15em] uppercase">
                      Message
                    </FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        rows={4}
                        className="w-full bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-off-white text-sm focus:border-gold/40 focus:outline-none transition-colors resize-none"
                        placeholder="How can we help?"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-gold text-black font-heading font-semibold text-sm uppercase tracking-[0.15em] btn-shimmer transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--gold)/0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
