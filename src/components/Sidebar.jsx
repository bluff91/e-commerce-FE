import './CSS/Sidebar.css'
import { FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext()
  // const isOpen = false
  return (
    <div className="sidebar-container">
      <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <img src={logo} alt="comfy-sloth logo" className="logo" />
          <button className="close-btn " onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((item) => {
            const { id, text, url } = item
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <div className="sidebar-cart-buttons">
          <CartButtons />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
