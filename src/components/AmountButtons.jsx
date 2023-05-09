import { FaPlus, FaMinus } from 'react-icons/fa'
import './CSS/AmountButtons.css'

const AmountButtons = ({ amount, toggleAmount }) => {
  return (
    <div className="amount-buttons-container">
      <button onClick={() => toggleAmount('dec')}>
        <FaMinus />
      </button>
      <h2>{amount}</h2>
      <button onClick={() => toggleAmount('inc')}>
        <FaPlus />
      </button>
    </div>
  )
}

export default AmountButtons
