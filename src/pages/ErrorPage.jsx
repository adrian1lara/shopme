import { Box, Heading } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <>
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
            }}>
                <Heading as="h1" style={ {
                    color: 'var(--gray-12)',
                    fontSize: '5rem',
                    fontWeight: 'bold',
                    margin: '1rem',
                }} >
                    Error 404
                </Heading>
                <Heading as="h2" style={{
                    color: 'var(--gray-10)',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '1rem',
                }}>Page not found</Heading>
                <Link to="/">go back to home</Link>
            </Box>
            
        </>
    )
}

export default ErrorPage