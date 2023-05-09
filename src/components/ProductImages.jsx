import './CSS/ProductImages.css'
import { useState } from 'react'

const ProductImages = ({ images = [] }) => {
  const [image, setImage] = useState(images[0])

  if (!image) {
    return
  }

  return (
    <div className="product-images">
      <img className="main-picture" src={image.url} alt="main" />
      <div className="small-pictures">
        {images.map((img, index) => {
          const { id, url, filename } = img
          return (
            <img
              key={id}
              src={url}
              alt={filename}
              onClick={() => setImage(images[index])}
              className={url === image.url ? 'active' : ''}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductImages
