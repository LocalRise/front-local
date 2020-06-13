import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMerchant, useCart } from '../../contexts'

const Checkout = ({ location }) => {
  const { id } = useParams()
  const { merchants, fetchMerchantById } = useMerchant()

  useEffect(() => {
    fetchMerchantById(id)
  }, [])

  const merchant = merchants[id]

  console.log(merchant)

  return (
    <div class="w-full max-w-screen-xl mx-auto px-6">
      <div className="text-xl">1 รายละเอียดการจัดส่ง</div>
    </div>
  )
}

export default Checkout
