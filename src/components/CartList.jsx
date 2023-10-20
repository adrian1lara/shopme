import { Box, Button, Card, Text } from "@radix-ui/themes";
import PropTypes from "prop-types";


const CartList = ({ cart, addToCart , removeFromCart}) => {

    return (
        <>
            <Box >
                {cart.map((product) => (
                    <Card style={{ maxWidth: 240,}} 
                    key={product.id}>
                        <Text as="p">{product.title}</Text>
                        <Text as="p">Price: ${product.price}</Text>
                        <Text as="p">Quantity: {product.quantity}</Text>
                        <Button onClick={() => addToCart(product)}>Add</Button>
                        <Button onClick={() => removeFromCart(product)}>Remove </Button>
                    </Card>
                ))}
            </Box>
        </>
    )
}

CartList.propTypes = {
    cart: PropTypes.array,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func
  };

export default CartList
  