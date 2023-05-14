import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../utils/actions'

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
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

    case UPDATE_FILTERS:
      const { name, value } = action.payload
      return { ...state, filters: { ...state.filters, [name]: value } }

    case FILTER_PRODUCTS:
      console.log('placeHOLDER for "filter products"')
      return { ...state }

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          price: state.filters.max_price,
          free_shipping: false,
        },
      }
    default:
      throw new Error(`No such action '${action.type}' to dispatch`)
  }
}

export default reducer
