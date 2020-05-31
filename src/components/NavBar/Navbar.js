import React from 'react'
import { FiSearch, FiMenu } from 'react-icons/fi'
import { TiThMenu } from 'react-icons/ti'
import { SignUpButton, SignInButton } from './index'
import { useAuth } from '../../services/firebase'
import ProfileDropdown from './ProfileDropdown'

const Navbar = () => {
  const { user } = useAuth()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">HomeRun</span>
      </div>
      <div className="">
        <ProfileDropdown user={user} />
      </div>
    </nav>
  )
}

export default Navbar
