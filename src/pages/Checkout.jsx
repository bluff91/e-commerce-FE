import { PageHero } from '../components'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, Navigate } from 'react-router-dom'

const Checkout = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  return (
    <main>
      <PageHero title="checkout" />
      <div className="page">
        {isAuthenticated ? <h1>Checkout here</h1> : loginWithRedirect}
      </div>
    </main>
  )
}
export default Checkout
