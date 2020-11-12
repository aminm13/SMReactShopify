import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Products extends Component {
      render() { 
        return ( 
        <div>
            <ul>
            {this.props.products.map(product =>(
                <li key={product.id}>
                    <p>{product.title}</p>
                    <Button variant="success" onClick={()=> this.props.addToCart(product)} >
                        <i class="far fa-cart-plus"></i>
                    </Button>
                </li>
            ))}
            </ul>
        </div> 
        );
    }
}

export default Products;