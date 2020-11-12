import React, { Component } from 'react';
import { Alert, Badge, Button, Table,Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Cart extends Component {
    render() { 
        const {cartItems} = this.props
        return (             
              <div > 
            {cartItems.length ===0? 
            (<Alert variant='danger'>Cart is empty</Alert>)
            :
            (
            <div>
                <Alert variant='success'> 
                You Have <bold>{cartItems.length} </bold> items in your Cart
            </Alert>
            <Table variant='dark' striped bordered hover>
            <thead>
                <tr>
                    <td>Item</td>
                    <td>Quantity</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
            {cartItems.map(item =>(
                <tr key={item.id}>
                    <td>
                    <Figure>
                        <Figure.Image
                            width={50}
                            height={50}
                            alt={item.title}
                            src={item.image}
                        />
                        <Figure.Caption>
                        {item.title}
                        </Figure.Caption>
                    </Figure>
                    </td>
                    <td>
                    {item.count >0
                    ?<div>
                    <i class="fas fa-minus"></i>
                    <span>
                    <bold>
                        {item.count}
                    </bold>
                    </span>
                    <i class="fas fa-plus"></i>
                    </div>
                    : <div>
                    <bold>
                        {item.count}
                    </bold>
                    </div>
                    }


                    </td>
                    <td>
                        {item.price}
                    </td>
                    <td>
                    <Button onClick={()=> this.props.removeFromCart(item)} >
                    <i class="far fa-trash-alt"></i>
                    </Button>
                    </td>
                </tr>
            ))}
            <tr>
            <td colSpan="2" >Total</td>
            <td colSpan="4">  
                    {
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    }
                    $</td>
             </tr>
             <tr>
                <td colSpan="6">
                    <Link to='/payment'>  
                    <Button variant='danger' >
                        CheckOut
                    </Button>
                    </Link>
                </td>
            </tr>
        </tbody> 
            </Table>
            </div>
        )
        }
</div>
        
 );
    }
}
 
