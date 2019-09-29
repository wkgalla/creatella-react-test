import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import productReducer from './reducers/products'

const configureStore = (preloadedState) => {
  return createStore(
    productReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )
}

export default configureStore;