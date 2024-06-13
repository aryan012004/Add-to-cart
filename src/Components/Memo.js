import { useState } from "react";

function Memo()
{
    let [CountOne,setCountOne]= useState(0)
    let [CountTow,setCountTow]= useState(0)

    let IncreamentOne = ()=>({
            
    
            
    })
    return(
        <div>
            <button onClick={()=>  IncreamentOne()}>Increament{CountOne}</button>

        </div>
    )
}
export default Memo;