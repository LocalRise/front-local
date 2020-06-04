import React from 'react'
import Modal from './Modal'

const MenuModal = ({ open, handleClose, data = {}, handleAddItem }) => {
  const { menuName } = data
  return (
    <Modal open={open} handleClose={handleClose}>
      <div className="w-1/3 p-5 bg-white z-50 m-auto">
        <h3 className="tracking-widest title-font mb-1">{menuName}</h3>
      </div>
    </Modal>
  )
}

export default MenuModal
