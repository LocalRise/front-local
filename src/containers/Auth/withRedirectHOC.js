import React from 'react'
import { useAuth } from '../../contexts'
import { Redirect } from 'react-router-dom'
const withRedirectHOC = (WrappedComponent) => (props) => {
  const { user } = useAuth()
  if (user) return <Redirect to="/" />
  return <WrappedComponent {...props} />
}

export default withRedirectHOC
