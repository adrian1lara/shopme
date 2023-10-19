import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";



const Router = ( {cart, addToCart}) => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/products",
            element: <Products addToCart={addToCart} cart={cart} />,
        }
    ])

    return <RouterProvider router={router} />
}

Router.propTypes = {
    cart: PropTypes.array,
    addToCart: PropTypes.func

}

export default Router