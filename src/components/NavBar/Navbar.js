import React from 'react'
import { SignUpButton, SignInButton } from './index'
import { useAuth } from '../../services/firebase'
import ProfileDropdown from './ProfileDropdown'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { user } = useAuth()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink to="/">
          <span className="font-semibold text-xl tracking-tight">HomeRun</span>
        </NavLink>
      </div>
      {user ? (
        <ProfileDropdown user={user} />
      ) : (
        <div className="flex">
          <div className="mr-2">
            <SignUpButton />
          </div>
          <div>
            <SignInButton />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
