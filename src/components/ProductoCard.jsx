function ProductoCard({ producto, enCarrito, onAgregar }) {
  return (
    <div className={enCarrito ? "card en-carrito" : "card"}>
      <img src={producto.thumbnail} alt={producto.title} />
      <h4>{producto.title}</h4>
      <p className="categoria">{producto.category}</p>
      <p className="precio">$ {producto.price.toFixed(2)}</p>
      <button onClick={() => onAgregar(producto)} disabled={enCarrito}>
        {enCarrito ? "En el carrito" : "Agregar al carrito"}
      </button>
    </div>
  );
}

export default ProductoCard;