import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
} from '../utils/actions'

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      // eslint-disable-next-line no-case-declarations
      let maxPrice = action.payload.map((item) => item.price)
      maxPrice = Math.max(...maxPrice)

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
        products_loading: false,
      }

    case SET_GRIDVIEW:
      return { ...state, grid_view: true }

    case SET_LISTVIEW:
      return { ...state, grid_view: false }

    case SORT_PRODUCTS:
      if (action.payload === 'name-a') {
        return {
          ...state,
          filtered_products: state.all_products.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        }
      }

      if (action.payload === 'name-z') {
        return {
          ...state,
          filtered_products: state.all_products.sort((a, b) =>
            b.name.localeCompare(a.name)
          ),
        }
      }

      if (action.payload === 'price-lowest') {
        return {
          ...state,
          filtered_products: state.all_products.sort(
            (a, b) => a.price - b.price
          ),
        }
      }

      if (action.payload === 'price-highest') {
        return {
          ...state,
          filtered_products: state.all_products.sort(
            (a, b) => b.price - a.price
          ),
        }
      }
      return state

    default:
      throw new Error(`No such action '${action.type}' to dispatch`)
  }
}

export default reducer
