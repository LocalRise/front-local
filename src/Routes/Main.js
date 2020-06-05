import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppHome from '../containers/AppHome'
import Merchant from '../containers/Merchant'
import Navbar from '../components/NavBar/Navbar'
import { SignInContainer, SignUpContainer } from '../containers/Auth'
import styled from 'styled-components'
import Checkout from '../containers/Checkout'

const Main = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Switch>
          <Route exact path="/merchant/:id/" component={Merchant} />
          <Route exact path="/checkout/:id/" component={Checkout} />
          <Route exact path="/signin" exact component={SignInContainer} />
          <Route exact path="/signup" exact component={SignUpContainer} />
          <Route exact path="/" component={AppHome} />
        </Switch>
      </div>
    </Router>
  )
}

export default Main
