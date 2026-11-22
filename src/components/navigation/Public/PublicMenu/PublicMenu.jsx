
import { Link } from "react-router-dom";
import "./PublicMenu.css";

function PublicMenu({ isOpen, onClose }) {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Offers", path: "/offers" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "My Orders", path: "/my-orders" },
    { name: "Cart", path: "/cart" },
    { name: "My Account", path: "/login" },
    { name: "Login / Register", path: "/register" },
  ];

  return (
    <>
      <div
        className={`menu-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />

      <div className={`public-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <h2>Menu</h2>

          <button
            type="button"
            onClick={onClose}
            className="menu-close"
          >
            ✕
          </button>
        </div>

        <nav className="menu-navigation">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={item.name}
              className="menu-link"
              onClick={onClose}
            >
              <span className="menu-number">
                {index + 1}
              </span>

              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default PublicMenu;
