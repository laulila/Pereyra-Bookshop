import { Hero } from "../../sections/Hero/Hero";
import FeaturedBooks from "../../sections/FeaturedBooks/FeaturedBooks";

export const Home = () => {
  return (
    <>
      <Hero />

      <main>
        <h1>Pereyra Bookshop 📚</h1>
        <p>Encontrá tu próximo libro favorito</p>
      </main>

      <FeaturedBooks />
    </>
  );
};