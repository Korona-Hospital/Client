import { Alert, IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"; 
import { Employee } from "../model";
import HomePage from "./HomePage";
import HomeIcon from '@mui/icons-material/Home';


const EditEmployee= (props:{array:Employee[],editEmployee:Function} ) => {
  let employees=props.array;
  const params=useParams();
  const id=params.id;
  const [s,setS]=useState<Employee>(
    employees.find((s)=>s.id===id) as Employee
);

    const navigate=useNavigate();
    const editemployee=props.editEmployee;
  
return(   
    <>   
<h1>edit</h1>

<form className="input"
onSubmit={(e) => {
  e.preventDefault();
  debugger
  editemployee(id,s);
}}
>
 <input
   type="text"
   placeholder="full name"
   defaultValue={s.fullName}
   onChange={(e) => setS({...s,fullName:e.target.value})}

   className="input__box"  
 />
   <input
   type="text"
   placeholder="ts"
    defaultValue={s.ts}
    onChange={(e) =>setS({...s,ts:e.target.value})}
   className="input__box"
 />
   <input
   type="text"
   placeholder="mobile phone"
   defaultValue={s.mobilePhone}
   onChange={(e) => setS({...s,mobilePhone:e.target.value})}
   className="input__box"
 />
   <input
   type="text"
   placeholder="phone"
   defaultValue={s.phone}
   onChange={(e) =>setS({...s,phone:e.target.value})}
   className="input__box"
   />
   <input
   type="text"
   placeholder="street"
   defaultValue={s.street}
   onChange={(e) => setS({...s,street:e.target.value})}
   className="input__box"
 />
 <input
   type="number"
   placeholder="house number"
   defaultValue={s.houseNumber}
   onChange={(e) => setS({...s,houseNumber:e.target.valueAsNumber})}

   className="input__box"  
 />
 <input
   type="text"
   placeholder="title"
   defaultValue={s.city}
   onChange={(e) => setS({...s,city:e.target.value})}

   className="input__box"  
 />
 <input
   type="text"
   placeholder="birth date"
   defaultValue={s.bornDate}
   onChange={(e) => setS({...s,bornDate:e.target.value})}

   className="input__box"  
 />
 <button type="submit" className="price"> Edit</button>
</form>
<IconButton  color="inherit" aria-label="upload picture" component="label">
<input hidden  />
<HomeIcon sx={{ fontSize: 40 }}onClick={()=> { navigate('/') }}/>
</IconButton >
</>
    )
}
export default EditEmployee;


