
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleWhatsApp = () => {
    const phone = "5491157067354";

    const products = cart
      .map(
        (item) =>
          `• ${item.title} - ${item.quantity} unidad/es - $${item.price * item.quantity}`
      )
      .join("\n");

    const message = `Hola! Quiero realizar el siguiente pedido:

${products}

Total: $${total}

¡Gracias!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <main className="cart">
      <h1>Carrito 🛒</h1>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <article key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />

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

            <button onClick={handleWhatsApp} className="whatsapp-button">
              <FaWhatsapp />
              Comprar por WhatsApp
            </button>

            <button onClick={clearCart}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </main>
  );
};

