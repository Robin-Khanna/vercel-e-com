
import { NavLink, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header className="admin-navbar container" >
      <div className="admin-navbar-logo">
        <h2>Admin Panel</h2>
      </div>

      <nav className="admin-navbar-links">
        <NavLink to="/admin">Dashboard</NavLink>
        <NavLink to="/admin/orders">Orders</NavLink>
        <NavLink to="/admin/products">Products</NavLink>
        <NavLink to="/admin/customers">Customers</NavLink>
        <NavLink to="/admin/sellers">Sellers</NavLink>
      </nav>

      <button
        type="button"
        className="admin-logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}

export default AdminNavbar;
