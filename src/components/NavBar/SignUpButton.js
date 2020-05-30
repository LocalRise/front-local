import React from 'react'
import { withRouter } from 'react-router-dom'

const SignUpButton = ({ history }) => {
  return (
    <div
      onClick={() => {
        history.push('/signup')
      }}
    >
      <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
        SignUp
      </a>
    </div>
  )
}

export default withRouter(SignUpButton)