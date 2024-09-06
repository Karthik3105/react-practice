import React, { useState, useEffect } from 'react';
function DropDown() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setselectedProduct] = useState('');

    useEffect(() => {
        fetch('https://python-ecommerce-theta.vercel.app/api/products/')
            .then(response => response.json())
            .then(data => {
                console.log('krthik12', data)
                setProducts(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const handleChange = (event) => {
        setselectedProduct(event.target.value);
    };

    return (
        <div className="dropdown">
            <select name="selectedProduct" value={selectedProduct} onChange={handleChange}>
                {products.map(product => (
                    <option key={product.product_id} value={product.product_name}>
                        {product.product_name}
                    </option>
                ))}
               
            </select>

        </div>
    );
}

export default DropDown;