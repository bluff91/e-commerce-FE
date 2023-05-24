import { ADD_TO_CART } from '../utils/actions'

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
        })
        return {
          ...state,
          cartProducts: tempCart,
          total_items: state.total_items + amount,
          total_amount:
            state.cartProducts.reduce((total, product) => {
              const { price, amount } = product

              total = price * amount
              return total
            }, 0) + product.shipping
              ? 0
              : state.shipping_fee,
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
          total_items: state.total_items + amount,
          total_amount:
            state.cartProducts.reduce((total, product) => {
              const { price, amount } = product
              total = price * amount
              console.log('total = ', total)
              return total
            }, 0) + product.shipping
              ? 0
              : state.shipping_fee,
        }
      }

    default:
      return state
  }
}

export default reducer
