import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantList }) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList 
        plants={plantList}
      />
    </main>
  );
}

export default PlantPage;
