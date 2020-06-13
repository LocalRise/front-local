import React from 'react'

import SignInForm from '../../components/AuthForm/SignInForm'

import { signInWithEmail, signInWithFacebook } from '../../services/firebase'
import withRedirectHOC from './withRedirectHOC'

const SignInContainer = () => {
  const [error, setError] = useState()
  const handleSignIn = async (data) => {
    const { email, password } = data
    setError(null)
    try {
      await signInWithEmail({ email, password })
    } catch (e) {
      setError(e)
    }
  }
  return (
    <div>
      <SignInForm
        error={error}
        handleSignIn={handleSignIn}
        handleFacebookSignIn={signInWithFacebook}
      />
    </div>
  )
}

export default withRedirectHOC(SignInContainer)
