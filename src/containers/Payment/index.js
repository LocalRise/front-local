import React, { useState } from 'react'
import Footer from './../../components/footer'
import { useParams } from 'react-router-dom'
import qrcode from 'qrcode'
import generatePayload from 'promptpay-qr'
import styled from "styled-components"
import { FaLine } from 'react-icons/fa'
import PicPromtPay from './promt-pay.jpg'
import firebase from './../../services/firebase'


const Button = styled.button`
  background-color: rgba(0,185,1,0.9);
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
`

const Payment = () => {
    const [orderId, setOrderId] = useState("OrderID")
    const db = firebase.firestore()
    db.collection('orders').get()
        .then(snap => { setOrderId('f' + (snap.size).toString()) })
    const { cost, identity } = useParams()

    const mobileNumber = '091-078-5410' //OHM Phone
    const amount = parseInt(cost)
    const payload = generatePayload(mobileNumber, { amount })

    const options = { type: 'svg', color: { dark: '#003b6a', light: '#f7f8f7' } }
    const [QrCode, setQrCode] = useState(null)
    new Promise((resolve, reject) => {
        qrcode.toString(payload, options, (err, svg) => {
            if (err) return reject(err)
            resolve(svg)
        })
    }).then(res =>
        setQrCode(res.toString()
            .replace("rgb(247,248,247)", "rgb(255,255,255)")
            .replace("rgb(0,59,106)", "rgb(79, 79, 79)")
        ))
    return (
        <>
            <section class="text-gray-700 body-font text-center mb-10" style={{ minHeight: '80vh' }}>
                <div class="container flex flex-col px-6 py-5 mx-auto">
                    <p className="mx-auto font-bold leading-relaxed text-2xl text-left mb-5 text-center text-gray-700 ">
                        <p>ชำระเงินค่าอาหารและ</p>
                        <p>ค่าบริการด้วย QRCODE</p></p>
                    <p className="text-xl">จำนวนเงินที่ต้องชำระ {cost} บาท</p>
                    <img src={PicPromtPay} className="h-12 mx-auto mt-3" />
                    <div className="mx-auto " dangerouslySetInnerHTML={{ __html: QrCode }} />
                    <p className="text-lg -mt-3 mb-2">นายปณัย เกตุแก้ว 0910785410</p>
                    <p className="text-sm font-bold mb-5">{orderId} {identity}</p>
                    <p className="text-xl" >เมื่อชำระเงินเสร็จแล้ว กรุณาแคปหน้านี้</p>
                    <p className="text-xl">เพื่อแจ้งการชำระเงินได้ที่</p>
                    <a className="mt-1" href='https://lin.ee/rPvI7OR' target="_blank">
                        <Button className="p-2">
                            <span className="flex">
                                <FaLine className="text-2xl mr-3" style={{ color: 'rgba(255,255,255)' }} />
                                @Fresh2Home
                            </span>
                        </Button>
                    </a>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Payment
