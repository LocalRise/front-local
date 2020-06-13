import React from 'react'

import SignInForm from '../../components/AuthForm/SignInForm'

import { signInWithEmail, signInWithFacebook } from '../../services/firebase'
import withRedirectHOC from './withRedirectHOC'

const SignInContainer = () => {
  return (
    <div>
      <SignInForm
        handleSignIn={signInWithEmail}
        handleFacebookSignIn={signInWithFacebook}
      />
    </div>
  )
}

export default withRedirectHOC(SignInContainer)
