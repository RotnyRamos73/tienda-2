import { useState } from "react";
import { useProductos } from "./hooks/useProductos";
import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

function TiendaApp() {
  const { productos, cargando, error } = useProductos();
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    setCarrito((prev) =>
      prev.some((item) => item.id === producto.id) ? prev : [...prev, producto]
    );
  }

  function quitarDelCarrito(id) {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  }

  function vaciarCarrito() {
    setCarrito([]);
  }

  const total = carrito.reduce((suma, item) => suma + item.price, 0);

  return (
    <div>
      <h1>Mini Tienda</h1>

      <div className="layout">
        {cargando && <p className="mensaje">Cargando...</p>}

        {error && <p className="mensaje error">{error}</p>}

        {!cargando && !error && (
          <ProductoList
            productos={productos}
            carrito={carrito}
            onAgregar={agregarAlCarrito}
          />
        )}

        <CarritoPanel
          carrito={carrito}
          total={total}
          onQuitar={quitarDelCarrito}
          onVaciar={vaciarCarrito}
        />
      </div>
    </div>
  );
}

export default TiendaApp;