import useData from "../services/useData"
import ProductList from "../components/ProductList"
import propTypes from "prop-types"
import CartList from "../components/CartList"

const Products = ({ addToCart, cart}) => {

    const { data } = useData(`https://fakestoreapi.com/products`)
    

    if (!data) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Products</h1>
            <ProductList data={data} addToCart={addToCart} />
            <CartList cart={cart} />
        </>
    )
}

Products.propTypes = {
    addToCart: propTypes.func,
    cart: propTypes.array
}



export default Products