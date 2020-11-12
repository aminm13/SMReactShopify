import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class DetailedHistory extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Table striped bordered hover variant='dark'>
                <thead>
                <tr>
                    <td colSpan='6'><h3>History</h3></td>
                </tr>
                    <tr>
                    <td>Date</td>
                    <td>Location</td>
                    </tr>
                    <tr>
                    <td>10-09-2020</td>
                    <td>Zara Eindhoven Centrum</td>
                    <td colSpan='4'></td>
                </tr>
                </thead>
                <tr>
                    <td colSpan='6'><h5>Items</h5></td>
                </tr>
                <tbody>
                <tr>
                <td>Item</td>
                <td>Quantity</td>
                <td>Price</td>
                </tr>
                <tr>
                <td><img width='50rem' src="/images/dress1.jpg"/>
                <p>Midi sundress with shirring detail</p></td>
                <td>1</td>
                <td>29.9</td>
                </tr>
                <tr>
                <td><img width='50rem' src="/images/dress2.jpg"/>
                <p>Midi sundress with ruched front</p></td>
                <td>1</td>
                <td>18.9</td>
                </tr>
                </tbody>
                <tr>
                    <td colSpan='6'><h5>Payment</h5></td>
                </tr>                <tr>
                    <td>Payment Method:</td>
                    <td colSpan='4'>IDeal</td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td colSpan='4'>48.80 $</td>
                </tr>
                <tr>
                    <td>VAT:</td>
                    <td colSpan='4'>21 %</td>
                </tr>
                <tr>
                    <td>Total Paid:</td>
                    <td colSpan='4'>59.48 $</td>
                </tr>

            </Table>
        </div> );
    }
}
 
export default DetailedHistory;