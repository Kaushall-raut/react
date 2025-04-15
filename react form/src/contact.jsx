import { useState } from "react";
import "./contact.css";

export const Contact=()=>{

    const [data,setData]=useState({
        name:"",
        email:"",
city:"",
message:""
    })


    const handleSubmit=(e)=>{
e.preventDefault();
console.log(data);
    }


    const handleInput=(e)=>{
        const {name,value}=e.target;

        setData((prev)=>({...prev,[name]:value}))
    }

    return <form action="#" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
        <label htmlFor="name">Name</label>
        <input type="text"  name="name"  id="name" onChange={handleInput}/>

        <label htmlFor="email">Email</label>
        <input type="email"  name="email"  id="email" onChange={handleInput}/>

<label htmlFor="city">Select city</label>
    <select name="city" id="city" onChange={handleInput}>
        <option value="vapi" name="city">Vapi</option>
        <option value="naroli" name="city">naroli</option>
        <option value="bhilad" name="city">bhilad</option>
    </select>

        <label htmlFor="message">Message</label>
        <textarea type="text"  name="message"  id="message" rows={5} onChange={handleInput}/>
        <button>submit</button>
    </form>
}