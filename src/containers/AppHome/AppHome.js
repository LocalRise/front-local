import React, { useState } from 'react'
import MerchantList from '../../components/MerchantList'
import Footer from './../../components/footer'
import { StopService } from './../../components/Modal'

const AppHome = ({ data }) => {
  const [openModal, setOpenModal] = useState(true)
  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <StopService
        open={openModal}
        handleClose={handleClose}
      />
      <img alt="content" class="object-cover object-center h-full w-screen hidden md:block" src="images/cover_pc.png"></img>
      <img alt="content" class="object-cover object-center h-full w-screen block md:hidden" src="images/cover_phone.png"></img>
      <section class="text-gray-700 body-font text-center">
        <div class="container px-5 py-10 mx-auto">
          <h1 class="sm:text-3xl text-2xl title-font text-gray-900 font-medium text-left">
            เลือกสั่งอาหารจากร้านค้าที่ร่วมรายการ
          </h1>
        </div>
      </section>
      <MerchantList data={data} />
      <Footer />
    </>
  )
}

export default AppHome
