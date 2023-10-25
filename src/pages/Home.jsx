import {Button, Theme, Box, Blockquote, Heading, Link, Quote } from "@radix-ui/themes"
import Nav from "../components/Nav"

const Home = () => {

    return (
        <>
            <Theme appearance="dark">
            <Nav />
                <Box style={{ display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '100%',
                height: '100vh'}}
                >
                    
                    <Box width={'50%'}>
                    <Heading as="h1" size="xl" color="orange"> Shopme Home </Heading>
                    <Blockquote ml={''}>
                        <Quote>Perfect typography is certainly the most elusive of all arts. Sculpture in
                        stone alone comes near it in obstinacy.</Quote>
                    </Blockquote>
                        <Button 
                            mt={"2"} 
                            size={"3"} 
                            color="cyan"
                            variant="soft"
                            asChild >
                            <Link href="/products" underline="none"
                            style={{borderRadius: '5px'}}>Come here</Link>
                        </Button>
                    </Box>
                </Box>
            </Theme>
            
        </>
    )
}

export default Home