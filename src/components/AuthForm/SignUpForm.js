import React, { useState, useEffect } from 'react'

const SignUpForm = ({ handleSignUp }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [tel, setTel] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const handleSubmit = () => {
    if (password !== confirmPassword) return
    handleSignUp({ email, password, tel, firstname, lastname })
  }

  useEffect(() => { }, [password, confirmPassword]) //handle error

  return (
    <div className="bg-cover pt-10 pb-10 bg-fixed h-screen bg-center" style={{ backgroundImage: `url(${'images/meal-plan-bg-white.jpg'})` }}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
        <div class="flex flex-col text-center w-full mb-12 mt-8">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign Up</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">สมัครสมาชิกเพื่อสั่งอาหารผ่านระบบได้เลยวันนี้!</p>
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
            placeholder="Username"
          />
          {email != "" && (!email.includes('@') || !email.includes('.')) && <div className="text-red-600 text-sm">โปรกรอกอีเมลให้ถูกต้อง (abc@mail.com)</div>}
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
          { password!="" && password.length < 6 && <div className="text-red-600 text-sm">กรุณาตั้งรหัสผ่านมากกว่า 6 ตัวอักษร</div>}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />
          { password!=confirmPassword && <div className="text-red-600 text-sm">กรุณากรอกรหัสผ่านให้ตรงกัน</div>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstname"
          >
            Firstname
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Firstname"
          />
          { firstname==""&& email!="" && <div className="text-red-600 text-sm">กรุณากรอกข้อมูลให้ครบถ้วน</div>}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tel"
          >
            Lastname
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="lastname"
            onChange={(e) => setLastname(e.target.value)}
            placeholder="lastname"
          />
          { lastname==""&& firstname!="" && <div className="text-red-600 text-sm">กรุณากรอกข้อมูลให้ครบถ้วน</div>}
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tel"
          >
            Tel
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tel"
            type="tel"
            onChange={(e) => setTel(e.target.value)}
            placeholder="Tel."
          />
          { tel.length != 10 && lastname!="" && <div className="text-red-600 text-sm">กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (0912345678)</div>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            สมัครสมาชิก
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
