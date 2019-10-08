import React from 'react';
import ProductsGrid from './containers/ProductsGrid'
import LoadingStatus from './containers/LoadingStatus'
import SortDropdown from './containers/SortDropdown';
import './App.css'
const App = () => {
  return (
    <div className="pr-App">
      <header className="App-header">
        <h1>Products Grid</h1>

        <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

        {/* <p>But first, a word from our sponsors:</p>
        <img className="ad" alt="" src="/api/ads/?r=2"/> */}
      </header>

      <section className="products">
          <SortDropdown/>
          <ProductsGrid/>
          <LoadingStatus/>
      </section>
    </div>
  );
}

export default App;
