import { Link } from 'react-router-dom'
import { Error, Loading, Product } from './index'
import './CSS/FeaturedProducts.css'
import { useProductsContext } from '../context/products_context'

const FeaturedProducts = () => {
  const {
    featured_products: featured,
    product_loading: loading,
    product_error: error,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className="section featured-products">
      <div className="title">
        <h2 className="featured-products-title">Featured products</h2>
        <div className="underline"></div>
      </div>

      <div className="featured">
        {featured
          .map((product) => <Product key={product.id} {...product} />)
          .sort(() => Math.random() - 0.5)
          .splice(0, 3)}
      </div>

      <Link className="featured-btn btn" to="/products">
        All products
      </Link>
    </div>
  )
}

export default FeaturedProducts
