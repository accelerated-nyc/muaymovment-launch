import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const availableDates = [3, 5, 7, 10, 12, 14, 17, 19, 21, 24, 26, 28];
const timeSlots = [
  "9:00 AM — 9:45 AM",
  "10:00 AM — 10:45 AM",
  "11:00 AM — 11:45 AM",
  "1:00 PM — 1:45 PM",
  "2:00 PM — 2:45 PM",
  "3:00 PM — 3:45 PM",
];

const SchedulingSection = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(10);
  const [selectedTime, setSelectedTime] = useState<string | null>("10:00 AM — 10:45 AM");
  const [isZoom, setIsZoom] = useState(true);

  const calendarDays: (number | null)[] = [null, null, null, 1, 2, 3, 4];
  for (let i = 5; i <= 31; i++) calendarDays.push(i);
  while (calendarDays.length < 42) calendarDays.push(null);

  return (
    <section id="book" className="relative bg-void film-grain py-28 md:py-40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="container mx-auto px-6 md:px-8">
        <ScrollReveal>
          <p className="text-gold/70 text-[13px] tracking-[0.3em] uppercase mb-4 font-body text-center">Schedule</p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-off-white mb-20 text-center">
            Book a <span className="text-gold">Session</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto bg-black/40 border border-white/[0.06] p-8 md:p-12 border-glow">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Calendar */}
              <div>
                <p className="text-silver/50 text-[12px] tracking-[0.2em] uppercase mb-5 font-body">February 2025</p>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {daysOfWeek.map((d) => (
                    <div key={d} className="text-silver/30 text-[11px] py-2 font-medium">{d}</div>
                  ))}
                  {calendarDays.map((day, i) => (
                    <button
                      key={i}
                      disabled={!day || !availableDates.includes(day)}
                      onClick={() => day && setSelectedDate(day)}
                      className={`aspect-square flex items-center justify-center text-sm transition-all duration-300 ${
                        !day
                          ? ""
                          : selectedDate === day
                          ? "bg-gold text-black font-semibold font-heading glow-gold-sm"
                          : availableDates.includes(day)
                          ? "text-off-white/70 hover:bg-gold/10 hover:text-gold cursor-pointer"
                          : "text-white/10 cursor-not-allowed"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slots + toggle */}
              <div>
                <p className="text-silver/50 text-[12px] tracking-[0.2em] uppercase mb-5 font-body">Available Times</p>
                <div className="grid grid-cols-1 gap-2 mb-10">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`text-left px-5 py-3.5 text-sm transition-all duration-300 border ${
                        selectedTime === slot
                          ? "border-gold/50 text-gold bg-gold/[0.06] glow-gold-sm"
                          : "border-white/[0.06] text-silver/50 hover:border-gold/20 hover:text-silver"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>

                {/* Toggle */}
                <div className="flex items-center gap-2 mb-10">
                  <button
                    onClick={() => setIsZoom(true)}
                    className={`px-5 py-2.5 text-sm font-heading font-medium transition-all duration-300 ${
                      isZoom ? "bg-gold text-black" : "bg-transparent border border-white/[0.08] text-silver/50 hover:border-gold/20"
                    }`}
                  >
                    Zoom
                  </button>
                  <button
                    onClick={() => setIsZoom(false)}
                    className={`px-5 py-2.5 text-sm font-heading font-medium transition-all duration-300 ${
                      !isZoom ? "bg-gold text-black" : "bg-transparent border border-white/[0.08] text-silver/50 hover:border-gold/20"
                    }`}
                  >
                    In-Person
                  </button>
                </div>

                <button className="w-full py-4 bg-gold text-black font-heading font-semibold text-sm uppercase tracking-[0.15em] btn-shimmer transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--gold)/0.2)]">
                  Confirm Booking
                </button>
              </div>
            </div>

            <p className="text-white/15 text-[11px] text-center mt-8 tracking-wide">
              Secure payment processing powered by [Payment Partner]
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SchedulingSection;
