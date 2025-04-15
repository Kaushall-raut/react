import { useState } from 'react';
import './Signup.css';
export const SignUp = ()=>{

    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        password:"",
        email:"",
        contact:"",
        gender:""
    })

    const handleSubmit=(e)=>{
e.preventDefault();

console.log(data);
    }

    const handleInput=(e)=>{
        const {name,value}=e.target;

        setData((prev)=>({...prev,[name]:value}));
    }


    // this is uncontrolled form where react does not know what kind of value input tag have 

    // to make it controlled just passed value in the value attribute 
    return <form onSubmit={handleSubmit} >

    
        <h1>SignUp</h1>
    
            <label htmlFor="firstName">FirstName</label>
            <input type="text" name="firstName" id="firstName" onChange={handleInput} value={data.firstName}/>
        
    
            <label htmlFor="lastName">lastName</label>
            <input type="text" name="lastName" id="lastName" onChange={handleInput} />

            <label htmlFor="male">male</label>
            <input type="radio" id='male' name='gender' value="male" onClick={handleInput}/>
            <label htmlFor="female">female</label>
            <input type="radio" id='female'name='gender' value="female" onClick={handleInput}/>
         
         
    
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleInput} />
        
    
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleInput} />
        
    
            <label htmlFor="Contact">Contact No.</label>
            <input type="number" name="contact" id="Contact" onChange={handleInput}/>
        
        <button>Submit </button>

    </form>
}