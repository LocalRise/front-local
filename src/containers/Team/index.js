import React from 'react'
import { IoIosCall } from 'react-icons/io'

const Team = () => {
  return (
    <div className="bg-cover pt-10 pb-10 bg-fixed h-screen bg-center" style={{ backgroundImage: `url(${'images/meal-plan-bg-white.jpg'})` }}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
        <div class="flex flex-col text-center w-full mb-5 mt-8">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">ติดต่อทีมงาน</h1>
        </div>
        <div className="flex relative">
          <h1 className="font-bold text-xl"> Executive </h1>
          <a href="tel:0910785410" className="text-xl absolute right-0 mr-8 text-blue-500">
            <IoIosCall />
          </a>
        </div>
        <div className="text-lg pl-4">
          <p>ปณัย เกตุแก้ว </p>
          <p>ณัฐนัย เงาธรรมทรรศน์</p>
          <p>พีรณัฐ หล่อลิปิวงศ์</p>
        </div>
        <div className="flex relative">
          <h1 className="font-bold text-xl"> Human Resources </h1>
          <a href="tel:0931365155" className="text-xl absolute right-0 mr-8 text-blue-500">
            <IoIosCall />
          </a>
        </div>
        <div className="text-lg pl-4">
          <p>ศุภณัฐ ต้อขัดคำ </p>
        </div>
        <div className="flex relative">
          <h1 className="font-bold text-xl"> Operation </h1>
          <a href="tel:0982155667" className="text-xl absolute right-0 mr-8 text-blue-500">
            <IoIosCall />
          </a>
        </div>
        <div className="text-lg pl-4">
          <p>ปรวีร์ ปั้นเทศ </p>
          <p>สิรวิชญ์ พงศ์วิลาวัณย์</p>
        </div>
        <div className="flex relative">
          <h1 className="font-bold text-xl"> Developer </h1>
          <a href="tel:0931316936" className="text-xl absolute right-0 mr-8 text-blue-500">
            <IoIosCall />
          </a>
        </div>
        <div className="text-lg pl-4 mb-8">
          <p>ศักดิ์ชัย วชิรเมธากร </p>
          <p>วรัญญู เนรังสี</p>
          <p>ณัฐภัทร ศรีวิชัยลำพันธ์</p>
        </div>
        <a href="mailto:panai.kk@gmail.com,ngaothammatat.nattanai@gmail.com,omsin.smith@gmail.com,t.supanutaut@gmail.com,pairpunchline@gmail.com,sirawit.heart09@gmail.com,sakchai.wachi@gmail.com,waranyu.mark26@gmail.com,por.nattapat.01@gmail.com?subject=ติดต่อทีม FRESH2HOME จาก https://fresh-2-home.web.app/">
          <button className="w-full bg-teal-600 hover:bg-orange-600 text-white py-2 px-4">ติดต่อทาง EMAIL</button>
        </a>
      </div>
    </div>
  )
}

export default Team