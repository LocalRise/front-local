import React, { useState } from 'react'
import Footer from './../../components/footer'
import { useParams } from 'react-router-dom'
import qrcode from 'qrcode'
import generatePayload from 'promptpay-qr'
import styled from "styled-components"
import { FaLine } from 'react-icons/fa'

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

const QRCODE = ({ QrCode }) => {
    return <div>{QrCode}</div>
}

const Payment = () => {
    const { cost } = useParams()

    const mobileNumber = '091-078-5410'
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
            <section class="text-gray-700 body-font text-center" style={{ height: '80vh' }}>
                <div class="container flex flex-col px-6 py-10 mx-auto">
                    <p className="mx-auto font-bold leading-relaxed text-3xl text-left mb-10 text-center mt-10 text-gray-700 ">
                        ชำระเงินด้วย QR CODE</p>
                    <p className="text-2xl">จำนวนเงินที่ต้องชำระ {cost} บาท</p>
                    <div className="mx-auto my-5" dangerouslySetInnerHTML={{ __html: QrCode }} />
                    <p className="text-2xl" >เมื่อชำระเงินเสร็จแล้วสามารถแจ้งการชำระเงินได้ที่</p>
                    <a className="mt-10" href='https://lin.ee/rPvI7OR' target="_blank">
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
