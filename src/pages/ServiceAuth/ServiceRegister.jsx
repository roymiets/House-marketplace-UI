import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

function ServiceRegister() {
	return (
		<MainLayout>
			<div className="min-h-[calc(100vh-9rem)] bg-gradient-to-br from-amber-50 via-white to-orange-50">
				<div className="container mx-auto px-6 py-12 md:py-16">
					<div className="grid overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:grid-cols-2">
						<div className="bg-gradient-to-br from-amber-200 via-amber-100 to-white p-8 sm:p-10 lg:p-12">
							<div className="inline-flex rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
								Service provider sign up
							</div>

							<h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
								Grow your home services business with BuildNest.
							</h1>

							<p className="mt-4 max-w-md text-base text-slate-600">
								Create your service provider profile, showcase your work, and connect with homeowners planning their next build or renovation.
							</p>

							<div className="mt-8 space-y-4">
								{[
									"Showcase your pricing and packages",
									"Get matched with qualified homeowners",
									"Manage leads and project enquiries",
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
									<p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500">
										Business account
									</p>
									<h2 className="mt-2 text-3xl font-bold text-slate-900">Service provider registration</h2>
								</div>

								<form className="space-y-4">
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="space-y-2">
											<label htmlFor="vendor-firstName" className="text-sm font-medium text-slate-700">
												First name
											</label>
											<Input id="vendor-firstName" type="text" placeholder="Aarav" className="h-11 rounded-xl" />
										</div>

										<div className="space-y-2">
											<label htmlFor="vendor-lastName" className="text-sm font-medium text-slate-700">
												Last name
											</label>
											<Input id="vendor-lastName" type="text" placeholder="Sharma" className="h-11 rounded-xl" />
										</div>
									</div>

									<div className="space-y-2">
										<label htmlFor="vendor-business" className="text-sm font-medium text-slate-700">
											Business name
										</label>
										<Input id="vendor-business" type="text" placeholder="Summit Build Studio" className="h-11 rounded-xl" />
									</div>

									<div className="space-y-2">
										<label htmlFor="vendor-email" className="text-sm font-medium text-slate-700">
											Email address
										</label>
										<Input id="vendor-email" type="email" placeholder="hello@business.com" className="h-11 rounded-xl" />
									</div>

									<div className="space-y-2">
										<label htmlFor="vendor-phone" className="text-sm font-medium text-slate-700">
											Phone number
										</label>
										<Input id="vendor-phone" type="tel" placeholder="+91 98765 43210" className="h-11 rounded-xl" />
									</div>

									<div className="space-y-2">
										<label htmlFor="vendor-category" className="text-sm font-medium text-slate-700">
											Service category
										</label>
										<select
											id="vendor-category"
											className="h-11 w-full rounded-xl border border-input bg-transparent px-3 text-base text-slate-700 outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
										>
											<option>Architects</option>
											<option>Builders</option>
											<option>Interior Designers</option>
											<option>Renovation</option>
											<option>Landscaping</option>
										</select>
									</div>

									<div className="space-y-2">
										<label htmlFor="vendor-password" className="text-sm font-medium text-slate-700">
											Password
										</label>
										<Input id="vendor-password" type="password" placeholder="Create a password" className="h-11 rounded-xl" />
									</div>

									<Button
										type="submit"
										className="h-11 w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-base font-semibold text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
									>
										Create service provider account
									</Button>
								</form>

								<p className="mt-6 text-center text-sm text-slate-600">
									Already a service provider?{' '}
									<Link to="/service-provider-login" className="font-semibold text-amber-600 hover:text-amber-500">
										Service provider login
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

export default ServiceRegister;
