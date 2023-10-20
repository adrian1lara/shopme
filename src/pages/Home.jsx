import { Theme } from "@radix-ui/themes"
import Nav from "../components/Nav"

const Home = () => {

    return (
        <>
            <Theme appearance="dark">
            <Nav />
            <h1> Shopme Home </h1>
            </Theme>
        </>
    )
}

export default Home