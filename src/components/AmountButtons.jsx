import { FaPlus, FaMinus } from 'react-icons/fa'
import './CSS/AmountButtons.css'

const AmountButtons = ({ amount, toggleAmount, id }) => {
  return (
    <div className="amount-buttons-container">
      <button onClick={() => toggleAmount('dec', id)}>
        <FaMinus />
      </button>
      <h2>{amount}</h2>
      <button onClick={() => toggleAmount('inc', id)}>
        <FaPlus />
      </button>
    </div>
  )
}

export default AmountButtons
