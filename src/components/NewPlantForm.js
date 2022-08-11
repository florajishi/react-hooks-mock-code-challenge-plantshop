import React, { useState } from "react";

function NewPlantForm() {
  const [plantForm, setPlantFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(e){
    setPlantFormData(prevFormData => {
      return({
        ...prevFormData,
        [e.target.name]:e.target.value
      })
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plantForm)
    })
    .then(r => r.json())
    .then(newPlant => console.log(newPlant))
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button onSubmit={handleSubmit} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
