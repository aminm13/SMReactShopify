import React, { Component } from 'react';

class Products extends Component {
      render() { 
        return ( 
        <div>
            <ul>
            {this.props.products.map(product =>(
                <li key={product.id}>
                    <p>{product.title}</p>
                    <button onClick={()=> this.props.addToCart(product)} >
                        Add To Cart
                    </button>
                </li>
            ))}
            </ul>
        </div> 
        );
    }
}

export default Products;