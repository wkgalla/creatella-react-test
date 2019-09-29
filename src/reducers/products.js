import { combineReducers } from 'redux'
import {SET_PRODUCTS} from '../actions/products'

const products = (state = [], action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return action.productsArray
      default:
        return state
    }
}

const productReducer = combineReducers({
    products
  })
  
  export default productReducer