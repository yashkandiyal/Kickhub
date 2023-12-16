import React from "react";
import Data from './data';
import Cards from './Cardsss';

function Shop() {
  return (
    <>
      <div className="shoe-container">
        {Data.map(info => (
          <Cards
            key={info.id} // Ensure each product has a unique id
            imageSource={info.image}
            shoename={info.name}
            mrp={info.mrp}
            prod={info}
          />
        ))}
      </div>
    </>
  );
}

export default Shop;
