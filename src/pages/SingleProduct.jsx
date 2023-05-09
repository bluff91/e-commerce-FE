import './CSS/SingleProduct.css'
import { useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  PageHero,
  ProductImages,
  Stars,
  AddToCart,
} from '../components'

const SingleProduct = () => {
  const navigate = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    fetchSingleProduct,
    single_product_data,
  } = useProductsContext()

  const { id } = useParams()
  const url = single_product_url + id

  useEffect(() => {
    fetchSingleProduct(url)
  }, [url])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [error])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const {
    category,
    colors,
    company,
    description,
    id: product_id,
    images,
    name,
    price,
    reviews,
    stars,
    stock,
  } = single_product_data

  return (
    <div className="single-product">
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          Back to products
        </Link>
        <div className="single-product-center">
          <ProductImages images={images} />
          <section className="single-product-content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available: </span>
              {stock > 0 ? 'In stock' : 'Out of Stock'}
            </p>
            <p className="info">
              <span>Product Id: </span>
              {product_id}
            </p>
            <p className="info">
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart {...single_product_data} />}
          </section>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
