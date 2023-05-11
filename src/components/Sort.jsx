import { BsFillGridFill, BsList } from 'react-icons/bs'
import './CSS/Sort.css'
import { useFiltersContext } from '../context/filters_context'

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    gridViewOn,
    listViewOn,
    sort,
    updateSort,
  } = useFiltersContext()

  return (
    <div className="sort-container">
      <div className="sort-btns-container">
        <button className={grid_view ? 'active' : null} onClick={gridViewOn}>
          <BsFillGridFill />
        </button>
        <button className={grid_view ? null : 'active'} onClick={listViewOn}>
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort By</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={(e) => updateSort(e.target.value)}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </div>
  )
}

export default Sort
