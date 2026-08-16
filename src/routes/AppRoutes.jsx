import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Services from "@/pages/Services/Services";
import ServiceDetails from "@/pages/Services/ServiceDetails";
import Materials from "@/pages/Materials/Materials";
import MaterialDetails from "@/pages/Materials/MaterialDetails";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import ForgotPassword from "@/pages/ForgotPassword/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword/ResetPassword";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Wishlist from "@/pages/Wishlist/Wishlist";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Compare from "@/pages/Compare/Compare";
import Inquiries from "@/pages/Inquiries/Inquiries";
import Profile from "@/pages/Profile/Profile";
import Quotes from "@/pages/Quotes/Quotes";
import Payments from "@/pages/Payments/Payments";
import ServiceAdmin from "@/pages/ServiceAdmin/ServiceAdmin";
import ServiceProfile from "@/pages/ServiceAdmin/ServiceProfile";
import ServiceLeads from "@/pages/ServiceLeads/ServiceLeads";
import ServiceLogin from "@/pages/ServiceAuth/ServiceLogin";
import ServiceRegister from "@/pages/ServiceAuth/ServiceRegister";
import AdminLogin from "@/pages/AdminAuth/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard/AdminDashboard";
import AdminVendors from "@/pages/Admin/AdminVendors";
import AdminInquiries from "@/pages/Admin/AdminInquiries";
import AdminUsers from "@/pages/Admin/AdminUsers";
import Cart from "@/pages/Cart/Cart";
import SupplierAdmin from "@/pages/SupplierAdmin/SupplierAdmin";
import SupplierLogin from "@/pages/SupplierAuth/SupplierLogin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/:id" element={<MaterialDetails />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/compare" element={<Compare />} />

        <Route path="/inquiries" element={<Inquiries />} />

        <Route path="/service-provider-inquiries" element={<Inquiries />} />

        <Route path="/quotes" element={<Quotes />} />

        <Route path="/service-provider-quotes" element={<Quotes />} />

        <Route path="/payments" element={<Payments />} />

        <Route path="/service-provider-payments" element={<Payments />} />

        <Route path="/service-provider-admin" element={<ServiceAdmin />} />

        <Route path="/service-provider-leads" element={<ServiceLeads />} />

        <Route path="/service-provider-profile/:id" element={<ServiceProfile />} />

        <Route path="/service-provider-profile/new" element={<ServiceProfile />} />

        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/service-provider-login" element={<ServiceLogin />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/service-provider-register" element={<ServiceRegister />} />
        <Route path="/supplier-admin" element={<SupplierAdmin />} />
        <Route path="/supplier-login" element={<SupplierLogin />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/admin-vendors" element={<AdminVendors />} />

        <Route path="/admin-inquiries" element={<AdminInquiries />} />

        <Route path="/admin-users" element={<AdminUsers />} />

        <Route path="/admin-profile" element={<AdminUsers />} />

        <Route path="/admin-settings" element={<AdminUsers />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;