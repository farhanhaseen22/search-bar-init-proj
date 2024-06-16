import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const DynamicInputBars = () => {
  const [inputBars, setInputBars] = useState([]);
  const [mainInput, setMainInput] = useState("");
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


