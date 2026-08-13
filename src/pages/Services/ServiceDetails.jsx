import { useState } from "react";
import { useParams } from "react-router-dom";
import { vendors } from "@/data/vendors";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Star, ShieldCheck, Clock3, Sparkles, MessageCircleMore, CheckCircle2 } from "lucide-react";

const serviceHighlights = [
  {
    icon: ShieldCheck,
    title: "Verified service",
    text: "Trusted by homeowners for quality craftsmanship and reliable project delivery.",
  },
  {
    icon: Clock3,
    title: "Fast response",
    text: "Quick replies and easy coordination for your build or renovation plans.",
  },
  {
    icon: Sparkles,
    title: "Custom packages",
    text: "Flexible pricing and packages tailored to your home goals and budget.",
  },
];

const reviews = [
  {
    name: "Aanya Sharma",
    text: "The team understood our needs clearly and managed the design process with great attention to detail.",
  },
  {
    name: "Rhea Nair",
    text: "We loved how well they balanced practical planning with stylish finishes throughout the renovation.",
  },
  {
    name: "Sana Iyer",
    text: "Professional, friendly, and highly organized. It felt like working with a true home project partner.",
  },
];

function ServiceDetails() {
  const { id } = useParams();
  const vendor = vendors.find((v) => v.id === Number(id));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    projectSize: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, date, projectSize, message } = formData;

    if (!name || !email || !date || !projectSize || !message) {
      setError("Please fill in all fields before sending your enquiry.");
      return;
    }

    if (Number(projectSize) < 500) {
      setError("Project size must be at least 500 sq ft.");
      return;
    }

    const inquiry = {
      id: `${Date.now()}`,
      vendorName: vendor.name,
      category: vendor.category,
      name,
      email,
      date,
      projectSize: Number(projectSize),
      message,
      status: "new",
    };

    const savedInquiries = (() => {
      try {
        const stored = localStorage.getItem("buildnest-inquiries");
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    })();

    localStorage.setItem(
      "buildnest-inquiries",
      JSON.stringify([inquiry, ...savedInquiries]),
    );

    setError("");
    setSubmitted(true);
  };

  if (!vendor) {
    return (
      <MainLayout>
        <div className="container mx-auto px-6 py-16">
          <div className="rounded-[2rem] border border-dashed border-amber-200 bg-white p-12 text-center">
            <h1 className="text-3xl font-bold text-slate-900">Service provider not found</h1>
            <p className="mt-3 text-slate-600">The listed service provider could not be found. Please try another profile.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <span>Home</span>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span className="font-medium text-slate-700">{vendor.name}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="overflow-hidden rounded-[2rem] border border-amber-100 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
                <img
                  src={vendor.images?.[0]}
                  alt={vendor.name}
                  className="h-[440px] w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                {vendor.images?.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-[1.2rem] border border-amber-100 bg-white p-1 shadow-sm">
                    <img
                      src={image}
                      alt={`${vendor.name} gallery ${index + 1}`}
                      className="h-28 w-full rounded-[0.9rem] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-8">
              <Badge className="rounded-full bg-amber-50 px-3 py-1 text-amber-700 ring-1 ring-amber-100">
                {vendor.category}
              </Badge>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                {vendor.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 font-medium text-amber-700 ring-1 ring-amber-100">
                  <Star className="h-4 w-4 fill-current" />
                  {vendor.rating}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  {vendor.city}
                </span>
              </div>

              <p className="mt-6 text-base leading-7 text-slate-600">{vendor.description}</p>

              <div className="mt-8 rounded-[1.5rem] border border-amber-100 bg-amber-50/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Starting from</p>
                <div className="mt-2 flex items-end gap-3">
                  <span className="text-3xl font-bold text-slate-900">{vendor.price}</span>
                  <span className="pb-1 text-sm text-slate-500">per package</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                  Book now
                </Button>
                <Button variant="outline" className="h-12 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50">
                  <span className="inline-flex items-center gap-2">
                    <MessageCircleMore className="h-4 w-4" />
                    Contact vendor
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <section className="mt-12 rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Why homeowners choose this vendor</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {serviceHighlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[1.5rem] border border-amber-100 bg-amber-50/40 p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-amber-600 ring-1 ring-amber-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Included in the package</h2>

              <ul className="mt-6 space-y-4 text-slate-600">
                {[
                  "Initial project consultation and planning session",
                  "Customized scope based on your home goals and timeline",
                  "Professional execution with milestone-based updates",
                  "Dedicated support during planning and coordination",
                  "High-quality finishes with a polished premium result",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-600">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Recent reviews</h2>

              <div className="mt-6 space-y-5">
                {reviews.map(({ name, text }) => (
                  <div key={name} className="rounded-[1.5rem] border border-amber-100 bg-amber-50/40 p-5">
                    <div className="mb-3 flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={`${name}-${index}`} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm leading-6 text-slate-700">“{text}”</p>
                    <p className="mt-4 text-sm font-semibold text-slate-900">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Quick enquiry</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Request a quote for {vendor.name}</h2>
              </div>
              <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 ring-1 ring-amber-100">
                Response within 24 hours
              </div>
            </div>

            {!submitted ? (
              <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full name</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-11 rounded-xl border-amber-100 bg-amber-50/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="h-11 rounded-xl border-amber-100 bg-amber-50/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-slate-700">Project target date</label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="h-11 rounded-xl border-amber-100 bg-amber-50/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectSize" className="text-sm font-medium text-slate-700">Project size (sq ft)</label>
                  <Input
                    id="projectSize"
                    name="projectSize"
                    type="number"
                    min="500"
                    value={formData.projectSize}
                    onChange={handleChange}
                    placeholder="2500"
                    className="h-11 rounded-xl border-amber-100 bg-amber-50/50"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Tell us about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us your vision, preferred timeline, site goals, and any special requirements."
                    className="w-full rounded-xl border border-amber-100 bg-amber-50/50 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-amber-200 focus:ring-3 focus:ring-amber-100"
                  />
                </div>

                {error ? (
                  <div className="md:col-span-2 rounded-[1rem] border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700">
                    {error}
                  </div>
                ) : null}

                <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-500">No payment required for initial inquiry.</p>
                  <Button type="submit" className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                    Send enquiry
                  </Button>
                </div>
              </form>
            ) : (
              <div className="mt-8 rounded-[1.5rem] border border-emerald-100 bg-emerald-50/60 p-5 text-emerald-700">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="font-medium">Your enquiry for {vendor.name} has been sent successfully.</p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default ServiceDetails;