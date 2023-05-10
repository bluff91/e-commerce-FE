import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductsProvider } from './context/products_context'
import { FiltersProvider } from './context/filters_context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </ProductsProvider>
  </React.StrictMode>
)
