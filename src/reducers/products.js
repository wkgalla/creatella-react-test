import { combineReducers } from 'redux'
import {SET_PRODUCTS, SET_FETCHING} from '../actions/products'

const products = (state = [], action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return [...state, ...action.productsArray]
      default:
        return state
    }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return action.isFetching
    default:
      return state
  }
}

const productReducer = combineReducers({
    products,
    isFetching
  })
  
  export default productReducer