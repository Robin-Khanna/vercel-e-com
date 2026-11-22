
import "./Wishlist.css";

function Wishlist({ count = 0 }) {
  return (
    <div className="wishlist">
      <span className="wishlist-icon">♡</span>
      <span >Wishlist</span>
      <button className="wishlist-count">{count}</button>
    </div>
  );
}

export default Wishlist;
