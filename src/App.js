import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductConsumer } from './context';
import { Route, Switch, Router } from 'react-router-dom';
import Home from './components/Home';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawr/SideDrawer';
import Backdrop from './components/BackDrop/BackDrop';
import Details from './components/Details/Details'
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Products from './components/ProductsList/Product-List';
class App extends Component {
  state = {
    sideDrawOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawOpen: !prevState.sideDrawOpen
      }
    });
  };
  backDropClickHandler = () => {
    this.setState({
      sideDrawOpen: false
    })
  }
  render() {
    let backdrop;
    if (this.state.sideDrawOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />;
    }
    return (
      <ProductConsumer >
        {value => {
          return (
            <React.Fragment>
              <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
              <SideDrawer show={this.state.sideDrawOpen} />
              {backdrop}
              <div onClick={this.backDropClickHandler}>
              <Switch style={{ marginTop: '64px' }} >
                
                
                <Route exact path="/">
                  <Home click={this.backDropClickHandler} />
                </Route>
                <Route path="/details" component={Details} />
                <Route path="/products" component={Products}  />
                
                
              </Switch>
              <Footer />
              </div>
            </React.Fragment>
          )
        }}
      </ProductConsumer>
    )
  }
}
export default App;
