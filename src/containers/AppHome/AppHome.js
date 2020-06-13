import React from 'react'
import MerchantList from '../../components/MerchantList'
import Footer from './../../components/footer'

const AppHome = ({ data }) => {
  return (
    <>
      <img alt="content" class="object-cover object-center h-full w-screen hidden md:block" src="images/cover_pc.png"></img>
      <img alt="content" class="object-cover object-center h-full w-screen block md:hidden" src="images/cover_phone.png"></img>
      <section class="text-gray-700 body-font text-center">
        <div class="container px-5 py-10 mx-auto">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-medium text-left">
            เลือกสั่งอาหารจากร้านค้าที่ร่วมรายการ
          </h1>
        </div>
      </section>
      <MerchantList data={data} />
      <Footer/>
    </>
  )
}

export default AppHome
