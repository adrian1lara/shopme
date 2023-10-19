import PropTypes from "prop-types";


const CartList = ({ cart }) => {

    return (
        <>
            <div>
                {cart.map((product) => (
                    <div key={product.id}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.quantity}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

CartList.propTypes = {
    cart: PropTypes.array
  };

export default CartList
  