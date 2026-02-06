import { useEffect, useState } from "react";




const First=()=>{

    const [count,setCount]=useState(0);
    const [name,setName]=useState("")
      
    useEffect(()=>{
        console.log("component re-render")
    },[name])

    return(
        <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default First;