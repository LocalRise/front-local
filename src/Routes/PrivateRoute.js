import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth()
  const post = rest?.location?.pathname
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { post },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
