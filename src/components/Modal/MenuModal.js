import React from 'react'
import Modal from './Modal'

const MenuModal = ({
  open,
  handleClose,
  menu: { menuName, menuImage, menuPrice, id },
  handleAddItem,
}) => {
  return (
    <Modal open={open} handleClose={handleClose}>
      <div className="w-1/3 p-5 bg-white z-50 m-auto">
        <h3 className="tracking-widest title-font mb-1">
          CATEGORY
          <br />
          <br />
          <br />
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
          CATEGORY
          <br />
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {menuName}
        </h2>
        <p className="mt-1">{menuPrice}</p>
      </div>
    </Modal>
  )
}

export default MenuModal
