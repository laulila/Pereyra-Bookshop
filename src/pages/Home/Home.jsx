import { Hero } from "../../sections/Hero/Hero";
import FeaturedBooks from "../../sections/FeaturedBooks/FeaturedBooks";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Hero />

      <main className="home-intro">
        <h1>Pereyra Bookshop 📚</h1>
        <p>Encontrá tu próximo libro favorito</p>
      </main>

      <section id="books" className="featured-section">
        <FeaturedBooks />
      </section>
    </>
  );
};