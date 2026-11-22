
import { useContext, useState } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductContext";
import "./AdminProducts.css";

const initialForm = {
  name: "",
  image: "",
  price: "",
  oldPrice: "",
  rating: "",
  category: "",
  description: "",
  stock: "",
  sellerName: "",
};

function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct } =
    useContext(ProductContext);

  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      oldPrice: Number(form.oldPrice),
      rating: Number(form.rating),
      stock: Number(form.stock),
    };

    if (editingId) {
      updateProduct({
        ...productData,
        id: editingId,
      });
      setEditingId(null);
    } else {
      addProduct(productData);
    }

    setForm(initialForm);
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      image: product.image,
      price: String(product.price),
      oldPrice: String(product.oldPrice),
      rating: String(product.rating),
      category: product.category,
      description: product.description,
      stock: String(product.stock),
      sellerName: product.sellerName,
    });

    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      deleteProduct(id);
    }
  };

  const handleCancel = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  return (
    <section className="admin-products">
      <div className="admin-products-header container">
        <h2>Product Management</h2>
        <p>Manage all products in your store</p>
      </div>

      <form className="product-form container" onSubmit={handleSubmit}>
        <h3>{editingId ? "Edit Product" : "Add New Product"}</h3>

        <div className="product-form-grid">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />

          <input
            name="price"
            type="number"
            min="0"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />

          <input
            name="oldPrice"
            type="number"
            min="0"
            value={form.oldPrice}
            onChange={handleChange}
            placeholder="Old Price"
            required
          />

          <input
            name="rating"
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={form.rating}
            onChange={handleChange}
            placeholder="Rating (0-5)"
            required
          />

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />

          <input
            name="stock"
            type="number"
            min="0"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            required
          />

          <input
            name="sellerName"
            value={form.sellerName}
            onChange={handleChange}
            placeholder="Seller Name"
            required
          />
        </div>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
        />

        <div className="product-form-actions">
          <button type="submit">
            {editingId ? "Update Product" : "Add Product"}
          </button>

          {editingId && (
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="admin-product-list container">
        <h3>All Products ({products.length})</h3>

        <div className="admin-product-table-wrapper">
          <table className="admin-product-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Seller</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="admin-product-info">
                      <img src={product.image} alt={product.name} />
                      <span>{product.name}</span>
                    </div>
                  </td>

                  <td>{product.category}</td>
                  <td>৳{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.sellerName}</td>

                  <td>
                    <div className="admin-product-actions">
                      <button
                        type="button"
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default AdminProducts;
