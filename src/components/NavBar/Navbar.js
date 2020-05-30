import React from 'react'
import { FiSearch, FiMenu } from 'react-icons/fi'
import { TiThMenu } from 'react-icons/ti'
import { SignUpButton, SignInButton } from './index'
import { useAuth } from '../../services/firebase'

const Navbar = () => {
  const { user } = useAuth()
  console.log(user)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">HomeRun</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>

        <SignInButton />
        <SignUpButton />
      </div>
    </nav>
  )
}

export default Navbar
