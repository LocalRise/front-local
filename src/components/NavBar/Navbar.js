import React, { useState } from 'react'
import { SignUpButton, SignInButton } from './index'
import { useAuth } from '../../contexts'
import ProfileDropdown from './ProfileDropdown'
import { NavLink } from 'react-router-dom'
import CartButton from './CartButton'
import LogoText from './../logo_text'

const Navbar = ({ setCollapse, setOpenCart, openCart }) => {
  const { user } = useAuth()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-3 fixed w-full z-50 h-16">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink to="/">
          {/* <span className="font-semibold text-xl tracking-tight">HomeRun</span> */}
          <LogoText/>
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
            <CartButton setCollapse={setCollapse} setOpenCart={setOpenCart} openCart={openCart} />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
