import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'

const SignInForm = ({ handleSignIn, handleFacebookSignIn }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
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
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <div className="flex items-center justify-between mb-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            handleSignIn({ email, password })
          }}
        >
          Sign In
        </button>
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
          <button
            class="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleFacebookSignIn()}
          >
            <div className="flex justify-center">
              <FaFacebook className="mt-1 mr-1" /> เข้าสู่ระบบด้วยเฟสบุ๊ค
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
