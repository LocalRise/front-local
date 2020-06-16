import React, { useState, useEffect } from 'react'
import { FaFacebook } from 'react-icons/fa'

import * as firebase from 'firebase/app'

const SignInForm = ({ error, handleSignIn, handleFacebookSignIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState()
  const handleSubmit = () => {
    handleSignIn({ email, password })
  }

  useEffect(() => {
    if (!error) return
    switch (error.code) {
      case 'auth/wrong-password':
      case 'auth/user-not-found':
        setErrorMessage('ชื่อผู้ใช้หรือรหัสผ่านผิด กรุณาตรวจสอบอีกครั้ง')
        break
      default:
        setErrorMessage('ระบบมีปัญหากรุณาใช้งานในภายหลัง')
        break
    }
  }, [error])

  return (
    <div
      className="bg-cover pt-10 pb-10 bg-fixed h-screen bg-center"
      style={{ backgroundImage: `url(${'images/meal-plan-bg-white.jpg'})` }}
    >
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
        <div class="flex flex-col text-center w-full mb-12 mt-10">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            ลงชื่อเข้าใช้
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            เข้าสู่ระบบเพื่อเริ่มการสั่งอาหารได้เลย!
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          {email != '' && (!email.includes('@') || !email.includes('.')) && (
            <div className="text-red-600 text-sm">
              โปรกรอกอีเมลให้ถูกต้อง (abc@mail.com)
            </div>
          )}
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {password === '' && email != '' && (
            <div className="text-red-600 text-sm">โปรดกรอกรหัสผ่าน</div>
          )}
        </div>
        {errorMessage && (
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5"
            role="alert"
          >
            <span class="block sm:inline">{errorMessage}</span>
          </div>
        )}
        <div className="flex items-center justify-between mb-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            ลงชื่อเข้าใช้
          </button>
        </div>
        {/* <div className="flex flex-wrap justify-center">
          <div className="w-full">
            <button
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 w-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleFacebookSignIn()}
            >
              <div className="flex justify-center">
                <FaFacebook className="mt-1 mr-1" /> เข้าสู่ระบบด้วยเฟสบุ๊ค
              </div>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default React.memo(SignInForm)
