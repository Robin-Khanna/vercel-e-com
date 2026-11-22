
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import ProductProvider from "./context/ProductContext/ProductContext.jsx";

function App() {
  return (
    <ProductProvider>
      <AppRoutes />
    </ProductProvider>
  );
}

export default App;
