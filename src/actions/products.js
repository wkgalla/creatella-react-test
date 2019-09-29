export const SET_PRODUCTS = 'SET_PRODUCTS';

const setProductList = (productsArray) => ({
    type: SET_PRODUCTS,
    productsArray
})

export const asyncFetchProducts = () => async dispatch => {
  const res = await fetch('/api/products?_page=0&_limit=10');
  const products = await res.json();
  console.log(products)
  dispatch(setProductList(products));
}