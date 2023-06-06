import { createContext, useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { useEffect } from 'react'

const UserContext = createContext()

const useUserContext = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0()
  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user)
    } else {
      setMyUser(false)
    }
  }, [isAuthenticated])

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, isAuthenticated, logout, myUser, user }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { useUserContext, UserProvider }
