import './CSS/Navbar.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import CartButtons from './CartButtons'
import { links } from '../utils/constants'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Navbar = () => {
  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="comfy-sloth" />
          </Link>
          <button className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <div className="cart-btn-wrapper">
          <CartButtons />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
