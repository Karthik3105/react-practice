import React, { useState, useEffect } from 'react';
import Dashboard from './DashBoard';
import { useNavigate } from 'react-router-dom';
function DropDown() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setselectedProduct] = useState('');
    const navigate = useNavigate();
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
        const selectedOption = event.target.options[event.target.selectedIndex];
        const selectedProductId = selectedOption.getAttribute('data-key');

        navigate("/dashboard/" + selectedProductId, { replace: true });
        setselectedProduct(event.target.value);
    };

    return (
        <div className="dropdown">
            <select name="selectedProduct" value={selectedProduct} onChange={handleChange} >
                {products.filter((product, index, self) =>
                    self.findIndex(p => p.category_code === product.category_code) === index
                ).map(product => (
                    <option key={product.product_id} value={product.category_code} data-key={product.category_id}>
                        {product.category_code}
                    </option>
                ))}

            </select>

        </div>
    );
}


export default DropDown;