import "./Categories.css";

const categories = [
  "Todas",
  "Clásicos",
  "Novela",
  "Romance",
  "Ficción",
  "Autoayuda", 
  "Varios"
];

export const Categories = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="categories">
      <h2>Explorá por categorías</h2>

      <div className="categories-grid">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-card ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => {
  onSelectCategory(category);

  document
    .getElementById("books")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};