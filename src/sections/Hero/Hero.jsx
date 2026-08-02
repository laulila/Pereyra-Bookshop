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

 <a href="#books" className="hero-button">
  Explore Books
</a>
      </div>
    </section>
  );
};
