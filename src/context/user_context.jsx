import { createContext, useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

const UserContext = createContext()

const useUserContext = () => {
  return useContext(useContext)
}

const UserProvider = ({ children }) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
  const [myUser, setMyUser] = useState(null)
  console.log(loginWithRedirect)
  return (
    <UserContext.Provider
      value={{ loginWithRedirect, isAuthenticated, logout, myUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { useUserContext, UserProvider }
