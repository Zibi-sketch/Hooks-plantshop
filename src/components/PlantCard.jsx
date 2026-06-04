import React, { useState } from "react";

function PlantCard({ plant }) {
  // Local state for the toggle button
  const [inStock, setInStock] = useState(true);
  
  // Destructuring for cleaner JSX
  const { name, image, price } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      
      {/* Conditional rendering for the button */}
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => setInStock(true)}>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;