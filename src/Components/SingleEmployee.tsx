import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Employee } from "../model";
import EditSong from "../Pages/EditEmployee";
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import { Button, IconButton, TableBody, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { PhotoCamera } from "@mui/icons-material";

interface Props{
    employee:Employee;
    employees:Employee[];
    deleteEmployee:Function;
    setSongs:React.Dispatch<React.SetStateAction<Employee[]>>;
}

const SingleEmployee=({employee,employees,deleteEmployee,setSongs}:Props)=>
{const songDetails=([employee.fullName,employee.ts,employee.mobilePhone,employee.phone,employee.street,employee.houseNumber,employee.city,employee.bornDate]);
   const showMore=(e:any,employee:Employee)=>{
   alert( employee.detailsCoronaVirus.manufacturerVaccineA);
   navigate(`/ShowMoreDetails/${employee.id}`)
   }
    const navigate=useNavigate();
    return(
        <TableBody>
            {
                <TableRow key={employee.fullName} sx={{'&:last-child th':{border:0}}} className="TableRow">
                  {songDetails.map((i:any,index)=>{
                    return(
                        <TableCell align="center" key={index}>{i}</TableCell>
                    )
                  })}
              <IconButton  color="inherit" aria-label="upload picture" component="label">
            <input hidden  />
             <ExpandMoreOutlinedIcon onClick={()=>{navigate(`/ShowMoreDetails/${employee.id}`);}}/>
            </IconButton >     
            <IconButton  color="inherit" aria-label="upload picture" component="label">
            <input hidden  />
            <DeleteIcon onClick={(e)=>deleteEmployee(e,employee)} />      
            </IconButton >
            <IconButton  color="inherit" aria-label="upload picture" component="label">
            <input hidden  />
            <ModeEditOutlineTwoToneIcon onClick={()=> { navigate(`/EditEmployee/${employee.id}`); }}/>
            </IconButton >      
            <IconButton  color="error" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
            </IconButton>
                </TableRow>
            }
        </TableBody>
    )       
    
}
 
export default SingleEmployee;
