import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppHome from '../containers/AppHome'
import Merchant from '../containers/Merchant'
import Navbar from '../components/NavBar/Navbar'
import { SignInContainer, SignUpContainer } from '../containers/Auth'
import PrivateRoute from './PrivateRoute'
import Checkout from '../containers/Checkout'
import Payment from './../containers/Payment'
import Team from './../containers/Team'

const Main = () => {
  const [openCart, setOpenCart] = useState(false)
  return (
    <Router>
      <Navbar setOpenCart={setOpenCart} openCart={openCart} />
      <div className="pt-16">
        <Switch>
          <Route
            exact
            path="/merchant/:id/"
            render={(props) => <Merchant openCart={openCart} />}
          />
          <Route exact path="/team" exact component={Team} />
          <PrivateRoute exact path="/checkout/:id/" component={Checkout} />
          <PrivateRoute exact path="/payment/:cost/:identity" component={Payment} />
          <Route exact path="/signin" exact component={SignInContainer} />
          <Route exact path="/signup" exact component={SignUpContainer} />
          <Route exact path="/" component={AppHome} />
        </Switch>
      </div>
    </Router>
  )
}

export default Main
