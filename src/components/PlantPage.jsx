import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch("http://localhost:6001/plants");
      const data = await response.json();
      setPlants(data);
    };

    fetchPlants();
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((currentPlants) => [...currentPlants, newPlant]);
  }

  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
