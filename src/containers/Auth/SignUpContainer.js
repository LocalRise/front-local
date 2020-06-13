import React, { useState } from 'react'
import SignUpForm from '../../components/AuthForm/SignUpForm'

import { signUpWithEmail } from '../../services/firebase'
import withRedirectHOC from './withRedirectHOC'

const SignUpContainer = () => {
  const [error, setError] = useState()
  const handleSignUp = async (data) => {
    const { email, password } = data
    setError(null)
    try {
      const res = await signUpWithEmail({ email, password })
      const {
        user: { id },
      } = res
      console.log(id)
    } catch (e) {
      setError(e)
    }
  }
  return <SignUpForm error={error} handleSignUp={handleSignUp} />
}

export default withRedirectHOC(SignUpContainer)
