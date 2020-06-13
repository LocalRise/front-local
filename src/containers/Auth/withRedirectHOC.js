import React from 'react'
import { useAuth } from '../../contexts'
import { Redirect } from 'react-router-dom'
const withRedirectHOC = (WrappedComponent) => (props) => {
  const { user } = useAuth()
  const post = props?.location?.state?.post

  if (user) {
    return <Redirect to={post || '/'} />
  }
  return <WrappedComponent {...props} />
}

export default withRedirectHOC
