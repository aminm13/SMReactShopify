import React, { Component } from 'react';
import { Badge, Button, Table } from 'react-bootstrap';

export default class Cart extends Component {
    render() { 
        const {cartItems} = this.props
        return (             
        <Table variant='dark'>
            <thead>
            {cartItems.length ===0? 
            (<p>Cart is empty</p>)
            :
            (<p>
                You Have {cartItems.length} items in your Cart
            </p>
            
        )
        }
        </thead>
        <tbody>
            {cartItems.map(item =>(
                <tr key={item.id}>
                    <td>
                        <img style={{height:'2rem;', width:'2rem'}} src={item.image} />
                        <Badge variant='secondary'>{item.count}</Badge>
                        x
                        <Badge variant='secondary'>{item.price}</Badge>
                    </td>
                    <td>{item.title}</td>
                    <td>
                    <Button onClick={()=> this.props.removeFromCart(item)} >
                    <i class="far fa-trash-alt"></i>
                    </Button>
                    </td>
                </tr>
            ))}
            <tr>
            <td>Total</td>
            <td colSpan="2">  
                    {
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    }
                    $</td>
             </tr>
             <tr>
                <td colSpan="2">  
                       <Button variant='danger'>
                           CheckOut
                       </Button>
                </td>
             </tr>
        </tbody> 
        </Table>
 );
    }
}
 
