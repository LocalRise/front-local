import React, { useState, useContext, useEffect } from 'react'
import firebase from '../services/firebase'

export const AuthContext = React.createContext({ user: null })
export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      setUser(user)
    })
  })

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
