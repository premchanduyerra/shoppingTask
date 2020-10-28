import React from 'react';
import './App.css';
import Login from './login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Order from './Order/Order';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/order'>
            <Order />
          </Route>
          <Route path='/'>
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
