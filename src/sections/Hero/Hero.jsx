import "./Hero.css";
import heroBooks from "../../assets/images/hero-books.webp";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Book</h1>
        <div className="hero-image">
          <img src={heroBooks} alt="Stack of books" />
        </div>
        <p>
          Explore a carefully selected collection of books for every reader.
        </p>

        <button className="hero-button">Explore Books</button>
      </div>
    </section>
  );
};
