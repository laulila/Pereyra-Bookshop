import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { BookCard } from "../../components/BookCard/BookCard";
import "./FeaturedBooks.css";

function FeaturedBooks({ selectedCategory }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const booksCollection = collection(db, "books");
        const querySnapshot = await getDocs(booksCollection);

        const booksList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBooks(booksList);
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    };

    getBooks();
  }, []);

  const filteredBooks =
    selectedCategory === "Todas"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory
        );

  return (
    <section className="featured-books">
      <div className="featured-container">
        <h2>Libros destacados</h2>

        <div className="books-grid">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBooks;