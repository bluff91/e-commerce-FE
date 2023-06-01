import { useEffect } from 'react'
import { useContext, createContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_ITEM_AMOUNT,
  CALCULATE_TOTALS,
} from '../utils/actions'

const CartContext = createContext()

const checkLocalStorage = () => {
  const cart = localStorage.getItem('cartProducts')
  if (cart) {
    return JSON.parse(localStorage.getItem('cartProducts'))
  } else {
    return []
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    total_amount: 0,
    total_items: 0,
    cartProducts: checkLocalStorage(),
    shipping_fee: 1199,
  })

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    dispatch({ type: CALCULATE_TOTALS })
  }, [state.cartProducts])

  console.log('total $ is: ', state.total_amount)
  //add to cart:
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }
  const toggleAmount = (value, id) => {
    dispatch({ type: TOGGLE_ITEM_AMOUNT, payload: { id, value } })
  }
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export { CartProvider, useCartContext }
