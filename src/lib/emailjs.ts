import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const BOOKING_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY);

export async function sendContactEmail(params: {
  name: string;
  email: string;
  message: string;
}) {
  return emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, {
    name: params.name,
    email: params.email,
    message: params.message,
    time: new Date().toLocaleString(),
  });
}

export async function sendBookingConfirmation(params: {
  email: string;
  date: string;
  time: string;
  format: string;
}) {
  return emailjs.send(SERVICE_ID, BOOKING_TEMPLATE_ID, {
    to_email: params.email,
    booking_date: params.date,
    booking_time: params.time,
    booking_format: params.format,
  });
}
