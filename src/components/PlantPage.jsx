import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  
  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch("http://localhost:6001/plants");
      const data = await response.json();
      setPlants(data);
    };

    fetchPlants();
  }, []);

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
