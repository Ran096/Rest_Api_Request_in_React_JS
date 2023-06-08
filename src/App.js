import "./styles.css";
import React, { useState, useEffect } from "react";

import axios from "axios";

export default function App() {
  const [Name, setName] = useState("");
  const [user, setUser] = useState([]);
  const getName = (e) => {
    setName(e.target.value);
  };
  // post request
  const dataPost = () => {
    axios
      .post("https://64816ae529fa1c5c50315a7a.mockapi.io/users", {
        name: Name,
        age: 26,
        Number: "7999875804",
        Address: ["MP", "Bargi", "Jabalpul", "Jai Shri Ram"],
        email: "ranjeetpatel094@gmail.com"
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };
  //put request
  const updateData = (id) => {
    axios
      .put(`https://64816ae529fa1c5c50315a7a.mockapi.io/users/${id}`, {
        name: Name,
        age: 30,
        Address: "Jabalpur"
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };
  const DeleteData = (id) => {
    axios
      .delete(`https://64816ae529fa1c5c50315a7a.mockapi.io/users/${id}`, {
        name: Name,
        age: 30,
        Address: "Jabalpur"
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };
  useEffect(() => {
    //get request
    axios
      .get("https://64816ae529fa1c5c50315a7a.mockapi.io/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  }, []);
  return (
    <div className="App">
      <input placeholder="enter name" onChange={getName} />
      <button onClick={dataPost}>Post Data</button>
      {user.map((users, index) => (
        <div key={index}>
          <h1>{`${users.id}. ${users.name}`}</h1>
          <p>{users.age}</p>
          <p>{users.Number}</p>
          <p>{users.email}</p>
          <p>{users.Address}</p>
          <button onClick={() => updateData(users.id)}> UPDATE </button>
          <button onClick={() => DeleteData(users.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
