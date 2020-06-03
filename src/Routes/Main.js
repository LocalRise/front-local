import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppHome from '../containers/AppHome'
import RestaurantIndex from '../containers/RestaurantPage'
import Navbar from '../components/NavBar/Navbar'
import { SignInContainer, SignUpContainer } from '../containers/Auth'
import styled from 'styled-components'
import SideBar from '../containers/SideBar'

const CollapseContainer = styled.div`
  margin-right: ${(props) => (!props.collapse ? `var(--collapse-size)` : 0)};
  transition: margin-right 0.5s;
`

const Main = () => {
  const [collapse, setCollapse] = useState(false)

  return (
    <Router>
      <Navbar setCollapse={setCollapse} className="transition" />
      <div className="pt-16">
        <Switch>
          <Route exact path="/restaurant" component={RestaurantIndex} />
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
