import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'
import './CSS/ListView.css'

const ListView = ({ products }) => {
  return (
    <div className="list-view-container">
      {products.map((item) => {
        const { id, image, name, price, description } = item
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                details
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ListView
