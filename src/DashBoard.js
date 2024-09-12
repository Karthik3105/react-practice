import React, { useState, useEffect,  } from 'react';
import { useParams,  } from 'react-router-dom';
function Dashboard(props) {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [key, setKey] = useState(Date.now());
    const [renderCount, setRenderCount] = useState(0);
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
       

            fetch('https://python-ecommerce-theta.vercel.app/api/products/'+id)
            .then(response => response.json())
            .then(data => {
                console.log('krthik12', data)
                setProducts(data);
            })
            .catch(error => {
                console.error(error);
            });
        
        
    },[id]);



    return(
  <div class="dashboard">
     {/* {products.map((item) => ( */}
    <div class="list">
 <img class="image" src={products.product_image} alt="My Image" />
 <p>{products.product_name}</p>
 <p>{products.product_details}</p>
 </div> 
 {/* ))} */}
 
  </div>)
}

export default Dashboard;