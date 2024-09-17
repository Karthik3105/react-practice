import React, { useState, useEffect  } from 'react';
import { useParams,  } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Dashboard(props) {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [key, setKey] = useState(Date.now());
    const [renderCount, setRenderCount] = useState(0);
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
       

            fetch('https://python-ecommerce-theta.vercel.app/api/products/category/'+id)
            .then(response => response.json())
            .then(data => {
                console.log('krthik12', data)
                setProducts(data);
            })
            .catch(error => {
                console.error(error);
            });
        
        
    },[id]);

    <p class="register-user"> Already a user? If not, Please register    <Link to="/detail"> Detail</Link></p> 

    return(
  <div class="dashboard">
     {products.map((item) => (
    <div class="list">
          <Link to={"/detail/" + item.product_id}>
 <img class="image" src={item.product_image} alt="My Image"  /></Link>
 <p class="prod_name">{item.product_name}</p>
 <p class="prod_details">{item.product_details}</p>
 </div> 
))}  
 
  </div>)
}

export default Dashboard;