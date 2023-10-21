import { useState } from "react"
import Router from "./Router"
import { Theme } from "@radix-ui/themes";
import "./styles/style.css"

function App() {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1};
        } else {
          return item;
        }
      });
  
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1, price: product.price }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <>
      <Theme appearance="dark">

          <Router 
          cart={cart} 
          addToCart={addToCart} 
          removeFromCart={removeFromCart} />
      </Theme>
    </>
    
  )
}

export default App
