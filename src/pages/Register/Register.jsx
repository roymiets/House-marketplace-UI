import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

function Register() {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-9rem)] bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:grid-cols-2">
            <div className="bg-gradient-to-br from-amber-200 via-orange-100 to-white p-8 sm:p-10 lg:p-12">
              <div className="inline-flex rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Join BuildNest
              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Build your dream home with confidence.
              </h1>

              <p className="mt-4 max-w-md text-base text-slate-600">
                Create your profile to discover trusted builders, compare project quotes, and plan every stage of your home improvement journey.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Shortlist vetted contractors and designers",
                  "Compare quotes for renovations, interiors, and builds",
                  "Track your home project milestones and budget",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/70 p-3 shadow-sm ring-1 ring-amber-100">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="mx-auto max-w-md">
                <div className="mb-8">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">
                    Create account
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-slate-900">Register</h2>
                </div>

                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                        First name
                      </label>
                      <Input id="firstName" type="text" placeholder="John" className="h-11 rounded-xl" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                        Last name
                      </label>
                      <Input id="lastName" type="text" placeholder="Doe" className="h-11 rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="register-email" className="text-sm font-medium text-slate-700">
                      Email address
                    </label>
                    <Input id="register-email" type="email" placeholder="you@example.com" className="h-11 rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                      Phone number
                    </label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" className="h-11 rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="register-password" className="text-sm font-medium text-slate-700">
                      Password
                    </label>
                    <Input id="register-password" type="password" placeholder="Create a password" className="h-11 rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="confirm-password" className="text-sm font-medium text-slate-700">
                      Confirm password
                    </label>
                    <Input id="confirm-password" type="password" placeholder="Re-enter password" className="h-11 rounded-xl" />
                  </div>

                  <div className="flex items-start gap-2 pt-1 text-sm text-slate-600">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500" />
                    <span>
                      I agree to the <Link to="/" className="font-medium text-amber-600 hover:text-amber-500">Terms of Service</Link> and <Link to="/" className="font-medium text-amber-600 hover:text-amber-500">Privacy Policy</Link>.
                    </span>
                  </div>

                  <Button
                    type="submit"
                    className="h-11 w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-base font-semibold text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
                  >
                    Create account
                  </Button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-600">
                  Already have an account?{' '}
                  <Link to="/login" className="font-semibold text-amber-600 hover:text-amber-500">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;