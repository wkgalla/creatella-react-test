export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_NEXT_PRODUCTS = 'SET_NEXT_PRODUCTS';
export const SET_FETCHING = 'SET_FETCHING';
export const LOAD_MORE_PRODUCTS = 'LOAD_MORE_PRODUCTS';
export const PRODUCTS_LOADED_FROM_STORE = 'PRODUCTS_LOADED_FROM_STORE';
export const SET_SORT_VALUE = 'SET_SORT_VALUE';
export const SET_NO_MORE_PRODUCTS = 'SET_NO_MORE_PRODUCTS';

const PAGE_LIMIT = 10;

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

export const setSortValue = (value) => ({
  type: SET_SORT_VALUE,
  value: value
})

const setNoMoreProducts = () => ({
  type: SET_NO_MORE_PRODUCTS
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
  const { products, sortValue, noMoreProducts } = getState();
  if(noMoreProducts) {
    return
  }
  const sortQueryParam = sortValue ? `&_sort=${sortValue}` : '';
  const page = products.length / PAGE_LIMIT + 1;
  dispatch(setProductFetching(true));
  const res = await fetch(`/api/products?_page=${page}&_limit=${PAGE_LIMIT}${sortQueryParam}`);
  const productsList = await res.json();
  dispatch(setProductFetching(false));
  dispatch(setNextProducts(productsList));
  if (productsList.length < PAGE_LIMIT) {
    dispatch(setNoMoreProducts())
  }
}

export const changeSortOption = (value) => dispatch => {
  dispatch(setSortValue(value));
  dispatch(asyncFetchProducts());
}