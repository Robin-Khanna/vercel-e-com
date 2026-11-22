
import { useState } from "react";
import "./Category.css";

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Men's Clothing",
  "Women's Clothing",
  "Shoes",
  "Beauty & Health",
  "Home & Kitchen",
  "Sports",
];

function Category({ selectedCategory = "All Categories", onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategory = (category) => {
    onSelect?.(category);
    setIsOpen(false);
  };

  return (
    <div className="category-dropdown">
      <button
        className="category-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCategory}
      </button>

      {isOpen && (
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
