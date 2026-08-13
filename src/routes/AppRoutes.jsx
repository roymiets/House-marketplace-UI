import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Services from "@/pages/Services/Services";
import ServiceDetails from "@/pages/Services/ServiceDetails";
import Materials from "@/pages/Materials/Materials";
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
import VendorAdmin from "@/pages/VendorAdmin/VendorAdmin";
import VendorProfile from "@/pages/VendorAdmin/VendorProfile";
import VendorLeads from "@/pages/VendorLeads/VendorLeads";
import VendorLogin from "@/pages/VendorAuth/VendorLogin";
import VendorRegister from "@/pages/VendorAuth/VendorRegister";
import AdminLogin from "@/pages/AdminAuth/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard/AdminDashboard";
import AdminVendors from "@/pages/Admin/AdminVendors";
import AdminInquiries from "@/pages/Admin/AdminInquiries";
import AdminUsers from "@/pages/Admin/AdminUsers";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/vendors" element={<Services />} />

        <Route path="/materials" element={<Materials />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/compare" element={<Compare />} />

        <Route path="/inquiries" element={<Inquiries />} />

        <Route path="/vendor-inquiries" element={<Inquiries />} />

        <Route path="/quotes" element={<Quotes />} />

        <Route path="/vendor-quotes" element={<Quotes />} />

        <Route path="/payments" element={<Payments />} />

        <Route path="/vendor-payments" element={<Payments />} />

        <Route path="/vendor-admin" element={<VendorAdmin />} />

        <Route path="/vendor-leads" element={<VendorLeads />} />

        <Route path="/vendor-profile/:id" element={<VendorProfile />} />

        <Route path="/vendor-profile/new" element={<VendorProfile />} />

        <Route path="/vendors/:id" element={<ServiceDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/vendor-login" element={<VendorLogin />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/vendor-register" element={<VendorRegister />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/admin-vendors" element={<AdminVendors />} />

        <Route path="/admin-inquiries" element={<AdminInquiries />} />

        <Route path="/admin-users" element={<AdminUsers />} />

        <Route path="/admin-profile" element={<AdminUsers />} />

        <Route path="/admin-settings" element={<AdminUsers />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;