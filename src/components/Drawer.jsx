import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button} from '@radix-ui/themes';
import { BackpackIcon, Cross1Icon } from "@radix-ui/react-icons"

const Drawer = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Button 
            style={{
                margin: '0.5rem',
            }}
            onClick={toggleDrawer}>
                <BackpackIcon />
            </Button>
            <Box style={{
                flexDirection: 'column',
                height: '100%',
                position: 'fixed',
                top: 0,
                right: isOpen ? '0': '-100%',
                zIndex: 200,
                transition: 'all 0.3s ease-in-out',
                backgroundColor: 'var(--gray-5)',
                padding: '1rem',
                overflowY: 'auto',
                }}>
                    <Box style={
                        {
                            right:0,
                        }
                    }>
                        <Button onClick={toggleDrawer}><Cross1Icon /></Button>
                    </Box>
                    <Box>
                        {children}
                    </Box>
            </Box>
        </>
    )
}

Drawer.propTypes = {
    children: PropTypes.node,
}

export default Drawer


