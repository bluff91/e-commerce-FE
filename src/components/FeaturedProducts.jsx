import styled from 'styled-components'
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

  console.log('featured', featured)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className="featured-products">
      <div className="section">
        <div className="title">
          <h2>Featured products</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center featured">
          {featured
            .map((product) => <Product key={product.id} {...product} />)
            .sort(() => Math.random() - 0.5)
            .splice(0, 3)}
        </div>
        <Link className="featured-btn btn">All Products</Link>
      </div>
    </div>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`
export default FeaturedProducts
