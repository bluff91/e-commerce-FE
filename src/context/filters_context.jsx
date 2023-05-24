import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/filters_reducer'
import { useProductsContext } from '../context/products_context'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
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

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS, payload: state.filters })
  }, [state.filters])

  const gridViewOn = () => {
    dispatch({ type: SET_GRIDVIEW })
  }

  const listViewOn = () => {
    dispatch({ type: SET_LISTVIEW })
  }

  const updateSort = (value) => {
    dispatch({ type: SORT_PRODUCTS, payload: value })
  }

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'free_shipping') {
      value = e.target.checked
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  return (
    <FiltersContext.Provider
      value={{
        ...state,
        gridViewOn,
        listViewOn,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export { useFiltersContext, FiltersProvider }
