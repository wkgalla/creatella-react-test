export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_NEXT_PRODUCTS = 'SET_NEXT_PRODUCTS';
export const SET_FETCHING = 'SET_FETCHING';
export const LOAD_MORE_PRODUCTS = 'LOAD_MORE_PRODUCTS';
export const PRODUCTS_LOADED_FROM_STORE = 'PRODUCTS_LOADED_FROM_STORE';

const setProductList = (productsArray) => ({
    type: SET_PRODUCTS,
    productsArray
})

const setNextProducts = (productsArray) => ({
  type: SET_NEXT_PRODUCTS,
  productsArray
})

const setProductFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching
})

export const loadProducts = () => ({
  type: LOAD_MORE_PRODUCTS
})

const finishMovingProductsToList = () => ({
  type: PRODUCTS_LOADED_FROM_STORE
})

export const moveFetchedProductsToList = () => (dispatch, getState) => {
  const { nextProducts } = getState();
  if(nextProducts.length > 0) {
    dispatch(setProductList(nextProducts));
    dispatch(finishMovingProductsToList());
    dispatch(asyncFetchProducts());
  }
}

export const asyncFetchProducts = () => async (dispatch, getState) => {
  const { products } = getState();
  const page = products.length / 10 + 1;
  dispatch(setProductFetching(true));
  const res = await fetch(`/api/products?_page=${page}&_limit=10`);
  const productsList = await res.json();
  dispatch(setProductFetching(false));
  dispatch(setNextProducts(productsList));
}