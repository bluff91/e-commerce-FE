import { PageHero, Filters, Sort, ProductList, Loading } from '../components'
import { useFiltersContext } from '../context/filters_context'
import './CSS/Products.css'

const Products = () => {
  const { products_loading } = useFiltersContext()

  if (products_loading) {
    return <Loading />
  }
  return (
    <div className="products-container">
      <PageHero title="products" />
      <div className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Products
