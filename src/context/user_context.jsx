import { createContext, useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { useEffect } from 'react'

const UserContext = createContext()

const useUserContext = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0()
  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    setMyUser(user)
  }, [user])

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser, user }}>
      {children}
    </UserContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { useUserContext, UserProvider }
