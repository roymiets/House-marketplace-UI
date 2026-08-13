import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainLayout from "@/components/layout/MainLayout";
import { CheckCircle2, LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.newPassword || !form.confirmPassword) {
      setError("Please fill in both password fields.");
      return;
    }

    if (form.newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-9rem)] bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-rose-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="bg-gradient-to-br from-rose-200 via-rose-100 to-white p-8 sm:p-10">
              <div className="inline-flex rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">
                Secure reset
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Create a new password
              </h1>

              <p className="mt-4 text-base text-slate-600">
                Choose a strong password to protect your home project account and saved project preferences.
              </p>

              <div className="mt-8 rounded-[1.5rem] bg-white/70 p-4 shadow-sm ring-1 ring-rose-100">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Password protection</p>
                    <p className="text-sm font-semibold text-slate-800">Use 8+ characters with a mix of symbols</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="mx-auto max-w-md">
                {!submitted ? (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label htmlFor="new-password" className="text-sm font-medium text-slate-700">
                        New password
                      </label>
                      <Input
                        id="new-password"
                        name="newPassword"
                        type="password"
                        value={form.newPassword}
                        onChange={handleChange}
                        placeholder="Create a new password"
                        className="h-11 rounded-xl border-rose-100 bg-rose-50/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="confirm-new-password" className="text-sm font-medium text-slate-700">
                        Confirm password
                      </label>
                      <Input
                        id="confirm-new-password"
                        name="confirmPassword"
                        type="password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Re-enter your password"
                        className="h-11 rounded-xl border-rose-100 bg-rose-50/50"
                        required
                      />
                    </div>

                    {error ? (
                      <div className="rounded-[1rem] border border-rose-200 bg-rose-50 p-3 text-sm text-rose-600">
                        {error}
                      </div>
                    ) : null}

                    <Button
                      type="submit"
                      className="h-11 w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-base font-semibold text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
                    >
                      Update password
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-5">
                    <div className="rounded-[1.25rem] border border-emerald-100 bg-emerald-50/60 p-4 text-sm text-emerald-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Password updated successfully.</span>
                      </div>
                    </div>

                    <Link
                      to="/login"
                      className="inline-flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-base font-semibold text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
                    >
                      Go to login
                    </Link>
                  </div>
                )}

                <div className="mt-6 text-center text-sm text-slate-600">
                  <Link to="/login" className="inline-flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-500">
                    <LockKeyhole className="h-4 w-4" />
                    Back to login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ResetPassword;
