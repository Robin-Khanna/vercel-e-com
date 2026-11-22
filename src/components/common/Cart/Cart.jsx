
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems } = useContext(CartContext);

  const count = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart">
      <span className="cart-icon">🛒</span>
      <span>Cart</span>
      <span className="cart-count">{count}</span>
    </div>
  );
}

export default Cart;
