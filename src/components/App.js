import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import Search from "./Search";

function App() {
  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then(setPlantList);
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage 
        plantList={plantList}
      />
    </div>
  );
}

export default App;
