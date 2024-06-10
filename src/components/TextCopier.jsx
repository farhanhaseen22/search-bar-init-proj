import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DynamicInputBars = () => {
  const [inputBars, setInputBars] = useState([]);
  //// users database/data structure to be CRUDed /////
  const [users, setUsers] = useState([
    { name: "Alice", phone: "123-456-7890" },
    { name: "Bob", phone: "987-654-3210" },
    { name: "Charlie", phone: "555-555-5555" },
    { name: "David", phone: "111-111-1111" },
    { name: "Eve", phone: "222-222-2222" },
    { name: "Frank", phone: "333-333-3333" },
    { name: "Grace", phone: "444-444-4444" },
    { name: "Hank", phone: "666-666-6666" },
    { name: "Ivy", phone: "777-777-7777" },
    { name: "Jack", phone: "888-888-8888" },
    { name: "Kate", phone: "999-999-9999" },
    { name: "Leo", phone: "000-000-0000" },
    { name: "Mia", phone: "123-123-1234" },
    { name: "Nick", phone: "321-321-4321" },
    { name: "Olivia", phone: "456-456-4567" },
  ]);
  /////////////////////////

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

      {/* New User Form */}
      <h2>Add New User</h2>
      <div>
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          placeholder="Enter name"
          style={{ width: "200px", height: "30px", marginRight: "10px" }}
        />
        <input
          type="text"
          value={newUser.phone}
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
          placeholder="Enter phone number"
          style={{ width: "200px", height: "30px", marginRight: "10px" }}
        />
        <button onClick={saveUserInfo} style={{ padding: "5px" }}>
          Save User
        </button>
      </div>
      {/* ========= */}
    </div>
  );
};

export default DynamicInputBars;
