import { useContext, createContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import { ADD_TO_CART } from '../utils/actions'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    total_amount: 0,
    total_items: 0,
    cartProducts: [],
    shipping_fee: 1199,
  })

  //add to cart:
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export { CartProvider, useCartContext }
