import { Box, Heading, Text } from "@radix-ui/themes";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

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
                    Oops!
                </Heading>
                <Heading as="h2" style={{
                    color: 'var(--gray-10)',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '1rem',
                }}>unexpect error has occurred.</Heading>
                <Text as="p">
                    <i>{error.statusText || error.message}</i>
                </Text>
                <Link to="/">go back to home</Link>
            </Box>
            
        </>
    )
}

export default ErrorPage