import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="navbar">

      <Link to="/" className="navbar-logo">
        Pereyra Bookshop 📚
      </Link>

      <nav>
        <ul className="navbar-links">

          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>

          <li>
            <Link to="/cart">
              🛒 Carrito
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  );
};