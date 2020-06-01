import React from 'react'
import { withRouter } from 'react-router-dom'

const SignInButton = ({ history }) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        history.push('/signin')
      }}
    >
      <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
        SignIn
      </a>
    </div>
  )
}

export default withRouter(SignInButton)
