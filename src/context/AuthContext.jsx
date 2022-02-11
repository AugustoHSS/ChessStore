import React, { createContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState('')
  const [username, setUsername] = useState('')
  const [guest, setGuest] = useState(true)

  return (
    <AuthContext.Provider
      value={{ token, setToken, username, setUsername, guest, setGuest }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
