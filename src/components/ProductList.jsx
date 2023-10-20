import { Button } from '@radix-ui/themes';
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
            <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        id="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}>
                        <option value="">All</option>
                        {uniqueCategories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
            </select>

            <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                {filteredProducts.map((product) => (
                    <div key={product.id} style={{ width: '200px', margin: '10px' }}>
                        <p>{product.title}</p>
                        <img style={
                            {
                                    width: '200px',
                                    height: '200px'
                            }
                        }
                        src={product.image} alt={product.title} />
                        <p>{product.price}</p>
                        <p>{product.category}</p>
                        <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
                    </div>
                ))}
            </div>
        </>
    )
}

ProductList.propTypes = {
    data: PropTypes.array,
    addToCart: PropTypes.func
}

export default ProductList