import React, { useEffect, useState } from "react";

function PlantCard({
  plant: { id, name, image, price},
}) {

  const [inStock, setInStock] = useState(true)

  function onChangeStock(){
    setInStock(prev => !prev)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={onChangeStock} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
