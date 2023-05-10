import { PageHero, Filters, Sort, ProductList } from '../components'
import { useFiltersContext } from '../context/filters_context'
import './CSS/Products.css'

const Products = () => {
  const data = useFiltersContext()
  console.log('data from products', data)
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
