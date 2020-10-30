import React, { useState, useContext } from "react";
import PostContext from "../contexts/PostContext";
import axios from "axios";

const PostSmurfs = (props) => {
  //   console.log("props.data from PostSmurfs: ", smurf);

  const { smurf, setSmurf } = useContext(PostContext);
  console.log("This is smurf", smurf);

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(() => {
        setSmurf({
          name: "",
          age: "",
          height: "",
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const changeHandler = (event) => {
    setSmurf({
      ...smurf,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <p> Name: </p>
        <input
          type="text"
          placeholder="Make a Smurfs"
          name="name"
          value={smurf.name}
          onChange={changeHandler}
        />
        <p> Age: </p>
        <input
          type="text"
          placeholder="Make a Smurfs"
          name="age"
          value={smurf.age}
          onChange={changeHandler}
        />
        <p> Height: </p>
        <input
          type="text"
          placeholder="Make a Smurfs"
          name="height"
          value={smurf.height}
          onChange={changeHandler}
        />
        <button type="submit"> Click </button>
      </form>
    </div>
  );
};

export default PostSmurfs;
