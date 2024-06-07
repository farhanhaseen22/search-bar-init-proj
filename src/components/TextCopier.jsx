import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DynamicInputBars = () => {
  const [inputBars, setInputBars] = useState([]);

  const addInputBar = () => {
    const newInputBars = inputBars.slice(); // Create a copy of the original array
    // console.log(inputBars.length)
    newInputBars.push(inputBars.length); // Add the new input bar
    setInputBars(newInputBars); // Update the state with the new array
  };

  const removeInputBar = (indexToRemove) => {
    console.log(`"indexToRemove": ${indexToRemove}`);
    const updatedInputBars = [];
    for (let i = 0; i < inputBars.length; i++) {
      if (inputBars[i] !== indexToRemove) {
        updatedInputBars.push(inputBars[i]);
      }
    }
    // console.log("Rawf Case bruh")
    // for(let i = 0; i < updatedInputBars.length; i++){
    //   console.log(updatedInputBars[i])
    // }
    setInputBars(updatedInputBars);
  };

  return (
    <div>
      <h1>Making more Input Bars</h1>
      {/* Main Input Bar */}
      <input
        type="text"
        placeholder="Enter text here..."
        style={{
          width: "300px",
          height: "30px",
          marginBottom: "10px",
          marginRight: "10px",
        }}
      />

      {/* Add Button */}
      <button onClick={addInputBar} style={{ marginBottom: "10px" }}>
        Add Input Bar
      </button>

      {/* Rendered Input Bars */}
      {inputBars.map((index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder={`Input Bar ${index}`}
            style={{ width: "300px", height: "30px", marginRight: "10px" }}
          />
          <button
            onClick={() => removeInputBar(index)}
            style={{ padding: "5px" }}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default DynamicInputBars;
