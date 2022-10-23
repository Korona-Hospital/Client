
import '../Components/styles.css'
import { useLocation, useNavigate } from "react-router-dom";
import { Employee } from "../model";
import MySong from "../Components/SingleEmployee";
import datagrid from '@mui/x-data-grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { IconButton, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { PropaneSharp } from '@mui/icons-material';
import SingleEmployee from '../Components/SingleEmployee';


const HomePage=(props:{array:Employee[],deleteEmployee:Function,setArray: React.Dispatch<React.SetStateAction<Employee[]>>})=>{
  const  location=useLocation();
  const myLoction: any = location.state;
    const navigate = useNavigate();
    let employees=props.array;
    let setEmployees=props.setArray;
    

const onAdd=(e:any) => {
    e.preventDefault();
  
    navigate(`/AddEmployee`) 
  }

  
    return(
<>
  
  <TableContainer>
  <Table sx={{minWidth:250}} aria-label="simple table" className='table-ss'>
<TableHead>
  <TableRow>
    <TableCell sx={{color:'rgb(260,0,0)'}} align="center">FULL NAME</TableCell>
    <TableCell sx={{color:'rgb(260,0,0)'}} align="center">TZ</TableCell>
    <TableCell sx={{color:'rgb(260,0,0)'}} align="center">MOBILE PHONE</TableCell>
    <TableCell sx={{color:'rgb(260,0,0)'}} align="center">PHONE</TableCell>
    <TableCell sx={{color:'rgb(260,0,0)'}} align="center">STREET</TableCell>
    <TableCell sx={{color:'rgb(260,0,0)'}} align="center">HOUSE NUMBER</TableCell>
    <TableCell sx={{color:'rgb(260,0,0)'}} align="center">CITY</TableCell>
    <TableCell sx={{color:'rgb(260,0,0)'}} align="center">BIRTH DATE</TableCell>
   
  </TableRow>
</TableHead>{employees.map((employee,index)=><SingleEmployee key={index} employee={employee} deleteEmployee={props.deleteEmployee} employees={employees} setSongs={setEmployees}/> )}

  </Table>
</TableContainer>

<IconButton  color="inherit" aria-label="upload picture" component="label">
            <input hidden  />
            <AddCircleOutlineIcon sx={{ fontSize: 45 }} onClick={(e)=> onAdd(e)} />
            </IconButton >
</>
    )

}

export default HomePage;