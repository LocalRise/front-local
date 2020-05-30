import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AppHome from '../containers/AppHome'
import { route } from 'next/dist/next-server/server/router'
import RestaurantIndex from '../containers/RestaurantPage'
import Navbar from '../components/NavBar/Navbar'
import { SignInContainer, SignUpContainer } from '../containers/Auth'
const ExampleContainer = () => <div>Hi</div>

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path="/restaurant" component={RestaurantIndex} />
        <Route path="/ex" component={ExampleContainer} />
        <Route path="/" component={AppHome} /> */}
        <Route path="/signin" exact component={SignInContainer} />
        <Route path="/signup" exact component={SignUpContainer} />
      </Switch>
    </Router>
  )
}

export default Main
