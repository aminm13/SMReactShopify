import React, { PureComponent } from "react";
import './App.css';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
import data from './data.json'
import BarcodeReader from "./Components/BarcodeReader";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import Products from "./Components/Products";


class App extends PureComponent {

  constructor(){
    super();
    this.state={
      products: data.products,
      cartItems : []
    }
  }
  removeFromCart=(product)=>{
    const cartItems =  this.state.cartItems.slice();
    this.setState({
      cartItems:cartItems.filter(x=>x.id !== product.id)
    })
  }
  addToCart=(product)=>{
    const cartItems =  this.state.cartItems.slice();
    let alreadInCart =false
    cartItems.forEach(item=>{
      if(item.id === product.id){
        item.count++
        alreadInCart=true;
      }
    })

    if(!alreadInCart){
      cartItems.push({...product,count:1})
    }
    this.setState({cartItems})
  }
 render (){

    return(
    <div className="App">
    <Router>
      <NavBar />
    <div className="main">
   <BarcodeReader addToCart={this.addToCart} />
   </div>
   <div className="sidebar">
     <Cart cartItems={this.state.cartItems}  removeFromCart={this.removeFromCart}/>
   </div>
    <Products products={this.state.products} addToCart={this.addToCart} />
    <p>Footer </p>
    </Router>
    </div>

);
}
}

export default App;
