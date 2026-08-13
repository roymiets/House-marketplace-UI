import MainLayout from "@/components/layout/MainLayout";

function AdminVendors() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <div className="rounded-[2rem] border border-amber-100 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Admin</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Vendor management</h1>
            <p className="mt-4 max-w-2xl text-slate-600">Review vendor applications, manage approvals, and monitor vendor activity from one place.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50/40 p-5">
                <p className="text-sm text-slate-500">Approved vendors</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">186</p>
              </div>
              <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50/40 p-5">
                <p className="text-sm text-slate-500">Pending review</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">12</p>
              </div>
              <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50/40 p-5">
                <p className="text-sm text-slate-500">Rejected</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AdminVendors;
