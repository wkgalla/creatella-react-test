import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Products Grid</h1>

        <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

        <p>But first, a word from our sponsors:</p>
        <img class="ad" src="/api/ads/?r=2"/>
      </header>

      <section class="products">
          ... products go here ...
      </section>
    </div>
  );
}

export default App;
