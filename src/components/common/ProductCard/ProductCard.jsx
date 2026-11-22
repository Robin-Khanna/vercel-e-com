
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./ProductCard.css";

function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
}) {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  const { id, name, image, price, oldPrice, rating } = product;

  const handleAddToCart = () => {
    addToCart(product);
    onAddToCart?.(product);
  };

  return (
    <div className="product-card">

      <button
        className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
        onClick={() => onToggleWishlist?.(id)}
      >
        {isWishlisted ? "♥" : "♡"}
      </button>

      <Link to={`/product/${id}`} className="product-details-link">
        <img src={image} alt={name} className="product-image" />
      </Link>

      <div className="product-info">

        <Link to={`/product/${id}`} className="product-details-link">
          <h3>{name}</h3>
        </Link>

        <div className="product-rating">
          ⭐ {rating || "No rating"}
        </div>

        <div className="product-price">
          <span>৳{price}</span>
          {oldPrice && <del>৳{oldPrice}</del>}
        </div>

        <button
          className="add-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
