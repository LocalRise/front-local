import React from 'react'
import { withRouter } from 'react-router-dom'

const SignUpButton = ({ history }) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        history.push('/signup')
      }}
    >
      <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-orange-500 border-orange-500 hover:border-transparent hover:text-teal-500 hover:font-bold mt-4 lg:mt-0">
        SignUp
      </a>
    </div>
  )
}

export default withRouter(SignUpButton)
