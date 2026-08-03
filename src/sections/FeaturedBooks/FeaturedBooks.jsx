import { BookCard } from "../../components/BookCard/BookCard";
import books from "../../data/books";
import "./FeaturedBooks.css";

function FeaturedBooks({ selectedCategory }) {

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