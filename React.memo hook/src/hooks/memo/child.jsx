import { memo, useRef } from "react"

export const Child=memo(()=>{
  const Ref=useRef(0);
  console.log(Ref.current);
  
    return <>
    
        <h2>Child components rendered <span>{Ref.current++}</span> times</h2>
    </>
})