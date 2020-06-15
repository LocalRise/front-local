import React, { useState } from 'react'
import Modal from './Modal'
import { NavLink } from 'react-router-dom'


const VerifySubmitModal = ({ open, handleClose, addOrder, cost, cusName_merName }) => {
    return (
        <Modal open={open} handleClose={handleClose}>
            <div className="w-full max-w-xs lg:w-1/3 p-5 bg-white z-50 m-auto rounded overflow-hidden">
                <div className="flex justify-center mb-5">
                    <p className="text-xl font-bold">
                        ยืนยันการสั่งอาหารใช่หรือไม่ ?
                    </p>
                </div>
                <div className="flex justify-between">
                    <button className="w-24 bg-orange-600 hover:bg-orange-800 text-white py-2 px-4 rounded-full"
                        onClick={() => handleClose()}>ย้อนกลับ</button>
                    <NavLink
                        to={`/payment/${cost}/${cusName_merName}`}
                        onClick={addOrder}>
                        <button className="w-24 bg-teal-600 hover:bg-teal-800 text-white py-2 px-4 rounded-full">ตกลง</button>
                    </NavLink>
                </div>
            </div>
        </Modal>
    )
}

export default VerifySubmitModal