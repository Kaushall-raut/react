import { useContext } from "react"
import { Data } from "../context/ContextApi"

export const Home=()=>{

    const {name}=useContext(Data);

    return <>
    <h1>This is home page of {name}</h1>
    </>
}