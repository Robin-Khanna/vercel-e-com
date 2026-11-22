
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import "./Shop.css";

function Shop() {
  const { products } = useContext(ProductContext);

  const [searchParams] = useSearchParams();

  const searchText = searchParams.get("search") || "";
  const selectedCategory =
    searchParams.get("category") || "All Categories";

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchCategory =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <section className="shop-container">
      <div className="shop-header container">
        <h2>All Products</h2>
        <p>Discover our latest products</p>
      </div>

      <div className="shop-products container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h3>No Products Found!</h3>
        )}
      </div>
    </section>
  );
}

export default Shop;
