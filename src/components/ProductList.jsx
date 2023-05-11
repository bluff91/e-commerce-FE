import { ListView, GridView } from '../components'
import { useFiltersContext } from '../context/filters_context'

const ProductList = () => {
  const {
    filtered_products: products,
    grid_view,
    products_loading,
  } = useFiltersContext()

  if (products.length < 1 && products_loading) {
    return <h5>Sorry, No Products matched your search...</h5>
  }

  if (grid_view === false) {
    return (
      <div>
        <ListView products={products} />
      </div>
    )
  }
  return (
    <div>
      <GridView products={products} />
    </div>
  )
}
export default ProductList
