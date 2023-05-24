/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'
import { FaCheck } from 'react-icons/fa'
import { useFiltersContext } from '../context/filters_context'
import { formatPrice, getUniqueValues } from '../utils/helpers'
import './CSS/Filters.css'

const Filters = () => {
  const {
    all_products,
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      free_shipping,
    },
    updateFilters,
    clearFilters,
  } = useFiltersContext()

  const companyArr = useCallback(getUniqueValues(all_products, 'company'), [
    all_products,
  ])
  const categoryArr = useCallback(getUniqueValues(all_products, 'category'), [
    all_products,
  ])
  const colorArr = useCallback(getUniqueValues(all_products, 'colors'), [
    all_products,
  ])

  return (
    <div className="filters-container">
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              name="text"
              value={text}
              onChange={updateFilters}
              type="text"
              className="search-filter"
              placeholder="Search"
            />
          </div>
          {/* end of search input */}

          {/* categories list */}
          <div className="form-control">
            <h5>Category:</h5>
            <div className="categories-fitler">
              {categoryArr.map((item, index) => {
                return (
                  <button
                    type="text"
                    id="category"
                    name="category"
                    value={item}
                    key={index}
                    onClick={updateFilters}
                    className={`${
                      category === item.toLowerCase() ? 'active' : null
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of categories list */}

          {/* companies list */}
          <div className="form-control">
            <h5>Company</h5>
            <select
              className="company-filters"
              name="company"
              onChange={updateFilters}
              value={company}
            >
              {companyArr.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* end of companies list */}

          {/* colors list */}
          <div className="form-control">
            <h5>Colors:</h5>
            <div className="colors-filter">
              {colorArr.map((item, index) => {
                if (item === 'all') {
                  return (
                    <button
                      key={item}
                      name="color"
                      value={item}
                      onClick={updateFilters}
                      className={`all-colors-button ${
                        color === item ? 'active' : null
                      }`}
                    >
                      {item}
                    </button>
                  )
                } else {
                  return (
                    <button
                      style={{
                        backgroundColor: item,
                        borderRadius: '50%',
                        opacity: 0.5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      className={`all-colors-button ${
                        color === item ? 'active' : null
                      }`}
                      key={index}
                      name="color"
                      value={item}
                      onClick={updateFilters}
                    >
                      {color === item ? (
                        <FaCheck className="colors-icon" />
                      ) : null}
                    </button>
                  )
                }
              })}
            </div>
          </div>
          {/* end of colors list */}

          {/* price range selector */}
          <div className="form-control">
            <div className="categories-fitler">
              <h5>Price: </h5>
              <p>{formatPrice(price)}</p>
              <input
                name="price"
                type="range"
                id="price-selector"
                min={min_price}
                max={max_price}
                value={price}
                onChange={updateFilters}
              />
            </div>
          </div>
          {/* end of price range selector */}

          {/* start of shipping */}
          <div className="form-control">
            <div className="free-shipping">
              <label htmlFor="free-shipping">Free Shipping: </label>
              <input
                type="checkbox"
                name="free_shipping"
                onChange={updateFilters}
                id="free-shipping"
                checked={free_shipping}
              />
            </div>
          </div>
          {/* end of shipping */}
        </form>
        <button className="clear-filters-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </div>
  )
}

export default Filters
