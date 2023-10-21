import useData from "../services/useData"
import ProductList from "../components/ProductList"
import propTypes from "prop-types"
import CartList from "../components/CartList"
import Nav from "../components/Nav"
import { Theme, Text, Box, Flex } from "@radix-ui/themes"
import Drawer from "../components/Drawer"
import LoadingPage from "./LoadingPage"

const Products = ({ addToCart, cart, removeFromCart }) => {

    const { data } = useData(`https://fakestoreapi.com/products`)

    if (!data) {
        return <LoadingPage />
    }

    return (
        <>
        <Theme appearance="dark">
            <Flex>
                <Box style={{ flex: 1, padding: '1rem',}}>
                    <Nav />
                    <Text as="h1" color="orange" style={{marginTop: '1rem', textAlign: 'center'}}>Products</Text>
                    <ProductList data={data} addToCart={addToCart} />
                </Box>
                <Box style={{
                    alignContent: 'center',
                    marginTop: 15}}>
                    <Drawer>
                        <CartList cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
                    </Drawer>
                </Box>
            </Flex>
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