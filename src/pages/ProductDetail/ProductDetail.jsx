import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import books from "../../data/books";
import { CartContext } from "../../context/CartContext/CartContext";
import "./ProductDetail.css";

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const book = books.find(
    (book) => book.id === Number(id)
  );

  if (!book) {
    return <h2>Libro no encontrado</h2>;
  }
  const handleAddToCart = () => {
  addToCart(book);

  setAdded(true);

  setTimeout(() => {
    setAdded(false);
  }, 1500);
};

  return (
    <main className="product-detail">
      <img 
        src={book.image}
        alt={book.title}
        className="product-image"
      />

      <section className="product-info">
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <p>{book.category}</p>
        <strong>${book.price}</strong>

        <button onClick={handleAddToCart}>
  {added ? "✓ Agregado" : "Agregar al carrito"}
</button>
      </section>
    </main>
  );
};