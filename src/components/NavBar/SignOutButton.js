import React from 'react'
import { withRouter } from 'react-router-dom'
import { signOut } from '../../services/firebase'

const SignOutButton = ({ history, render }) => {
  return (
    <div
      onClick={() => {
        signOut()
        history.push('/')
      }}
    >
      {render ? (
        render()
      ) : (
        <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
          SignOut
        </a>
      )}
    </div>
  )
}

export default withRouter(SignOutButton)
