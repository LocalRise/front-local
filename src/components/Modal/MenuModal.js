import React, { useState } from 'react'
import Modal from './Modal'

import { MdAdd, MdClose } from 'react-icons/md'

const ButtonIcon = ({ children, handleClick }) => {
  return (
    <button
      onClick={() => handleClick()}
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
    >
      {children}
    </button>
  )
}

const MenuModal = ({ open, handleClose, data = {}, handleAddItem }) => {
  const { menuName, id } = data

  const [amount, setAmount] = useState(1)

  const handleSubmit = () => {
    handleAddItem(id, amount)
  }

  return (
    <Modal open={open} handleClose={handleClose}>
      <div className="w-1/3 p-5 bg-white z-50 m-auto">
        <h1 className="tracking-widest text-xl mb-1">{menuName}</h1>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg">จำนวน</p>
          <input
            className="w-16 p-2 text-center bg-blue-100"
            name="amount"
            type="number"
            min="1"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div className="flex items-center justify-between">
          <ButtonIcon handleClick={handleClose}>
            <MdClose />
          </ButtonIcon>
          <ButtonIcon handleClick={handleSubmit}>
            <MdAdd />
          </ButtonIcon>
        </div>
      </div>
    </Modal>
  )
}

export default MenuModal
