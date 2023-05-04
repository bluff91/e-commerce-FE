import {
  About,
  Home,
  Products,
  SingleProduct,
  Checkout,
  Cart,
  Error,
  PrivateRoute,
} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          {/* to be wrapped in PrivateRoute */}
          <Route path="/checkout" element={<Checkout />} />
          {/* to be wrapped in PrivateRoute */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
