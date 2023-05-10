import { LOAD_PRODUCTS } from '../utils/actions'

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
      }

    default:
      throw new Error(`No such action '${action.type}' to dispatch`)
  }
}

export default reducer
