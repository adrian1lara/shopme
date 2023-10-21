import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Heading, Text} from "@radix-ui/themes";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";


const CartList = ({ cart, addToCart , removeFromCart}) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;

        cart.forEach((product) => {
            const productPrice = product.price;
            total += productPrice * product.quantity;
        });
        setTotal(total);
    }, [cart]);

    if(cart.length === 0){
        return (
            <>
                <Heading as="h1" style={{margin: '1rem'}} >
                    Buy something!
                </Heading>
            </>
        )
    }

    return (
        <>
            <Box >
                {cart.map((product) => (
                    <Card style={{ maxWidth: 240, margin: '0.5rem' }} 
                    key={product.id}>
                        <Text as="p">{product.title}</Text>
                        <Text as="p">Price: ${product.price}</Text>
                        <Text as="p">Quantity: {product.quantity}</Text>
                        <Button style={{margin: '0.5rem'}}
                        onClick={() => addToCart(product)}>
                            <PlusIcon />
                        </Button>
                        <Button style={{margin: '0.5rem'}}
                        onClick={() => removeFromCart(product)}>
                            <Cross2Icon /> 
                        </Button>
                    </Card>
                ))}
            </Box>
            <Box>
                <Text as="p" size="4">Total: ${total}</Text> 
                <Button color="orange" variant="soft">Checkout</Button>
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
  