import React, { PureComponent } from "react";
import './App.css';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
import data from './data.json'
import BarcodeReader from "./Components/BarcodeReader";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import Payment from "./Components/Payment";
import ExitCode from "./Components/Exit";
import History from "./Components/history";
import DetailedHistory from "./Components/DetailedHistory";


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
    <Switch>
    <Route path='/exit' component={ExitCode}></Route>  
    <Route path='/history' component={History}></Route>  
    <Route path='/detailedHistory' component={DetailedHistory}></Route>    
    <Route path='/payment' component={Payment}></Route>    
    <Route path='/'>
    <BarcodeReader  addToCart={this.addToCart} />
    <Cart cartItems={this.state.cartItems}  removeFromCart={this.removeFromCart}/>
    </Route>
    </Switch>
    </Router>
    </div>

);
}
}

export default App;
