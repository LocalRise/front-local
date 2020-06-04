import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppHome from '../containers/AppHome'
import Merchant from '../containers/Merchant'
import Navbar from '../components/NavBar/Navbar'
import { SignInContainer, SignUpContainer } from '../containers/Auth'
import styled from 'styled-components'
import SideBar from '../containers/SideBar'

const Main = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Switch>
          <Route exact path="/restaurant" component={Merchant} />
          <Route exact path="/" component={AppHome} />
          <Route exact path="/signin" exact component={SignInContainer} />
          <Route exact path="/signup" exact component={SignUpContainer} />
        </Switch>
      </div>
      {/* </CollapseContainer>
      <SideBar collapse={false} /> */}
    </Router>
  )
}

export default Main
