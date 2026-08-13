import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, CheckCircle2, Heart, MapPin, Phone, Save, Sparkles, Users } from "lucide-react";

const defaultProfile = {
  fullName: "Aarohi Mehta",
  email: "aarohi@example.com",
  phone: "+91 98765 43210",
  city: "Bangalore",
  projectTargetDate: "2026-11-18",
  preferredStyle: "Modern contemporary",
  preferredLocation: "Bangalore East",
  projectBudget: "₹25L - ₹35L",
};

function Profile() {
  const [formData, setFormData] = useState(defaultProfile);
  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-rose-50 via-white to-white pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-rose-100 bg-gradient-to-r from-white via-rose-50 to-pink-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
                  My account
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Home project profile
                </h1>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="h-11 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button asChild className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                  <Link to="/inquiries">My enquiries</Link>
                </Button>
              </div>
            </div>
          </header>

          <section className="mt-8 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-2xl font-bold text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)]">
                  {formData.fullName
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div>
                  <p className="text-xl font-bold text-slate-900">{formData.fullName}</p>
                  <p className="text-sm text-slate-500">Homeowner profile</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.25rem] border border-rose-100 bg-rose-50/40 p-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <CalendarDays className="h-5 w-5 text-rose-500" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Project timeline</p>
                      <p className="mt-1 font-semibold text-slate-900">{formData.projectTargetDate}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.25rem] border border-rose-100 bg-rose-50/40 p-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="h-5 w-5 text-rose-500" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-500">City</p>
                      <p className="mt-1 font-semibold text-slate-900">{formData.city}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.25rem] border border-rose-100 bg-rose-50/40 p-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Users className="h-5 w-5 text-rose-500" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Project budget</p>
                      <p className="mt-1 font-semibold text-slate-900">{formData.projectBudget}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-rose-100 bg-gradient-to-br from-rose-50 to-pink-50 p-5">
                <div className="flex items-center gap-2 text-rose-600">
                  <Sparkles className="h-4 w-4" />
                  <p className="text-sm font-semibold uppercase tracking-[0.16em]">Home vision</p>
                </div>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {formData.fullName.split(" ")[0]} is planning a warm, modern home with a refined layout, practical material choices, and a comfortable lifestyle-focused finish palette.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">Account details</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Update your profile</h2>
                </div>
                <Heart className="h-5 w-5 text-rose-500" />
              </div>

              <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-slate-700">Full name</label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="h-11 rounded-xl border-rose-100 bg-rose-50/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="preferredStyle" className="text-sm font-medium text-slate-700">Preferred style</label>
                  <Input
                    id="preferredStyle"
                    name="preferredStyle"
                    type="text"
                    value={formData.preferredStyle}
                    onChange={handleChange}
                    className="h-11 rounded-xl border-rose-100 bg-rose-50/50"
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
                    className="h-11 rounded-xl border-rose-100 bg-rose-50/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-11 rounded-xl border-rose-100 bg-rose-50/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium text-slate-700">City</label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    className="h-11 rounded-xl border-rose-100 bg-rose-50/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectTargetDate" className="text-sm font-medium text-slate-700">Project target date</label>
                  <Input
                    id="projectTargetDate"
                    name="projectTargetDate"
                    type="date"
                    value={formData.projectTargetDate}
                    onChange={handleChange}
                    className="h-11 rounded-xl border-rose-100 bg-rose-50/50"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="preferredLocation" className="text-sm font-medium text-slate-700">Preferred location</label>
                  <Input
                    id="preferredLocation"
                    name="preferredLocation"
                    type="text"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    placeholder="Bangalore East"
                    className="h-11 rounded-xl border-rose-100 bg-rose-50/50"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="projectBudget" className="text-sm font-medium text-slate-700">Project budget</label>
                  <Input
                    id="projectBudget"
                    name="projectBudget"
                    type="text"
                    value={formData.projectBudget}
                    onChange={handleChange}
                    className="h-11 rounded-xl border-rose-100 bg-rose-50/50"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Phone className="h-4 w-4 text-rose-500" />
                    Verified contact details
                  </div>

                  <Button type="submit" className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                    <Save className="mr-2 h-4 w-4" />
                    Save changes
                  </Button>
                </div>

                {saved ? (
                  <div className="md:col-span-2 rounded-[1rem] border border-emerald-100 bg-emerald-50 p-3 text-sm text-emerald-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Profile updated successfully.
                    </div>
                  </div>
                ) : null}
              </form>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;
