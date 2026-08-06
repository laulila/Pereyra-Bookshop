import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { OrderSuccess } from "./pages/OrderSuccess/OrderSuccess";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Admin } from "./pages/Admin/Admin";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { Login } from "./pages/Login/Login";
function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/order/:id" element={<OrderSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
export default App;
