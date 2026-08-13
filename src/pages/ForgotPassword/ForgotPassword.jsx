import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainLayout from "@/components/layout/MainLayout";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-9rem)] bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="bg-gradient-to-br from-amber-200 via-orange-100 to-white p-8 sm:p-10">
              <div className="inline-flex rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Account recovery
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Reset your password
              </h1>

              <p className="mt-4 text-base text-slate-600">
                Enter the email for your BuildNest account and we’ll send a secure link to help you recover access.
              </p>

              <div className="mt-8 rounded-[1.5rem] bg-white/70 p-4 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Quick recovery</p>
                    <p className="text-sm font-semibold text-slate-800">Reset in under 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="mx-auto max-w-md">
                {!submitted ? (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label htmlFor="forgot-email" className="text-sm font-medium text-slate-700">
                        Email address
                      </label>
                      <Input
                        id="forgot-email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        className="h-11 rounded-xl border-amber-100 bg-amber-50/50"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="h-11 w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-base font-semibold text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
                    >
                      Send reset link
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-5">
                    <div className="rounded-[1.25rem] border border-emerald-100 bg-emerald-50/60 p-4 text-sm text-emerald-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Reset link sent to {email}.</span>
                      </div>
                    </div>

                    <Link
                      to="/reset-password"
                      className="inline-flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-base font-semibold text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
                    >
                      Continue to reset password
                    </Link>
                  </div>
                )}

                <div className="mt-6 text-center text-sm text-slate-600">
                  <Link to="/login" className="inline-flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-500">
                    <ArrowLeft className="h-4 w-4" />
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

export default ForgotPassword;
