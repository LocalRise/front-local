import React, { useState } from 'react'
import { SignUpButton, SignInButton } from './index'
import { useAuth } from '../../contexts'
import ProfileDropdown from './ProfileDropdown'
import { NavLink } from 'react-router-dom'
import CartButton from './CartButton'

const Navbar = ({ setCollapse }) => {
  const { user } = useAuth()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3 fixed w-full">
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
          <div className="mr-2">
            <SignInButton />
          </div>
          <div>
            <CartButton setCollapse={setCollapse} />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
