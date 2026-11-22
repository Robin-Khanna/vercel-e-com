
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import PublicMenu from "../PublicMenu/PublicMenu";
import MainLogo from "../../../../assets/images/main-logo.png";

import SearchBar from "../../../common/SearchBar/SearchBar";
import Category from "../../../common/Category/Category";
import Wishlist from "../../../common/Wishlist/Wishlist";
import Account from "../../../common/Account/Account";
import Cart from "../../../common/Cart/Cart";

import "./PublicNavbar.css";

function PublicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSearch = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    navigate(`/shop?${params.toString()}`);
  };

  const handleCategory = (category) => {
    const params = new URLSearchParams(searchParams);

    if (category === "All Categories") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    navigate(`/shop?${params.toString()}`);
  };

  const selectedCategory =
    searchParams.get("category") || "All Categories";

  return (
    <>
      <header>
        <div className="container">
          <div className="public-navbar">

            <div className="navbar-logo">
              <Link to="/">
                <img src={MainLogo} alt="Shop Logo" />
              </Link>
            </div>

            <div className="category-button">
              <Category
                selectedCategory={selectedCategory}
                onSelect={handleCategory}
              />
            </div>

            <div className="navbar-search">
              <SearchBar onSearch={handleSearch} />
            </div>

            <div className="navbar-actions">

              <Link to="/wishlist" className="nav-action">
                <Wishlist />
              </Link>

              <Link to="/my-orders" className="nav-action">
                My Orders
              </Link>

              <Account />

              <Link to="/cart" className="nav-action">
                <Cart count={0} />
              </Link>

              <button
                className="hamburger-btn"
                onClick={openMenu}
                type="button"
              >
                ☰
              </button>

            </div>
          </div>
        </div>
      </header>

      <PublicMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </>
  );
}

export default PublicNavbar;
