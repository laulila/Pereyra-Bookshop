import { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useParams } from "react-router-dom";

import { CartContext } from "../../context/CartContext/CartContext";
import "./ProductDetail.css";

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const [book, setBook] = useState(null);
  useEffect(() => {
    const getBook = async () => {
      try {
        const bookRef = doc(db, "books", id);
        const bookSnap = await getDoc(bookRef);

        if (bookSnap.exists()) {
          setBook({
            id: bookSnap.id,
            ...bookSnap.data(),
          });
        }
      } catch (error) {
        console.error("Error al obtener libro:", error);
      }
    };

    getBook();
  }, [id]);

  if (!book) {
    return <h2>Cargando libro...</h2>;
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
        src={book.image || "/placeholder-book.webp"}
        alt={book.title}
        className="product-image"
      />

      <section className="product-info">
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <p>{book.category}</p>
        <p className="printed">
  {book.printed && `Printed in ${book.printed}`}
</p>
        <p className="price">
          {book.price ? `$${book.price.toLocaleString("es-AR")}` : "$Consultar"}
        </p>
        <p className="description">
  {book.description || "Descripción próximamente"}
</p>
        <button onClick={handleAddToCart} aria-label="Agregar libro al carrito">
          {added ? "✓ Agregado" : "Agregar al carrito"}
        </button>
      </section>
    </main>
  );
};
