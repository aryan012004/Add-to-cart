
import React, { useContext } from "react";
import { createContext } from "react";
import { datacontexts } from "../App";

function F()

{
    let data = useContext(datacontexts)
    return(
        <div>
            <h1>Name:{data.name}</h1>
            <h1>Age:{data.Age}</h1>
            <h1>Cousre:{data.Course}</h1>
            
        </div>
    )
}
export default F; 