import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

const info = [
  {
    icon: Phone,
    title: "Call us",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email us",
    value: "hello@buildnest.com",
  },
  {
    icon: MapPin,
    title: "Visit us",
    value: "Pune, India",
  },
];

function Contact() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-rose-50 via-white to-white pb-20">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">Contact us</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              We’d love to hear from you
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <h2 className="text-2xl font-bold text-slate-900">Reach our team</h2>

              <div className="mt-8 space-y-5">
                {info.map(({ icon: Icon, title, value }) => (
                  <div key={title} className="flex items-start gap-4 rounded-[1.25rem] border border-rose-100 bg-rose-50/40 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-rose-600 ring-1 ring-rose-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{title}</p>
                      <p className="mt-1 text-base font-semibold text-slate-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
              <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">Full name</label>
                    <Input id="contact-name" type="text" placeholder="Your name" className="h-11 rounded-xl border-rose-100 bg-rose-50/50" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">Email address</label>
                    <Input id="contact-email" type="email" placeholder="you@example.com" className="h-11 rounded-xl border-rose-100 bg-rose-50/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-sm font-medium text-slate-700">Subject</label>
                  <Input id="contact-subject" type="text" placeholder="How can we help?" className="h-11 rounded-xl border-rose-100 bg-rose-50/50" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">Your message</label>
                  <textarea
                    id="contact-message"
                    rows="6"
                    placeholder="Write your message here..."
                    className="w-full rounded-xl border border-rose-100 bg-rose-50/50 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-rose-200 focus:ring-3 focus:ring-rose-100"
                  />
                </div>

                <Button type="submit" className="h-11 w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;
