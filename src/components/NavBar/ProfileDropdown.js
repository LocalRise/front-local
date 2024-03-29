import React, { useState } from 'react'
import { SignUpButton, SignInButton } from './index'
import SignOutButton from './SignOutButton'
import firebase from '../../services/firebase'

const DropdownItem = ({ children }) => {
  return (
    <a href="#" className="block px-4 py-2 hover:text-blue-700">
      {children}
    </a>
  )
}

const ProfileDropdown = ({ user }) => {
  const [toggle, setToggle] = useState(false)
  const db = firebase.firestore()
  let [userName, setUserName] = useState('')
  if (user.uid) {
    db.collection("customers")
      .doc(user.uid)
      .get()
      .then(async doc => { setUserName(doc.data().firstname + " " + doc.data().lastname) })
  } else {
    setUserName("UserName")
  }
  return (
    <div className="relative w-10 h-10">
      <div
        className="relative z-10 w-full h-full p-2 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <svg viewBox="0 0 20 20">
          <path
            style={{ fill: 'black' }}
            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
          ></path>
        </svg>
      </div>
      {toggle && (
        <div
          className="fixed bg-black w-full h-full top-0 left-0 opacity-25"
          onClick={() => setToggle(false)}
        />
      )}
      {toggle && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl w-48">
          <DropdownItem>{userName}</DropdownItem>
          <SignOutButton render={() => <DropdownItem>ลงชื่อออก</DropdownItem>} />
        </div>
      )}
      {/* {user ? (
        'signout'
      ) : (
        <>
          <SignInButton />
          <SignUpButton />
        </>
      )} */}
    </div>
  )
}

export default ProfileDropdown
