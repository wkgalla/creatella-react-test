import { combineReducers } from 'redux'
import {
  SET_PRODUCTS,
  SET_NEXT_PRODUCTS,
  SET_FETCHING,
  LOAD_MORE_PRODUCTS,
  PRODUCTS_LOADED_FROM_STORE,
  SET_SORT_VALUE,
  SET_NO_MORE_PRODUCTS
} from '../actions/products'

const products = (state = [], action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return [...state, ...action.productsArray]
      case SET_SORT_VALUE:
        return []
      default:
        return state
    }
}

const nextProducts = (state = [], action) => {
  switch (action.type) {
    case SET_NEXT_PRODUCTS:
      return action.productsArray
    case PRODUCTS_LOADED_FROM_STORE:
      return []
    default:
      return state
  }
}

const isFetching = (state = true, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return action.isFetching
    default:
      return state
  }
}

const loadMoreProducts = (state = false, action) => {
  switch (action.type) {
    case LOAD_MORE_PRODUCTS:
      return true;
    case PRODUCTS_LOADED_FROM_STORE:
      return false;
    default:
      return state
  }
}

const sortValue = (state = '', action) => {
  switch (action.type) {
    case SET_SORT_VALUE:
      return action.value
    default:
      return state
  }
}

const noMoreProducts = (state = false, action) => {
  switch (action.type) {
    case SET_NO_MORE_PRODUCTS:
      return true;
    case SET_SORT_VALUE:
      return false
    default:
      return state
  }
}

const productReducer = combineReducers({
    products,
    nextProducts,
    isFetching,
    loadMoreProducts,
    sortValue,
    noMoreProducts
})
  
export default productReducer