import useData from "../services/useData"
import ProductList from "../components/ProductList"
import propTypes from "prop-types"
import CartList from "../components/CartList"
import Nav from "../components/Nav"
import { Theme } from "@radix-ui/themes"

const Products = ({ addToCart, cart, removeFromCart }) => {

    const { data } = useData(`https://fakestoreapi.com/products`)
    

    if (!data) {
        return <h1>Loading...</h1>
    }

    return (
        <>
        <Theme appearance="dark">
            <Nav />
            <h1>Products</h1>
            <ProductList data={data} addToCart={addToCart} />
            <CartList cart={cart}  addToCart={addToCart} removeFromCart={removeFromCart}/>
        </Theme>
        </>
    )
}

Products.propTypes = {
    addToCart: propTypes.func,
    cart: propTypes.array,
    removeFromCart: propTypes.func
}



export default Products