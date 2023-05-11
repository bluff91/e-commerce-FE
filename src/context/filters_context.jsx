import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/filters_reducer'
import { useProductsContext } from '../context/products_context'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
} from '../utils/actions'
import { formatPrice } from '../utils/helpers'

const FiltersContext = createContext()

const useFiltersContext = () => {
  return useContext(FiltersContext)
}

const FiltersProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, {
    products_loading: true,
    filtered_products: [],
    all_products: [],
    grid_view: true,
    filters: {
      text: '',
      company: 'all',
      category: 'all',
      color: 'all',
      min_price: 0,
      max_price: 0,
      price: 0,
      free_shipping: false,
    },
  })

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    updateSort('price-lowest')
  }, [products])
  console.log(formatPrice(state.filters.max_price))
  const gridViewOn = () => {
    dispatch({ type: SET_GRIDVIEW })
  }

  const listViewOn = () => {
    dispatch({ type: SET_LISTVIEW })
  }

  const updateSort = (value) => {
    dispatch({ type: SORT_PRODUCTS, payload: value })
  }

  return (
    <FiltersContext.Provider
      value={{ ...state, gridViewOn, listViewOn, updateSort }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export { useFiltersContext, FiltersProvider }
