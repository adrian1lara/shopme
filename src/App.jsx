import Nav from "./components/Nav"
import { useState } from "react"
import Router from "./Router"

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1, price: item.price + product.price };
        } else {
          return item;
        }
      });
  
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1, price: product.price }]);
    }
  };

  return (
    <>
      <Nav />
      <Router cart={cart} addToCart={addToCart} />
    </>
  )
}

export default App
