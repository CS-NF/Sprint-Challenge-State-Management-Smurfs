import React, { useContext, useEffect } from "react"; 
import GetContext from "../contexts/GetContext";
import axios from "axios"; 

// export const GetObject = {
//   name: "Something", 
//   age: 25, 
//   height: 5.10, 
//   id: 1
// }

const GetSumrfs = () => {
    
    const { getSumrfs } = useContext(GetContext)

    useEffect(() => {
        axios 
        .get("http://localhost:3333")
        .then(item => {
           getSumrfs(item.data) 
        })
        .catch(error => {
            console.log("ERROR", error)
        })
    }, [])
}

export default GetSumrfs; 

