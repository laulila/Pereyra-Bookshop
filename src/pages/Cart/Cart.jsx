import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

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

  <p>Precio: ${item.price}</p>

  <div className="quantity-controls">
    <button onClick={() => decreaseQuantity(item.id)}>
      −
    </button>

    <span>{item.quantity}</span>

    <button onClick={() => increaseQuantity(item.id)}>
      +
    </button>
  </div>

  <strong>
    Subtotal: ${item.price * item.quantity}
  </strong>
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
<Link to="/checkout" className="checkout-link">
  Finalizar compra
</Link>
            <button onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
          
        </>
      )}
    </main>
  );
};