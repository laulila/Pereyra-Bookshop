import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import "./Cart.css";

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main className="cart">
      <h1>Carrito 🛒</h1>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <article key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="cart-info">
                <h2>{item.title}</h2>
                <p>{item.author}</p>
                <p>Cantidad: {item.quantity}</p>
                <strong>${item.price}</strong>
              </div>

              <div className="cart-actions">
                <button onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </button>
              </div>
            </article>
          ))}

          <div className="total">
            <h2>Total: ${total}</h2>

            <button onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </main>
  );
};