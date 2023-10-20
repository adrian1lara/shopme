import { Button, Text } from "@radix-ui/themes";
import PropTypes from "prop-types";


const CartList = ({ cart, addToCart , removeFromCart}) => {

    return (
        <>
            <div>
                {cart.map((product) => (
                    <div key={product.id}>
                        <Text>{product.title}</Text>
                        <p>{product.price}</p>
                        <p>{product.quantity}</p>
                        <Button onClick={() => addToCart(product)}>Add</Button>
                        <Button onClick={() => removeFromCart(product)}>Remove </Button>
                    </div>
                ))}
            </div>
        </>
    )
}

CartList.propTypes = {
    cart: PropTypes.array,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func
  };

export default CartList
  