import React from 'react';
import FlipCardFunction from './FlipCardFunction';
import FlipCardClass from './FlipCardClass';
import kingOfHearts from './assets/king-of-hearts.jpg';
import cardBack from './assets/card-back.jpg';

function App() {
  return (
    <div className="App">
      <h1>Lật Thẻ Bài Tự Động</h1>
      <FlipCardFunction frontImage={kingOfHearts} backImage={cardBack} />
      <FlipCardClass frontImage={kingOfHearts} backImage={cardBack} />
    </div>
  );
}

export default App;
