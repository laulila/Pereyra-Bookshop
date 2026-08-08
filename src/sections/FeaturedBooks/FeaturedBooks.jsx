import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { FiSearch } from "react-icons/fi";
import { db } from "../../services/firebase";
import { BookCard } from "../../components/BookCard/BookCard";
import "./FeaturedBooks.css";

function FeaturedBooks({ selectedCategory }) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "books"));

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

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "Todas" ||
      book.category === selectedCategory;

    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="featured-books" id="books">
      <div className="featured-container">
        <h2>Libros destacados</h2>

        <div className="search-container">
          <div className="search-box">
            <FiSearch className="search-icon" />

            <input
              type="text"
              placeholder="Buscar por título o autor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="books-grid">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))
          ) : (
            <p className="no-results">
              No se encontraron libros para{" "}
              <strong>"{search}"</strong>.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBooks;


