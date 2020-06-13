import React, { useState } from 'react'
import Modal from './Modal'

import { AiOutlineLine, AiOutlinePlus } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'

const ButtonIcon = ({ children, handleClick, styles }) => {
  return (
    <button
      onClick={() => handleClick()}
      class={`text-gray-800 font-bold py-2 rounded inline-flex items-center ${styles}`}
    >
      {children}
    </button>
  )
}

const MenuModal = ({ open, handleClose, data = {}, handleAddItem }) => {
  const { menuName, id } = data

  const [amount, setAmount] = useState(1)

  const handleSubmit = () => {
    if (amount > 0) handleAddItem(id, amount)
    else handleClose(false)
  }

  const handleIncress = () => {
    setAmount(parseInt(amount) + 1)
  }

  const handleDecress = () => {
    if (amount - 1 >= 1) {
      setAmount(parseInt(amount) - 1)
    }
  }

  let n = 1;

  return (
    <Modal open={open} handleClose={handleClose}>
      <div className="w-full lg:w-1/3 p-5 bg-white z-50 m-auto rounded overflow-hidden">
        <h1 className="tracking-widest text-xl mb-1 font-medium">{menuName}</h1>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg">จำนวน</p>
          <div className="flex items-center">
            <ButtonIcon handleClick={handleDecress} styles={"bg-yellow-400 hover:bg-yellow-500 px-1"}>
              <AiOutlineLine className="text-lg text-center" />
            </ButtonIcon>
            <input
              className="w-12 p-2 text-center bg-blue-100 mx-1"
              name="amount"
              // type="number"
              min="1"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
            <ButtonIcon handleClick={handleIncress} styles={"bg-green-400 hover:bg-green-500 px-1"}>
              <AiOutlinePlus className="text-lg text-center" />
            </ButtonIcon>
          </div>
        </div>
        <div className="flex justify-center">
          <ButtonIcon handleClick={handleSubmit} styles={"bg-orange-500 hover:bg-orange-600 px-4"}>
            <FiShoppingCart className="mx-3" />
          </ButtonIcon>
        </div>
      </div>
    </Modal>
  )
}

export default MenuModal
