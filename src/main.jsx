import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductsProvider } from './context/products_context'
import { FiltersProvider } from './context/filters_context'
import { CartProvider } from './context/cart_context.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
//dev-m4rolx1xrlxkrl7q.eu.auth0.com
//CJ9ZzdQ9-MTLcg4fuxhAtVSsz1tr5zXGBPTvaEAA5bwzLraWfrBg9NehjXplahW-

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENTID}
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ProductsProvider>
        <FiltersProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FiltersProvider>
      </ProductsProvider>
    </Auth0Provider>
  </React.StrictMode>
)
