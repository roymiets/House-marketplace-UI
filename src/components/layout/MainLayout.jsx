import Navbar from "@/components/Navbar/Navbar";
import ServiceNavbar from "@/components/Navbar/ServiceNavbar";
import AdminNavbar from "@/components/Navbar/AdminNavbar";
import Footer from "@/components/layout/Footer";
import { useLocation } from "react-router-dom";

function MainLayout({ children }) {
  const { pathname } = useLocation();
  const vendorRoutes = [
    "/service-provider-admin",
    "/service-provider-leads",
    "/service-provider-profile",
    "/service-provider-quotes",
    "/service-provider-payments",
    "/service-provider-inquiries",
    "/service-provider-login",
    "/service-provider-register",
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
  // Treat supplier pages the same as service-provider area so suppliers see the
  // service-provider navbar instead of the default customer navbar.
  const isSupplierPath = pathname === "/supplier-admin" || pathname.startsWith("/supplier-");

  const showServiceNavbar = isVendorArea || isSupplierPath;

  const isAdminArea = adminRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  return (
    <>
      {isAdminArea ? <AdminNavbar /> : showServiceNavbar ? <ServiceNavbar /> : <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;