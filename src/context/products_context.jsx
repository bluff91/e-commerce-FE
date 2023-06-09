import { useContext, createContext, useReducer, useEffect } from 'react'
import productsReducer from '../reducers/products_reducer'
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
import { products_url } from '../utils/constants'
import axios from 'axios'

//Remark:
// products context is used to open / close sidebar just to not
// create a separate context and reducer just for this purpose

const ProductsContext = createContext()

const useProductsContext = () => {
  return useContext(ProductsContext)
}

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, {
    isSidebarOpen: false,
    product_loading: false,
    product_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product_data: {},
  })

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const { data } = await axios.get(url)
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error })
      console.log(error)
    }
  }

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const { data } = await axios.get(url)
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts(products_url)
  }, [])

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR })
  }

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR })
  }

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export { useProductsContext, ProductsProvider }
