
import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch?.(searchText.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Search for products, brands and more..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
