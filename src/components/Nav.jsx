import { Box, Flex, Heading, Link } from "@radix-ui/themes"

const Nav = () => {
    return (
        <>
            <Flex justify={"space-between"} align={"center"}>
                <Heading as="h1" size="xl" color="cyan">Shop<span style={{ color: "orange" }}>me</span></Heading>

                <nav>
                    <Box m="2" >
                        <Link href="/shopme/" size="4" mr="2">Home</Link>
                        <Link href="/shopme/products" size="4" mr="2">Products</Link>
                    </Box>
                </nav>
            </Flex>
        </>
    )
}

export default Nav