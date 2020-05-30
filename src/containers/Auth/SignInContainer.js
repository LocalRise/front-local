import React from 'react'

import SignInForm from '../../components/AuthForm/SignInForm'

import { signInWithEmail, signInWithFacebook } from '../../services/firebase'

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

export default SignInContainer
