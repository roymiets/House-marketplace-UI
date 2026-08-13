import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Plus, Save, Sparkles, Trash2 } from "lucide-react";
import { vendors as seedVendors } from "@/data/vendors";

const STORAGE_KEY = "buildnest-vendor-admin";

function getStoredVendors() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : seedVendors;
  } catch {
    return seedVendors;
  }
}

function VendorProfile() {
  const { id } = useParams();
  const currentVendors = getStoredVendors();
  const vendor = useMemo(() => {
    if (id === "new") {
      return {
        id: Date.now(),
        name: "",
        category: "Builders",
        city: "",
        rating: 4.8,
        price: "₹40,000",
        description: "",
        status: "pending",
        featured: false,
        services: ["Residential construction", "Site supervision", "Project planning"],
        images: [
          "https://picsum.photos/600/400?random=20",
          "https://picsum.photos/600/400?random=21",
          "https://picsum.photos/600/400?random=22",
        ],
      };
    }

    return currentVendors.find((item) => Number(item.id) === Number(id)) ?? currentVendors[0];
  }, [id, currentVendors]);

  const [formData, setFormData] = useState({
    ...vendor,
    services: vendor.services ?? ["Residential construction", "Site supervision", "Project planning"],
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const addService = () => {
    setFormData((prev) => ({
      ...prev,
      services: [...(prev.services ?? []), `New service ${((prev.services ?? []).length + 1)}`],
    }));
  };

  const updateService = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      services: (prev.services ?? []).map((service, serviceIndex) =>
        serviceIndex === index ? value : service,
      ),
    }));
  };

  const removeService = (index) => {
    setFormData((prev) => ({
      ...prev,
      services: (prev.services ?? []).filter((_, serviceIndex) => serviceIndex !== index),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const vendors = getStoredVendors();
    const updated = id === "new"
      ? [
          {
            ...formData,
            id: Date.now(),
          },
          ...vendors,
        ]
      : vendors.map((item) =>
          Number(item.id) === Number(id) ? { ...item, ...formData } : item,
        );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSaved(true);
  };

  if (!vendor) {
    return (
      <MainLayout>
        <div className="container mx-auto px-6 py-16">
          <div className="rounded-[2rem] border border-dashed border-rose-200 bg-white p-12 text-center">
            <h1 className="text-3xl font-bold text-slate-900">Vendor not found</h1>
            <p className="mt-3 text-slate-600">This profile does not exist yet in the vendor portal.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <header className="rounded-[2rem] border border-amber-100 bg-gradient-to-r from-white via-amber-50 to-orange-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                  Vendor profile
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  {id === "new" ? "Create a new vendor profile" : formData.name}
                </h1>
              </div>

              <Button asChild variant="outline" className="h-11 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50">
                <Link to="/vendor-admin">Back to portal</Link>
              </Button>
            </div>
          </header>

          <form className="mt-8 rounded-[2rem] border border-amber-100 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Vendor name</label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} className="h-11 rounded-xl border-amber-100 bg-amber-50/50" />
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium text-slate-700">Category</label>
                <Input id="category" name="category" value={formData.category} onChange={handleChange} className="h-11 rounded-xl border-amber-100 bg-amber-50/50" />
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-medium text-slate-700">City</label>
                <Input id="city" name="city" value={formData.city} onChange={handleChange} className="h-11 rounded-xl border-amber-100 bg-amber-50/50" />
              </div>

              <div className="space-y-2">
                <label htmlFor="price" className="text-sm font-medium text-slate-700">Price</label>
                <Input id="price" name="price" value={formData.price} onChange={handleChange} className="h-11 rounded-xl border-amber-100 bg-amber-50/50" />
              </div>

              <div className="space-y-2">
                <label htmlFor="rating" className="text-sm font-medium text-slate-700">Rating</label>
                <Input id="rating" name="rating" type="number" min="0" max="5" step="0.1" value={formData.rating} onChange={handleChange} className="h-11 rounded-xl border-amber-100 bg-amber-50/50" />
              </div>

              <div className="space-y-2">
                <label htmlFor="status" className="text-sm font-medium text-slate-700">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="h-11 w-full rounded-xl border border-amber-100 bg-amber-50/50 px-3 text-sm text-slate-700 outline-none transition focus:border-amber-200 focus:ring-3 focus:ring-amber-100"
                >
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-slate-700">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-amber-100 bg-amber-50/50 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-amber-200 focus:ring-3 focus:ring-amber-100"
                />
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-amber-100 bg-amber-50/40 p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  Services offered
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={addService}
                  className="h-10 rounded-full border-amber-200 bg-white text-amber-700 hover:bg-amber-50"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add service
                </Button>
              </div>

              <div className="mt-4 space-y-3">
                {(formData.services ?? []).map((service, index) => (
                  <div key={`${service}-${index}`} className="flex items-center gap-3">
                    <Input
                      value={service}
                      onChange={(event) => updateService(index, event.target.value)}
                      className="h-11 flex-1 rounded-xl border-amber-100 bg-white"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => removeService(index)}
                      className="h-10 w-10 rounded-full p-0 text-slate-500 hover:bg-amber-50 hover:text-amber-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Vendor profile is visible to buyers after approval.
              </div>

              <Button type="submit" className="h-11 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600">
                <Save className="mr-2 h-4 w-4" />
                Save profile
              </Button>
            </div>

            {saved ? (
              <div className="mt-5 rounded-[1rem] border border-emerald-100 bg-emerald-50 p-3 text-sm text-emerald-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Vendor profile saved successfully.
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default VendorProfile;
