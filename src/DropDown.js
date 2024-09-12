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
        
        navigate("/dashboard/"+selectedProductId, { replace: true });
        setselectedProduct(event.target.value);
    };

    return (
        <div className="dropdown">
            <select name="selectedProduct" value={selectedProduct} onChange={handleChange} >
                {products.map(product => (
                    <option key={product.product_id} value={product.product_name}  data-key={product.product_id}>
                        {product.product_name}
                    </option>
                ))}
               
            </select>
            
        </div>
    );
}

export default DropDown;