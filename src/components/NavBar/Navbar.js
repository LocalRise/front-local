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
    <nav className="flex items-center justify-between flex-wrap bg-white p-3 fixed w-full z-50 h-16">
      <div className="flex items-center flex-shrink-0 text-white mr-6 w-1">
        <NavLink to="/">
          <LogoText />
        </NavLink>
      </div>
      {user ? (
        <div className="flex">
          <div className="mr-2">
            <ProfileDropdown user={user} />
          </div>
          <div className="lg:hidden -mt-3">
            <CartButton setCollapse={setCollapse} setOpenCart={setOpenCart} openCart={openCart} />
          </div>
        </div>
      ) : (
          <div className="flex -mt-3">
            <div className="mr-2">
              <SignUpButton />
            </div>
            <div className="mr-2">
              <SignInButton />
            </div>
            <div className="lg:hidden">
              <CartButton setCollapse={setCollapse} setOpenCart={setOpenCart} openCart={openCart} />
            </div>
          </div>
        )}
    </nav>
  )
}

export default Navbar
