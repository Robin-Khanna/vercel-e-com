
import { Route, Routes } from "react-router-dom";

// Public Pages
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Product from "../pages/Product/Product";
import Categories from "../pages/Categories/Categories";
import Offers from "../pages/Offers/Offers";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import MyOrders from "../pages/MyOrders/MyOrders";

// Authentication
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";

// Layouts
import PublicLayout from "../components/layout/PublicLayout/PublicLayout";
import AdminLayout from "../components/layout/AdminLayout/AdminLayout";

// Admin Pages
import AdminDashboard from "../pages/Admin/AdminDashboard/AdminDashboard";
import AdminProducts from "../pages/Admin/AdminProducts/AdminProducts";
import AdminOrders from "../pages/Admin/AdminOrders/AdminOrders";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Layout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Route>

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Admin Layout */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/products" element={<AdminProducts />} />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />

    </Routes>
  );
}

export default AppRoutes;
