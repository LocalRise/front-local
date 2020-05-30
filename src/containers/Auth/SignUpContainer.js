import React from 'react'
import SignUpForm from '../../components/AuthForm/SignUpForm'

import { signUpWithEmail } from '../../services/firebase'

const SignUpContainer = () => {
  return <SignUpForm handleSignUp={signUpWithEmail} />
}

export default SignUpContainer
