import React, { useState, useEffect } from "react";
import GetContext from "../contexts/GetContext";
import axios from "axios";
import TheSmurfs from "./TheSumrfs.js";

const GetSmurfs = (props) => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    gettingSmurfs();
  });

  const gettingSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        setSmurfs(res.data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <div>
      {smurfs.map((item) => (
        <TheSmurfs
          key={item.id}
          name={item.name}
          age={item.age}
          height={item.height}
        />
      ))}
    </div>
  );
};

export default GetSmurfs;
