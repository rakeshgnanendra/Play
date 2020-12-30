import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import NotFound from "./pages/NotFound";
import Modal from "./components/Modal";
import Details from "./pages/Details";
import Newdelivery from "./components/Cart/Newdelivery";
import ProductList from "./pages/ProductList";
import  Delivery from "./components/Delivery";
import Cashod from "./components/Cashod";
import Payments from "./components/Payments"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/Newdelivery" component={Newdelivery} />
          <Route path="/Delivery" component={Delivery}/>
          <Route path="/Cashod" component={Cashod}/>
          <Route path="/Payments" component={Payments}/>
          <Route component={NotFound} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
