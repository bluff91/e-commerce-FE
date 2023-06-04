import './CSS/CartItem.css'
import { FaTrash } from 'react-icons/fa'
import AmountButtons from './AmountButtons'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'

const CartItem = ({ id, image, name, price, amount, color }) => {
  const { removeItem, toggleAmount } = useCartContext()

  return (
    <div className="cart-item">
      <div className="cart-item-title">
        <img src={image} alt={name} />
        <div>
          <h5 className="cart-item-name">{name}</h5>
          <p className="cartitemcolor">
            color : <span style={{ backgroundColor: color }}></span>
          </p>
          <h5 className="cart-item-price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="cart-item-price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} toggleAmount={toggleAmount} id={id} />
      <h5 className="cart-item-subtotal">{formatPrice(price * amount)}</h5>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </div>
  )
}

export default CartItem
