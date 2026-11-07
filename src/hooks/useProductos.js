import { useState, useEffect } from "react";
import { fetchProductos } from "../services/fetchProductos";

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargar() {
      try {
        const datos = await fetchProductos();
        setProductos(datos);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los productos. Revisa tu conexión a internet.");
      } finally {
        setCargando(false); 
      }
    }

    cargar();
  }, []); 

  return { productos, cargando, error };
}
