import React, { useState, Component,useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function withRouter(Component) {
    return function WrappedComponent(props) {
      const params = useParams();
      return <Component {...props} params={params} />;
    };
  }

class ProductDetailPage extends Component  {
    constructor(props){
super(props)

this.state = {
    products: []
  };
    }

    

    // const [selectedProduct, setselectedProduct] = useState('');
    // const navigate = useNavigate();
    componentDidMount() {
        const { params } = this.props;
        const id = params.id;
        fetch('https://python-ecommerce-theta.vercel.app/api/products/'+id)
          .then(response => response.json())
          .then(data => {
            console.log('karthik12',data)
            this.setState({ products: [data] });
           
          });
      }
    render() {

    return (
        <div class="detail">
            {this.state.products.map(product => (
                <div class="detail-prod">
        <img class="image_detail" src={product.product_image} alt="My Image"  />      
        <div class="description">
          
          <p class="product_name">{product.product_name}</p>
          <p class="product_description">{product.product_description}</p>
          <p class="discounted_price">₹{product.discounted_price}</p>
          </div>      
          {/* <div><p>dfffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p></div> */}
          </div>
          
        ))}
           

        </div>
    );}
}

export default withRouter(ProductDetailPage);
