import { useState } from "react"
import './App.css';


export const App=()=>{

  const [data,setData]=useState({
    userName:"",
    password:""
  });


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(data);
  }

  const handleInput=(e)=>{
    const {name,value}=e.target;
setData((previous)=>({...previous,[name]:value}))    ;
  }
  
  return <form onSubmit={handleSubmit}>

    <h1>Sign in</h1>
  <section>
    <div>
    <label htmlFor="name">UserName</label>
    <input type="text" name="userName" id="name"  value={data.userName} onChange={handleInput}/>

    </div>
<div>
    <label htmlFor="pass">Password</label>
    <input type="password" name="password" id="pass" value={data.password} onChange={handleInput} />

</div>
<button type="submit">submit</button>
  </section>
  </form>



}