import React from 'react'
import SignUpForm from '../../components/AuthForm/SignUpForm'

import { signUpWithEmail } from '../../services/firebase'
import withRedirectHOC from './withRedirectHOC'

const SignUpContainer = () => {
  const handleSignUp = async (data) => {
    const { email, password } = data
    const res = await signUpWithEmail({ email, password })
    console.log(res)
  }
  return <SignUpForm handleSignUp={handleSignUp} />
}

export default withRedirectHOC(SignUpContainer)
