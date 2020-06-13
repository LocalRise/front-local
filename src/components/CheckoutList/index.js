import React, { useEffect, useState, useContext } from 'react'
import { useMerchant, useCart, CartContext } from '../../contexts'
import { useParams } from 'react-router-dom'
import firebase from '../../services/firebase'
import Map from './../GoogleMap'
// import Distance from './../../services/distance'

const CheckoutList = ({ location, customerLocation }) => {
  const { id } = useParams()
  const {
    menus,
    merchants,
    loading,
    error,
    fetchMerchantById,
    fetchMerchantMenuById,
    fetchMerchantList,
  } = useMerchant()

  const { addItem, order } = useCart()

  const merchant = merchants[id]
  const menu = menus[id]
  const [totalPrice, setTotalPrice] = useState(0)
  const name = merchant && merchant.name
  const merchantLocation = merchant && merchant.location
  const [distance, setDistance] = useState(0)
  const [serviceChargeDistance, setServiceChargeDistance] = useState(0)
  const [serviceChargeCarry, setServiceChargeCarry] = useState(0)

  useEffect(() => {
    // fetchMerchantById(id)
    fetchMerchantList()
    if (!menu) fetchMerchantMenuById(id)

    if (!menu || !menu) return

    let total = 0
    Object.keys(order).map((menuId) => {
      if (!menu[menuId] || !order[menuId]) return
      const price = menu[menuId].menuPrice * order[menuId]
      // console.log(price, menu[menuId])
      total += price
    })
    setTotalPrice(total)
  }, [order, menu])

  const addOrder = (e) => {
    e.preventDefault()
    const db = firebase.firestore()
    const orderRef = db.collection('orders').add({
      customerId: 5,
      merchantId: id,
      orderList: order,
      totalPrice: totalPrice,
      location: customerLocation,
    })

    alert('รายการสั่งซื้อของคุณถูกส่งไปยังผู้ขายแล้ว')
  }

  return (
    <section className="body-font overflow-hidden">
      <div className="hidden">
        {/* <Distance merchantLocation={merchantLocation} customerLocation={customerLocation} setDistance={setDistance}/> */}
      </div>
      <div className="container py-20 mx-auto">
        <p className="mx-auto leading-relaxed text-2xl text-left mb-10 text-center font-bold text-gray-700 ">
          ข้อมูลการชำระเงิน
        </p>
        <div className="-my-8">
          <div className="py-8 flex flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900 text-2xl">
                ร้านอาหาร
              </span>
              <span className="mt-1 text-gray-500 text-sm">Restaurant</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                {name}
              </h2>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900 text-2xl">
                รายการอาหาร
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-1">
                {order &&
                  menu &&
                  Object.keys(order).map((menuId) => {
                    console.log('----', menu, menuId)
                    if (!menu[menuId] || !order[menuId]) return
                    const { menuName, menuPrice } = menu[menuId]
                    const amount = order[menuId]
                    return (
                      <div key={menuId}>
                        <div className="flex border-b border-gray-300 py-2 ">
                          <div>
                            <p className="text-lg">{menuName}</p>
                            <p className="text-base">({menuPrice} บาท)</p>
                          </div>
                          <div className="ml-auto text-gray-900 text-lg ">
                            <br />
                            <p className="">จำนวน {amount} รายการ</p>
                          </div>
                        </div>
                        <div className="flex border-b mb-6 border-gray-300 py-2">
                          <span className="text-gray-500 text-lg">รวม</span>
                          <span className="ml-auto text-gray-900 text-xl">
                            {amount * menuPrice} บาท
                          </span>
                        </div>
                      </div>
                    )
                  })}
              </h2>
            </div>
          </div>
          <div className="mb-10 flex-wrap md:flex-no-wrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900 text-2xl">
                ค่าบริการ
              </span>
            </div>
            <div className="md:flex-grow">
              <div className="flex border-b border-gray-300 py-2">
                <span className="text-xl">ค่าบริการตามระยะทาง</span>
                <span className="ml-auto text-gray-900 text-lg">
                  {serviceChargeDistance} บาท
                </span>
              </div>
              <div className="flex border-b border-gray-300 py-2">
                <span className="text-xl">ค่าหิ้ว</span>
                <span className="ml-auto text-gray-900 text-lg">
                  {serviceChargeCarry} บาท
                </span>
              </div>
            </div>
          </div>
          <div className="py-8 border-t-2 border-gray-500 flex-wrap md:flex-no-wrap mt-2">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="tracking-widest font-medium title-font text-gray-900 text-2xl">
                ราคารวม
              </span>
            </div>
            <div className="md:flex-grow">
              <div className="flex py-2">
                <span className="text-gray-500 text-2xl">รวมทั้งสิ้น</span>
                <span className="ml-auto text-2xl font-medium text-gray-900 title-font text-xl">
                  {totalPrice} บาท
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={addOrder}
        className="text-white w-full bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
      >
        สั่งอาหาร
      </button>
    </section>
  )
}

export default React.memo(CheckoutList)
