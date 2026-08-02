import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export const OrderSuccess = () => {

  const { state: order } = useLocation();


  if (!order) {
    return (
      <main>
        <h1>No se encontró la orden</h1>
      </main>
    );
  }


  return (
    <main className="order-success">

      <h1>Compra realizada 🎉</h1>

      <h2>
        Gracias por tu compra, {order.buyer.name}
      </h2>

      <p>
        Número de orden: <strong>{order.id}</strong>
      </p>


      <h3>Detalle:</h3>

      {order.items.map((item) => (
        <p key={item.id}>
          {item.title} x {item.quantity}
        </p>
      ))}


      <h2>
        Total: ${order.total}
      </h2>

      <Link to="/" className="back-home">
  Volver a la tienda
</Link>

    </main>
  );
};