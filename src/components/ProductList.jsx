import { Button, Card, Inset, Text, Box, Theme } from '@radix-ui/themes';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ProductList = ( { data, addToCart }) => {

    const uniqueCategories = [...new Set(data.map((product) => product.category))];
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    const handleAddToCart = (product) => {
        addToCart(product);
    }

    const filteredProducts = selectedCategory
        ? data.filter((product) => product.category === selectedCategory)
        : data;

    return (
        <>
        <Theme appearance="dark">
            <Box style={{height: '100%'}} >
                <Box style={{margin: '1rem', }}>
                <label htmlFor="category"  style={{margin: '0.5rem' }}>CATEGORY</label>
                        <select
                            name="category"
                            id="category"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            style={{
                                padding: '0.5rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #ccc',
                                cursor: 'pointer',
                                margin: '0.5rem',
                                color: 'var(--gray-11)',
                                fontWeight: 'bold',
                                backgroundColor: 'var(--gray-5)',
                                textTransform: 'uppercase',
                            }}>
                            <option value="" >All</option>
                            {uniqueCategories.map((category) => (
                                <option 
                                key={category} 
                                value={category} 
                                style={{
                                    color: 'var(--gray-11)',
                                    fontWeight: 'bold',
                                }}
                                >
                                    {category}
                                </option>
                            ))}
                </select>
                </Box>

                <Box style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center',
                    gap: '1rem',
                    maxWidth:'1200px',
                    margin: '0 auto' 
                    }}>
                    {filteredProducts.map((product) => (
                        <Card key={product.id} size="2" style={{ width: '300px' }}>
                            <Inset clip="padding-box" side="top" pb="current">
                                <img style={
                                    {
                                        display: 'block',
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: 200,
                                        backgroundColor: 'var(--gray-5)',
                                    }
                                }
                                src={product.image} alt={product.title} />
                            </Inset>
                            <Text as='p'>{product.title}</Text>
                            <Text as='p'>Price: ${product.price}</Text>
                            <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Theme>
        </>
    )
}

ProductList.propTypes = {
    data: PropTypes.array,
    addToCart: PropTypes.func
}

export default ProductList