import PropTypes from "prop-types";


const CartList = ({ cart, addToCart , removeFromCart}) => {

    return (
        <>
            <div>
                {cart.map((product) => (
                    <div key={product.id}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.quantity}</p>
                        <button onClick={() => addToCart(product)}>Add</button>
                        <button onClick={() => removeFromCart(product)}>Remove </button>
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
  