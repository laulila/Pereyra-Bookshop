import { Hero } from "../../sections/Hero/Hero";
import FeaturedBooks from "../../sections/FeaturedBooks/FeaturedBooks";
import "./Home.css";
import { Categories } from "../../sections/Categories/Categories";
import { useState } from "react";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  return (
    <>
      <Hero />

      <main className="home-intro">
        <h1>Pereyra Bookshop 📚</h1>
        <p>Encontrá tu próximo libro favorito</p>
      </main>

      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <section id="books" className="featured-section">
        <FeaturedBooks
          selectedCategory={selectedCategory}
        />
      </section>
    </>
  );
};