import MainLayout from "@/components/layout/MainLayout";

function AdminInquiries() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-amber-50 via-white to-orange-50 pb-16">
        <div className="container mx-auto px-6 py-10 md:py-12">
          <div className="rounded-[2rem] border border-amber-100 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Admin</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Inquiries center</h1>
            <p className="mt-4 max-w-2xl text-slate-600">Track customer and vendor inquiries, assign tasks, and ensure timely follow-up.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AdminInquiries;
