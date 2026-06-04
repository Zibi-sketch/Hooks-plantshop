import React, { useState } from "react";

// Make sure to destructure the prop we passed down from PlantPage!
function NewPlantForm({ onAddPlant }) {
  // 1. Set up local state for each input field
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // 2. Handle the form submission
  function handleSubmit(e) {
    e.preventDefault();
    
    // Create the object to send to the backend
    const plantData = {
      name: name,
      image: image,
      price: parseFloat(price) // Codegrade usually expects price as a number
    };

    // 3. Make the POST request
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((r) => r.json())
      .then((newPlant) => {
        // Pass the new plant back up to PlantPage to update the main state
        onAddPlant(newPlant);
        
        // Optional but good practice: Clear the form inputs after submitting
        setName("");
        setImage("");
        setPrice("");
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* Attach the submit handler to the form itself */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={name} // Tie the input value to state
          onChange={(e) => setName(e.target.value)} // Update state on every keystroke
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;