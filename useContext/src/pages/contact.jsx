import { useContext } from "react"
import { Data } from "../context/ContextApi"

export const Contact=()=>{

    const {name,last}=useContext(Data);
    return <h1>Contact {name} , {last} for any query</h1>
}