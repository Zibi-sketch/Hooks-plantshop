import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // 1. Setup State
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Fetch initial data on load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  // 3. Callback to add a new plant from the form
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // 4. Filter logic based on search term
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;