import React from 'react'
import SignUpForm from '../../components/AuthForm/SignUpForm'

import { signUpWithEmail } from '../../services/firebase'
import withRedirectHOC from './withRedirectHOC'

const SignUpContainer = () => {
  return <SignUpForm handleSignUp={signUpWithEmail} />
}

export default withRedirectHOC(SignUpContainer)
