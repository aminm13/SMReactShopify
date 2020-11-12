import React, {useEffect,useContext,useState} from 'react';
import { Alert,Button, Card, Modal, Figure ,Col, Row, Table, Badge } from "react-bootstrap";
import data from '../data.json'
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import { render } from '@testing-library/react';
import Products from "./Products";


const BarcodeReader = (props) => {
    
    const [ barcodeData, setData ] = React.useState('No Barcode Found');
    const products = data.products
    const productFounded = true;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div>
      <Card>
      <Card.Title variant="info">
      <Alert variant="info">Scan Your Product Here</Alert>
      </Card.Title>
     <Card.Body >
      <BarcodeScannerComponent
        width={300}
        height={200}
        onUpdate={(err, result) => {
          if(!err){
          if (result) {setData(
              result.text
              
            )
            productFounded = true

          }
          else {
            setData('No Barcode Found');
        }
        
        }
        }}
      />
      
      </Card.Body>
      <Card.Footer >
      {productFounded &&
        
        
        products.filter(product=>product.barcode===barcodeData).map(filteredProduct =>(
        <Figure>
          
        <Figure.Image
            width={100}
            height={100}
            alt={filteredProduct.title}
            src={filteredProduct.image}
        />
        <Badge variant='info'>{filteredProduct.price}</Badge>
        <Figure.Caption>
        <h3>{filteredProduct.title}</h3>
        <p>{filteredProduct.description}</p>
        Available in:
        
          <li>{filteredProduct.availableSizes[0]}</li>
          <li>{filteredProduct.availableSizes[1]}</li>
          <li>{filteredProduct.availableSizes[2]}</li>
          <hr class="dotted" />
        <Row>
        <Col>
        <Button variant="success" onClick={()=> props.addToCart(filteredProduct)} >

            <i class="far fa-cart-plus">Add To Cart </i>
        </Button>
        </Col>
        <Col>
        <Button  variant="info" onClick={handleShow} >
        <i class="fas fa-question-circle"> Call for Assistance</i>
        </Button>
        </Col>
        </Row>
          </Figure.Caption>
        </Figure>


        ))
    }
      </Card.Footer>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Assistance is on the way</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please wait for one of our staff to help you </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
    )
}


export default BarcodeReader