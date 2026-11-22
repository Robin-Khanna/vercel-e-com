
import { useParams } from "react-router-dom";
import products from "../../data/products";
import "./Product.css";

function Product() {
  const { id } = useParams();

  const product = products.find(
    (item) => String(item.id) === id
  );

  if (!product) {
    return <h2>Product Not Found!</h2>;
  }

  return (
    <section className="product-details">

      <div className="product-details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details-info">
        <h2>{product.name}</h2>

        <p className="details-rating">
          ⭐ {product.rating || "No rating"}
        </p>

        <div className="details-price">
          <span>৳{product.price}</span>
          {product.oldPrice && (
            <del>৳{product.oldPrice}</del>
          )}
        </div>

        <p>{product.description}</p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <p>
          <strong>Seller:</strong> {product.sellerName}
        </p>

        <div className="details-buttons">
          <button type="button">Add to Cart</button>
          <button type="button">Buy Now</button>
        </div>
      </div>

    </section>
  );
}

export default Product;
