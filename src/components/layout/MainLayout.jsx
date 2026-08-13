import Navbar from "@/components/Navbar/Navbar";
import VendorNavbar from "@/components/Navbar/VendorNavbar";
import AdminNavbar from "@/components/Navbar/AdminNavbar";
import Footer from "@/components/layout/Footer";
import { useLocation } from "react-router-dom";

function MainLayout({ children }) {
  const { pathname } = useLocation();
  const vendorRoutes = [
    "/vendor-admin",
    "/vendor-leads",
    "/vendor-profile",
    "/vendor-quotes",
    "/vendor-payments",
    "/vendor-inquiries",
    "/vendor-login",
    "/vendor-register",
  ];

  const adminRoutes = [
    "/admin-dashboard",
    "/admin-login",
    "/admin-vendors",
    "/admin-inquiries",
    "/admin-users",
    "/admin-profile",
    "/admin-settings",
  ];

  const isVendorArea = vendorRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  const isAdminArea = adminRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  return (
    <>
      {isAdminArea ? <AdminNavbar /> : isVendorArea ? <VendorNavbar /> : <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;