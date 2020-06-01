import React from 'react'
import MerchantList from '../../components/MerchantList'

const AppHome = ({ data }) => {
  return (
    <>
      <h1 className="font-semibold text-left text-2xl pl-5">
        ร้านค้าที่ร่วมรายการ
      </h1>
      {data && (
        <MerchantList className="flex md:flex-row flex-wrap" data={data} />
      )}
    </>
  )
}

export default AppHome
