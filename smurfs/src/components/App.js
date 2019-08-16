import React, { useState } from "react";
import "./App.css";
import GetSmurfs from "../components/GetSmurfs.js"; 
import GetContext from "../contexts/GetContext.js"; 


 function App() {

const [getSmurfs, setGetSmurfs] = useState([]); 
console.log(getSmurfs)
const [postSmurfs, setPostSmurfs] = useState([]);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <div>
          <GetContext.Provider  value={{getSmurfs}}> 
            <GetSmurfs setGetSmurfs={setGetSmurfs}/> 
          </GetContext.Provider>
        </div> 
      </div>
    );
}

export default App;
