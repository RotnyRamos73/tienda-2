import ProductoCard from "./ProductoCard";

function ProductoList({ productos, carrito, onAgregar }) {
  return (
    <div className="grid">
      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
          enCarrito={carrito.some((item) => item.id === producto.id)}
          onAgregar={onAgregar}
        />
      ))}
    </div>
  );
}

export default ProductoList;