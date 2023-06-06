import { PageHero } from '../components'
import { useUserContext } from '../context/user_context'

const Checkout = () => {
  const { myUser } = useUserContext()

  return (
    <main>
      <PageHero title="checkout" />
      <div className="page">{myUser ? <h1>Checkout here</h1> : 'lol'}</div>
    </main>
  )
}
export default Checkout
