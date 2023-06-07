import { Navigate } from 'react-router-dom'
import { useUserContext } from '../context/user_context'

const PrivateRoute = ({ children }) => {
  const { myUser } = useUserContext()

  if (!myUser) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}
export default PrivateRoute
