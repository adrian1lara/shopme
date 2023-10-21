import { Heading } from "@radix-ui/themes"


const LoadingPage = () => {

    return (
        <>
            <Heading as="h1" style={
                {
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black',
                    color: 'orange'
                }
            }>Loading...</Heading>
        </>
    )
}

export default LoadingPage