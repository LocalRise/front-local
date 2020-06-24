import React from 'react'
import Modal from './Modal'
import { NavLink } from 'react-router-dom'


const StopService = ({ open, handleClose}) => {
    return(
        <Modal open={open} handleClose={handleClose}>
            <div className="w-full max-w-lg lg:w-1/3 p-5 bg-white z-50 m-auto rounded overflow-hidden">
                <div className="relative mb-16">
                    <p className="text-2xl font-bold flex justify-center ">
                        ขออภัย
                    </p>
                    <p className="text-xl">
                        FRESH2HOME ได้หยุดให้บริการแล้ว ขอขอบคุณที่สนใจ และเป็นกำลังใจให้พวกเราเสมอมา
                    </p>
                    <NavLink
                        to={`/team`}>
                        <button className="absolute right-0 bg-teal-600 hover:bg-teal-800 text-white rounded-full py-1 px-2">
                            ติดต่อทีมงาน
                        </button>
                    </NavLink>
                </div>
                <div className="flex justify-center">
                    <button className="w-full bg-gray-400 hover:bg-gray-600 text-white py-2 px-4"
                        onClick={() => handleClose()}>ตกลง</button>
                </div>
            </div>
        </Modal>
    )
}

export default StopService