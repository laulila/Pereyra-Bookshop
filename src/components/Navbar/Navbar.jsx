import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import "./Navbar.css";

export const Navbar = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        Pereyra Bookshop 📚
      </Link>

      <nav>
        <ul className="navbar-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/cart">
              🛒 Carrito ({totalItems})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};