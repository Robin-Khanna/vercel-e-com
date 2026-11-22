
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  const shippingCharge = cartItems.length > 0 ? 100 : 0;

  const total = subtotal + shippingCharge;

  return (
    <section className="cart-page">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <h3>Your Cart is Empty!</h3>
      ) : (
        <div className="cart-content">

          <div className="cart-products">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>৳{item.price}</p>

                  <div className="cart-quantity">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="remove-cart-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Shipping Charge</span>
              <span>৳{shippingCharge}</span>
            </div>

            <div className="summary-row summary-total">
              <strong>Total</strong>
              <strong>৳{total}</strong>
            </div>

            <button
              className="checkout-btn"
              type="button"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </section>
  );
}

export default Cart;
