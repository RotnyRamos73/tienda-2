const API_URL = "https://dummyjson.com/products?limit=12";

export async function fetchProductos() {
  const response = await fetch(API_URL);


  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudo obtener los productos`);
  }

  const data = await response.json();
  return data.products; 
}
