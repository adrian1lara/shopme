import { Heading, Link } from "@radix-ui/themes"

const Nav = () => {
    return (
        <>
            <Heading as="h1">Shopme</Heading>
            <nav>
                <li>
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                </li>
            </nav>
        </>
    )
}

export default Nav