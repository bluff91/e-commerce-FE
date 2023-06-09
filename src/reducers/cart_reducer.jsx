import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_ITEM_AMOUNT,
  CALCULATE_TOTALS,
} from '../utils/actions'

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, amount, color, product } = action.payload
      const tempItem = state.cartProducts.find((item) => item.id === id + color)

      if (tempItem) {
        const tempCart = state.cartProducts.map((item) => {
          if (item.id === id + color) {
            let tempAmount = item.amount + amount
            if (tempAmount > item.max) {
              tempAmount = item.max
            }
            return { ...item, amount: tempAmount }
          }
          return item
        })
        return {
          ...state,
          cartProducts: tempCart,
        }
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color: color,
          amount: amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        }
        return {
          ...state,
          cartProducts: [...state.cartProducts, newItem],
        }
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (item) => item.id !== action.payload
        ),
      }

    case CLEAR_CART:
      return {
        ...state,
        cartProducts: [],
      }

    case TOGGLE_ITEM_AMOUNT:
      const { value, id: itemId } = action.payload
      const tempCart = state.cartProducts.map((item) => {
        const increaseAmount = (amount, max) => {
          let newAmount = amount + 1
          if (newAmount > max) {
            newAmount = max
          }
          return newAmount
        }
        const decreseAmount = (amount) => {
          let newAmount = amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return newAmount
        }
        if (item.id === itemId) {
          if (value === 'inc') {
            return { ...item, amount: increaseAmount(item.amount, item.max) }
          } else if (value === 'dec') {
            return { ...item, amount: decreseAmount(item.amount) }
          }
        } else return item
      })
      return {
        ...state,
        cartProducts: tempCart,
      }

    case CALCULATE_TOTALS:
      const { total_items, total_amount } = state.cartProducts.reduce(
        (total, item) => {
          const { price, amount } = item
          total.total_amount += price * amount
          total.total_items += amount
          return total
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      )

      return {
        ...state,
        total_amount,
        total_items,
      }
    default:
      return state
  }
}

export default reducer
