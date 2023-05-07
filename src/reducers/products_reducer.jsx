import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../utils/actions'

const productsReducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, isSidebarOpen: true }

    case CLOSE_SIDEBAR:
      return { ...state, isSidebarOpen: false }

    case GET_PRODUCTS_BEGIN:
      return { ...state, product_loading: true }

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        featured_products: action.payload.filter(
          (item) => item.featured === true
        ),
        product_loading: false,
      }

    case GET_PRODUCTS_ERROR:
      return { ...state, product_loading: false, product_error: true }

    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_error: false,
        single_product_loading: true,
      }

    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product_data: action.payload,
        single_product_loading: false,
      }

    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_error: true,
        single_product_loading: false,
      }

    default:
      throw new Error(`NO SUCH ACTION: ${action.type} to dispatch`)
  }
}

export default productsReducer
