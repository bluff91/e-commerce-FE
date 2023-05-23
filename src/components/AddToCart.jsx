import './CSS/AddToCart.css'
import { FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AmountButtons from './AmountButtons'
import { useCartContext } from '../context/cart_context'

const AddToCart = (product) => {
  const { id, stock, colors = [] } = product
  const [amount, setAmount] = useState(1)
  const [mainColor, setMainColor] = useState(colors[0])

  const { addToCart } = useCartContext()

  const toggleAmount = (command) => {
    setAmount((prevState) => {
      if (command === 'dec') {
        if (prevState === 1) {
          return 1
        } else {
          return prevState - 1
        }
      }
      if (command === 'inc') {
        if (prevState === stock) {
          return prevState
        } else {
          return prevState + 1
        }
      }
    })
  }

  return (
    <div className="add-to-cart-container">
      <div className="colors">
        <span>colors: </span>
        <div>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ background: color }}
              className="color-btn"
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className="add-to-cart-btn-container">
        <AmountButtons
          className="btn"
          amount={amount}
          toggleAmount={toggleAmount}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </div>
  )
}

export default AddToCart
