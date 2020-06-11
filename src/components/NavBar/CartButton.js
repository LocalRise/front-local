import React from 'react'
import { withRouter } from 'react-router-dom'
import { signOut } from '../../services/firebase'

const CartButton = ({ history, render, setCollapse }) => {
  return (
    <div
      onClick={() => {
        // setCollapse((prev) => !prev)
        console.log('cart clicked');
      }}
    >
      {render ? (
        render()
      ) : (
        <a className="inline-block cursor-pointer text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
          Cart
        </a>
      )}
    </div>
  )
}

export default withRouter(CartButton)
