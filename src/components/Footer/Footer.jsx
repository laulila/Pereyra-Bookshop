import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} Pereyra Bookshop 📚
      </p>

      <p>
        Todos los derechos reservados
      </p>
    </footer>
  );
};