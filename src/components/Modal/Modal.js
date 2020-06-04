import React from 'react'

const Modal = ({ open, handleClose, children }) => {
  return (
    <div className={`fixed w-full h-full inset-0 z-50 ${open ? '' : 'hidden'}`}>
      <div className="w-full h-full flex items-center overflow-y-scroll p-10 ">
        {children}
      </div>
      <div
        className="fixed bg-black w-full h-full top-0 left-0 opacity-25 "
        onClick={() => handleClose(false)}
      />
      >
    </div>
  )
}

export default Modal
