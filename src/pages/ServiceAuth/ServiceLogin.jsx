import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainLayout from "@/components/layout/MainLayout";
import { Link, useNavigate } from "react-router-dom";

function ServiceLogin() {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		localStorage.setItem("buildnest-role", "vendor");
		navigate("/service-provider-admin");
	};

	return (
		<MainLayout>
			<div className="min-h-[calc(100vh-9rem)] bg-gradient-to-br from-amber-50 via-white to-orange-50">
				<div className="container mx-auto px-6 py-12 md:py-16">
					<div className="grid overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:grid-cols-2">
						<div className="bg-gradient-to-br from-amber-200 via-amber-100 to-white p-8 sm:p-10 lg:p-12">
							<div className="inline-flex rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
								Service provider portal
							</div>

							<h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
								Manage your construction business from one place.
							</h1>

							<p className="mt-4 max-w-md text-base text-slate-600">
								Track project enquiries, update packages, and respond to homeowners planning their next build.
							</p>

							<div className="mt-8 space-y-4">
								{[
									"Respond to new enquiries quickly",
									"Update pricing and service packages",
									"Track leads and project bookings",
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
										Access portal
									</p>
									<h2 className="mt-2 text-3xl font-bold text-slate-900">Service provider login</h2>
								</div>

								<form className="space-y-5" onSubmit={handleSubmit}>
									<div className="space-y-2">
										<label htmlFor="vendor-login-email" className="text-sm font-medium text-slate-700">
											Business email
										</label>
										<Input id="vendor-login-email" type="email" placeholder="hello@business.com" className="h-11 rounded-xl" />
									</div>

									<div className="space-y-2">
										<label htmlFor="vendor-login-password" className="text-sm font-medium text-slate-700">
											Password
										</label>
										<Input id="vendor-login-password" type="password" placeholder="Enter your password" className="h-11 rounded-xl" />
									</div>

									<Button
										type="submit"
										className="h-11 w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-base font-semibold text-white shadow-[0_10px_20px_rgba(251,146,60,0.25)] hover:from-amber-600 hover:to-orange-600"
									>
										Login as service provider
									</Button>
								</form>

								<div className="mt-6 space-y-3 text-center text-sm text-slate-600">
									<p>
										Want to join?{' '}
										<Link to="/service-provider-register" className="font-semibold text-amber-600 hover:text-amber-500">
											Create a service provider account
										</Link>
									</p>
									<p>
										Demo flow:{' '}
										<Link to="/service-provider-admin" className="font-semibold text-amber-600 hover:text-amber-500">
											Go to service provider dashboard
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

export default ServiceLogin;
