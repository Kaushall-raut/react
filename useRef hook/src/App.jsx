import './App.css';
import { useRef } from "react";

export const App = () => {
const user=useRef(null);
const pass=useRef(null);


const handleSubmit=(e)=>{
  e.preventDefault();
  
  console.log("Name: ",user.current.value,"Password",pass.current.value);

}
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">UserName</label>
      <input type="text" name="userName" id="user"  ref={user}/>
      <label htmlFor="pass">Password</label>
      <input type="password" name="password" id="pass" ref={pass}/>
      <button>submit</button>
    </form>
  );
};

//uncontrolled from where react does not have any access to its elements value
