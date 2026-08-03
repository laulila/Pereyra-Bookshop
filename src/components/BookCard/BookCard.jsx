import { Link } from "react-router-dom";
import "./BookCard.css";

export const BookCard = ({ book }) => {
  return (
    <article className="book-card">
      <img
        src={book.image}
        alt={book.title}
        className="book-image"
      />

      <div className="book-info">
        <h3>{book.title}</h3>

        <p>{book.author}</p>

        <p>{book.category}</p>

        <strong>
  {book.price
    ? `$${book.price.toLocaleString("es-AR")}`
    : "$Consultar"}
</strong>
        <Link to={`/product/${book.id}`} className="details-btn">
          Ver detalle
        </Link>
      </div>
    </article>
  );
};