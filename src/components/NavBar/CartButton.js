import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { signOut } from '../../services/firebase'


const CartButton = ({ history, render, setCollapse, setOpenCart, openCart }) => {
  // const [openCart, setOpenCart] = useState(false)
  return (
    <div
      onClick={() => {
        // setCollapse((prev) => !prev)
        setOpenCart(!openCart ? true : false)
        console.log('cart clicked', openCart);
      }}
    >
      {render ? (
        render()
      ) : (
        <a className="inline-block cursor-pointer text-sm px-4 py-2 leading-none border rounded text-orange-500 border-orange-500 hover:border-transparent hover:text-teal-500 hover:font-bold mt-4 lg:mt-0">
          Cart
        </a>
      )}
    </div>
  )
}

export default withRouter(CartButton)
