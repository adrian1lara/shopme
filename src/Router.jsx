import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";



const Routing = ( {cart, addToCart, removeFromCart}) => {

    const router = createBrowserRouter([
        {
            path: "/shopme/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "shopme/products",
            element: <Products addToCart={addToCart} cart={cart}  removeFromCart={removeFromCart} />,
        }
    ])

    return <RouterProvider router={router} />

}

Routing.propTypes = {
    cart: PropTypes.array,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func
}

export default Routing