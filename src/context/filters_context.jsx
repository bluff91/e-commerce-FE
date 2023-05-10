import { createContext, useContext, useReducer, useEffect } from 'react'
import reducer from '../reducers/filters_reducer'
import { useProductsContext } from '../context/products_context'
import { LOAD_PRODUCTS } from '../utils/actions'

const FiltersContext = createContext()

const useFiltersContext = () => {
  return useContext(FiltersContext)
}

const FiltersProvider = ({ children }) => {
  const { products } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, {
    filtered_products: [],
    all_products: [],
    grid_view: false,
  })

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  return (
    <FiltersContext.Provider value={{ ...state }}>
      {children}
    </FiltersContext.Provider>
  )
}

export { useFiltersContext, FiltersProvider }
