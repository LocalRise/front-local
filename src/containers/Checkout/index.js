import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Map from './../../components/GoogleMap'
import CheckoutList from './../../components/CheckoutList'
import { useAuth } from './../../contexts'
import firebase from '../../services/firebase'

const Checkout = ({ location }) => {
  const id = new URLSearchParams(location.search).get('id')
  const [customerLocation, setCustomerLocation] = useState({ lat: 0, lng: 0 })
  const { user } = useAuth()
  const db = firebase.firestore()
  const [userName, setUserName] = useState('')
  const [userTel, setUserTel] = useState('')
  if (user.uid) {
    db.collection("customers")
      .doc(user.uid)
      .get()
      .then(async doc => { 
        const data = doc.data()
        setUserName(data.firstname + " " + data.lastname) 
        setUserTel(data.tel)
      })
  } else {
    setUserName("UserName")
  }

  return (
    <>
      <div className="w-screen mx-auto px-6">
        <section className="text-gray-700 body-font text-center bg-teal-600">
          <div className="container px-1 mx-auto">
            <h1 className="sm:text-3xl text-4xl font-bold title-font text-white">
              Checkout
            </h1>
          </div>
        </section>
        <p className="mx-auto font-bold leading-relaxed text-2xl text-left mb-10 text-center mt-10 text-gray-700 ">
          เลือกสถานที่ส่ง
        </p>
        <Map setCustomerLocation={setCustomerLocation}></Map>
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-10 mx-auto">
            <CheckoutList
              location={location}
              customerLocation={customerLocation}
              userInfo={{name:userName,tel:userTel}}
            ></CheckoutList>
          </div>
        </section>
      </div>
    </>
  )
}

export default Checkout
