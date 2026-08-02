import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Checkout.css";

export const Checkout = () => {

  const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: ""
  });


  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
if (cart.length === 0) {
  return (
    <main className="checkout">
      <h1>Tu carrito está vacío 🛒</h1>

      <Link to="/">
        Volver a la tienda
      </Link>
    </main>
  );
}

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const orderId = Date.now();

    const order = {
      id: orderId,
      buyer,
      items: cart,
      total
    };

    console.log("Orden creada:", order);

    clearCart();

    navigate(`/order/${orderId}`, {
  state: order
});
  };


  return (
    <main className="checkout">

      <h1>Finalizar compra</h1>

      <Link to="/cart" className="back-cart">
  ← Volver al carrito
</Link>

      <section className="checkout-summary">

        <h2>Resumen del pedido</h2>

        {cart.map((item) => (
          <p key={item.id}>
            {item.title} x {item.quantity}
          </p>
        ))}

        <h3>Total: ${total}</h3>

      </section>


      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />


        <button type="submit">
          Crear orden
        </button>

      </form>

    </main>
  );
};