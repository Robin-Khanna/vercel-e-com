
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    district: "",
    postCode: "",
  });

  const [payment, setPayment] = useState("cod");
  const [placedOrder, setPlacedOrder] = useState(null);

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const displayItems = placedOrder
    ? placedOrder.items
    : cartItems;

  const subtotal = displayItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  const shippingCharge = displayItems.length > 0 ? 100 : 0;
  const total = subtotal + shippingCharge;

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.email.trim() ||
      !customer.address.trim() ||
      !customer.city.trim() ||
      !customer.district.trim() ||
      !customer.postCode.trim()
    ) {
      alert("Please fill in all information!");
      return;
    }

    const order = {
      orderId: Date.now(),
      customer: customer,
      items: [...cartItems],
      paymentMethod: payment,
      subtotal: subtotal,
      shippingCharge: shippingCharge,
      total: total,
      orderDate: new Date().toISOString(),
      status: "Pending",
    };

    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    const updatedOrders = [...savedOrders, order];

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    setPlacedOrder(order);
    clearCart();
  };

  return (
    <section className="checkout-page">
      <h2>Checkout</h2>

      {placedOrder ? (
        <div className="order-success">
          <h3>Order Placed Successfully!</h3>
          <p>Thank you for your order.</p>
          <p>Order ID: {placedOrder.orderId}</p>
          <p>Total Amount: ৳{placedOrder.total}</p>
          <p>Payment: {placedOrder.paymentMethod === "cod"
            ? "Cash on Delivery"
            : "Online Payment"}
          </p>
          <p>Status: {placedOrder.status}</p>
        </div>
      ) : (
        <div className="checkout-form">
          <form onSubmit={handlePlaceOrder}>
            {/* Customer Information */}
            <div>
              <h3>Customer Information</h3>

              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={customer.name}
                onChange={handleChange}
                required
              />

              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={customer.phone}
                onChange={handleChange}
                required
              />

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={customer.email}
                onChange={handleChange}
                required
              />

              <label>Delivery Address</label>
              <textarea
                name="address"
                placeholder="Enter your full address"
                value={customer.address}
                onChange={handleChange}
                required
              />

              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={customer.city}
                onChange={handleChange}
                required
              />
            </div>

            {/* Delivery Information */}
            <div>
              <h3>Delivery Information</h3>

              <label>District</label>
              <input
                type="text"
                name="district"
                placeholder="Enter your district"
                value={customer.district}
                onChange={handleChange}
                required
              />

              <label>Post Code</label>
              <input
                type="text"
                name="postCode"
                placeholder="Enter your post code"
                value={customer.postCode}
                onChange={handleChange}
                required
              />
            </div>

            {/* Payment Method */}
            <div>
              <h3>Payment Method</h3>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payment === "cod"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                Cash on Delivery
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={payment === "online"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                Online Payment
              </label>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <h3>Order Summary</h3>

              {cartItems.map((item) => (
                <div className="summary-product" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h4>{item.name}</h4>
                    <p>Price: ৳{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}

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
                type="submit"
                className="place-order-btn"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default Checkout;
