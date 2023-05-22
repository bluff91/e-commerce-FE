import { useContext, createContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {})

  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  )
}

const cartContext = () => {
  return useContext(CartContext)
}

export { CartProvider, cartContext }
