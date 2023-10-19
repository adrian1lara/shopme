import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <h1>404</h1>
            <Link to="/">go back to home</Link>
        </>
    )
}

export default ErrorPage