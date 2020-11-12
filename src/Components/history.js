import React, { Component } from 'react';
import { Alert, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class History extends Component {
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
                    <td>Details</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>10-11-2020</td>
                    <td>Zara Eindhoven Centrum</td>
                    <td>
                        <Link to='detailedHistory'><i class="fal fa-info-circle"></i></Link>
                    </td>
                </tr>
                <tr>
                    <td>10-10-2020</td>
                    <td>Zara Eindhoven Centrum</td>
                    <td>
                        <Link to='detailedHistory'><i class="fal fa-info-circle"></i></Link>
                    </td>
                </tr>
                <tr>
                    <td>10-09-2020</td>
                    <td>Zara Eindhoven Centrum</td>
                    <td>
                        <Link to='detailedHistory'><i class="fal fa-info-circle"></i></Link>
                    </td>
                </tr>
                <tr>
                    <td>10-04-2020</td>
                    <td>Zara Eindhoven Centrum</td>
                    <td>
                        <Link to='detailedHistory'><i class="fal fa-info-circle"></i></Link>
                    </td>
                </tr>
                <tr>
                    <td>17-02-2020</td>
                    <td>Zara Eindhoven Centrum</td>
                    <td>
                        <Link to='detailedHistory'><i class="fal fa-info-circle"></i></Link>
                    </td>
                </tr>
                <tr>
                    <td>10-01-2020</td>
                    <td>Zara Eindhoven Centrum</td>
                    <td>
                        <Link to='detailedHistory'><i class="fal fa-info-circle"></i></Link>
                    </td>
                </tr>

                </tbody>
            </Table>
            <Alert variant='info'>
            <i class="fas fa-bomb"></i>
                There s no more purchase to show 
            </Alert>
        </div> );
    }
}
 
export default History;