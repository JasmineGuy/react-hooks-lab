import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Display from "./Display";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((res) => {
      setList(res.data.results);
    });
  }, []);
  return (
    <div className="App">
      {list.map((item, index) => {
        return <Display name={item.name} key={index} />;
      })}
    </div>
  );
}

export default App;
