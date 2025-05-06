import { useContext } from "react";
import { ContextData } from "../context/ContextApi";
import { Button, TextField } from "@mui/material";

export const MainComponent = () => {
  const apiData = useContext(ContextData);
  console.log(apiData);
  return (
    <>
      <main className="bg-slate-700 h-screen flex justify-center items-center flex-col  ">
        <div  >
        <input type="text" placeholder="Primary" className="input input-primary" />
          <TextField id="outlined-basic" label="Outlined" variant="filled"  color="success"/>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{margin:"0rem 1rem"}} />
          <Button variant="contained" size="large">
            Primary
          </Button>
        </div>
        <ul>
          <div className="grid grid-cols-3 gap-5  border border-blue-700  p-6 m-10">
            <li>
              <div>kaushal</div>
            </li>
            <li>
              <div>kaushal</div>
            </li>
            <li>
              <div>kaushal</div>
            </li>
            <li>
              <div>kaushal</div>
            </li>

            <li>
              <div>kaushal</div>
            </li>
            <li>
              <div>kaushal</div>
            </li>
            <li>
              <div>kaushal</div>
            </li>
            <li>
              <div>kaushal</div>
            </li>
          </div>
        </ul>
      </main>
    </>
  );
};
