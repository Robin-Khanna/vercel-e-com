
import { useEffect, useState } from "react";
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders") || "[]");
  });

  useEffect(() => {
    const loadOrders = () => {
      const savedOrders = JSON.parse(
        localStorage.getItem("orders") || "[]"
      );

      setOrders(savedOrders);
    };

    window.addEventListener("focus", loadOrders);
    window.addEventListener("storage", loadOrders);

    return () => {
      window.removeEventListener("focus", loadOrders);
      window.removeEventListener("storage", loadOrders);
    };
  }, []);

  const trackingSteps = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
  ];

  return (
    <section className="my-orders-page">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <div className="empty-orders">
          <h3>No Orders Found!</h3>
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.slice().reverse().map((order) => {
            const currentStep = trackingSteps.indexOf(order.status);

            return (
              <div className="order-card" key={order.orderId}>
                <div className="order-header">
                  <div>
                    <h3>Order #{order.orderId}</h3>
                    <p>
                      Date: {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                  </div>

                  <span className="order-status">
                    {order.status}
                  </span>
                </div>

                <div className="order-tracking">
                  <h3>Order Tracking</h3>

                  <div className="tracking-steps">
                    {trackingSteps.map((step, index) => (
                      <div
                        className={`tracking-step ${
                          index <= currentStep ? "completed" : ""
                        }`}
                        key={step}
                      >
                        <div className="tracking-circle">
                          {index < currentStep ? "✓" : index + 1}
                        </div>

                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-products">
                  {order.items.map((item) => (
                    <div className="order-product" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div>
                        <h4>{item.name}</h4>
                        <p>Price: ৳{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-footer">
                  <p>
                    Payment:{" "}
                    {order.paymentMethod === "cod"
                      ? "Cash on Delivery"
                      : "Online Payment"}
                  </p>

                  <h3>Total: ৳{order.total}</h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default MyOrders;
