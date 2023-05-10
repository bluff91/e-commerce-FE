import { Product } from '../components'
import './CSS/GridView.css'

const GridView = ({ products }) => {
  return (
    <div className="grid-view-container">
      <div className="products-container">
        {products.map((item) => {
          return <Product key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}
export default GridView
