export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_FETCHING = 'SET_FETCHING';

const setProductList = (productsArray) => ({
    type: SET_PRODUCTS,
    productsArray
})

const setProductFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching
})

export const asyncFetchProducts = () => async (dispatch, getState) => {
  const { isFetching, products } = getState();
  if(isFetching) {
    return;
  }
  dispatch(setProductFetching(true));
  const page = products.length / 10 + 1;
  const res = await fetch(`/api/products?_page=${page}&_limit=10`);
  const productsList = await res.json();
  dispatch(setProductList(productsList));
  dispatch(setProductFetching(false));
}