import React from 'react'

import SignInForm from '../../components/AuthForm/SignInForm'

import { signInWithEmail, signInWithFacebook } from '../../services/firebase'
import withRedirectHOC from './withRedirectHOC'

const SignInContainer = () => {
  const handleSignIn = (data) => {
    const { email, password } = data
    signInWithEmail(email, password)
  }
  return (
    <div>
      <SignInForm
        handleSignIn={handleSignIn}
        handleFacebookSignIn={signInWithFacebook}
      />
    </div>
  )
}

export default withRedirectHOC(SignInContainer)
