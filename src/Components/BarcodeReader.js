import React, {useEffect,useContext} from 'react';
import { Alert,Button, Card, Container, Modal ,Col, Row } from "react-bootstrap";
import data from '../data.json'
import BarcodeScannerComponent from "react-webcam-barcode-scanner";




const BarcodeReader = () => {
    
    const { products } = data.products
    const [ barcodeData, setData ] = React.useState('Not Found');
    return (
        <Container>
        <Card style={{height:'25rem',marginTop:'0rem'}} >
      <Card.Title variant="info">
      <Alert variant="info">Scan Your Product Here <span><i className="fa fa-search"></i>
      </span>
      </Alert>
      </Card.Title>
     <Card.Body >
      <BarcodeScannerComponent
      style={{  margin: "auto",
      padding:"0rem"}}
        width={300}
        height={200}
        onUpdate={(err, result) => {
          if(!err){
          if (result) {setData(
              result.text
            )
          }
          else setData('Not Found')}
        }}
      />
      
      </Card.Body>
      <Card.Footer >
      <Alert variant="alert" onChange={()=>this.props.addToCart()} id='#productInfo'>Barcode: {barcodeData}</Alert>

      </Card.Footer>
      </Card>
        </Container>
    )
}


export default BarcodeReader