import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Alert, Button, Card, CardActions, CardContent } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"; 
import { Employee } from "../model";
import HomePage from "./HomePage";
import HomeIcon from '@mui/icons-material/Home';


const ShowMoreDetails = ( props:{array:Employee[]}) => {
  const navigate=useNavigate();
  let employees=props.array;
  const params=useParams();
  const id=params.id;
  const employee=(
    employees.find((e)=>e.id===id) as Employee
); 
  return (
  <>
    <h2>Hello {employee.fullName} ,your Details on the corona virus:</h2>
    <HomeIcon sx={{ fontSize: 22 }} onClick={()=> { navigate('/') }}/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>The vaccination number</b></TableCell>
            <TableCell align="center"><b>Date of receiving the vaccine</b></TableCell>
            <TableCell align="center"><b>The manufacturer of the vaccine</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              key={employee.fullName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {employee.detailsCoronaVirus.manufacturerVaccineA}
              </TableCell> */}
              <TableCell align="center">first</TableCell>
              <TableCell align="center">{employee.detailsCoronaVirus.vaccinationDateA}</TableCell>
              <TableCell align="center">{employee.detailsCoronaVirus.manufacturerVaccineA}</TableCell>
              
            </TableRow>
            <TableRow
              key={employee.fullName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >   
              <TableCell align="center">second</TableCell>
              <TableCell align="center">{employee.detailsCoronaVirus.vaccinationDateB}</TableCell>
              <TableCell align="center">{employee.detailsCoronaVirus.manufacturerVaccineB}</TableCell>
              
            </TableRow>
            <TableRow
              key={employee.fullName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >   
              <TableCell align="center">third</TableCell>
              <TableCell align="center">{employee.detailsCoronaVirus.vaccinationDateC}</TableCell>
              <TableCell align="center">{employee.detailsCoronaVirus.manufacturerVaccineC}</TableCell>
              
            </TableRow>
            <TableRow
              key={employee.fullName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >   
              <TableCell align="center">fourth</TableCell>
              <TableCell align="center">{employee.detailsCoronaVirus.vaccinationDateD}</TableCell>
              <TableCell align="center">{employee.detailsCoronaVirus.manufacturerVaccineD}</TableCell>
              
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
<div >
    <p><b>positive Result Date:</b>{employee.detailsCoronaVirus.positiveResultDate}</p>
    <p><b>recovery Date:</b>{employee.detailsCoronaVirus.recoveryDate}</p>
  
</div>
    
    
    </>
  
   )};
   export default ShowMoreDetails;