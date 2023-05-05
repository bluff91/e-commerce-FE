import './CSS/Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="page-100 error-page">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page cannot be found</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </section>
    </div>
  )
}

export default Error
