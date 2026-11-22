
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <section className="admin-dashboard">
     <div className="container">
       <div className="admin-dashboard-header">
        <h2>Admin Dashboard</h2>
        <p>Manage your e-commerce website</p>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <h3>Total Orders</h3>
          <h2>0</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Total Products</h3>
          <h2>0</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Total Customers</h3>
          <h2>0</h2>
        </div>

        <div className="admin-stat-card">
          <h3>Total Sellers</h3>
          <h2>0</h2>
        </div>
      </div>
     </div>
    </section>
  );
}

export default AdminDashboard;
