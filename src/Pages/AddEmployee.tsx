
import React, { useEffect, useRef, useState } from "react";
import {DetailsCoronaVirusModel, Employee } from "../model";
import HomePage from './HomePage';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import {AutoDisabler,Validate,ValidationGroup}from 'mui-validate'
import { FormControl, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';


const AddEmployee= ( props:{array:Employee[],setArray: React.Dispatch<React.SetStateAction<Employee[]>>,addEmployee:Function}) => {
const navigate = useNavigate();
const [employee,setEmployee]=useState<Employee>({
        
  fullName:"",
  ts:"",
  city:"",
  street: "",
  houseNumber:0,
  bornDate: "", 
  mobilePhone:"",
  phone:"",
  detailsCoronaVirus:({vaccinationDateA:"",vaccinationDateB:"",vaccinationDateC:"",vaccinationDateD:"", manufacturerVaccineA:"",manufacturerVaccineB:"",manufacturerVaccineC:"",manufacturerVaccineD:"",
  positiveResultDate:"",recoveryDate:"",
  })
       
      });
      const [moreDetails,setMoreDetails]=useState<DetailsCoronaVirusModel>({   
        vaccinationDateA:"",vaccinationDateB:"",vaccinationDateC:"",vaccinationDateD:"", manufacturerVaccineA:"",
        manufacturerVaccineB:"",manufacturerVaccineC:"",manufacturerVaccineD:"", positiveResultDate:"",recoveryDate:"",
        });

      let employees=props.array;
      let setemployees=props.setArray;
      const inputRef = useRef<HTMLInputElement>(null);
      
      return (
          <>
          <h1>Add new employee</h1>
          
        <form
          className="input"
           onSubmit={async(e) => {   
            setEmployee({...employee,detailsCoronaVirus:moreDetails});     
          props.addEmployee(employee);
          }}
        >
          <h3>Personal details</h3>
          <input
          pattern="[A-Z a-z]+" title="אנא הזן אותיות A-Z בלבד" required
            type="text"
            placeholder="fullName"
            className="input__box"
            onChange={(e) => {setEmployee({...employee,fullName:e.target.value})}}
    
            
          />
            <input
            type="text"
            placeholder="tz"
            pattern="[0-9]{9}" title="אנא הזן תעודת זהות תקינה" required 
            onChange={(e) => 
              {setEmployee({...employee,ts:e.target.value})}}
            className="input__box"
          />
            <input
            type="text"
            placeholder="mobilePhone"
            pattern="05?[0-9]-?[0-9]{7}" title="אנא הזן מספר סלולרי תקין" required 
            onChange={(e) =>{setEmployee({...employee,mobilePhone:e.target.value})}}
            className="input__box"
          />
            <input
            type="text"
            placeholder="phone"
            pattern="0?[0-9]-?[0-9]{7}" title="אנא הזן מספר טלפון תקין" required   className="input__box"
            onChange={(e) => {setEmployee({...employee,phone:e.target.value})}}
            />
            <input
            type="text"
            placeholder="street"
            className="input__box"
            onChange={(e) =>{setEmployee({...employee,street:e.target.value})}}
    
          />
           <input
            type="number"
            placeholder="house number"
            className="input__box"
            onChange={(e) =>{setEmployee({...employee,houseNumber:e.target.valueAsNumber})}} 
          />
           <input
            type="text"
            placeholder="city"
            className="input__box"
            onChange={(e) =>{setEmployee({...employee,city:e.target.value})}}
    
          />
           <input
            type="text"
            placeholder="birth date" required 
            className="input__box"
            onChange={(e) =>{setEmployee({...employee,bornDate:e.target.value})}}
    
          />
          <h3>Details on the Corona virus:</h3>
<input
            type="text"
            placeholder="vaccination Date A"
            className="input__box"
            onChange={(e) =>{setMoreDetails({...moreDetails,vaccinationDateA:e.target.value})}}
    
          />
          <input
          type="text"
          placeholder="vaccination Date B"
          className="input__box"
          onChange={(e) =>{setMoreDetails({...moreDetails,vaccinationDateB:e.target.value})}}
  
        /><input
        type="text"
        placeholder="vaccination Date C"
        className="input__box"
        onChange={(e) =>{setMoreDetails({...moreDetails,vaccinationDateC:e.target.value})}}

      /><input
      type="text"
      placeholder="vaccination Date D"
      className="input__box"
      onChange={(e) =>{setMoreDetails({...moreDetails,vaccinationDateD:e.target.value})}}

    /><input
    type="text"
    placeholder="manufacturer Vaccine A"
    className="input__box"
    onChange={(e) =>{setMoreDetails({...moreDetails,manufacturerVaccineA:e.target.value})}}

  /><input
  type="text"
  placeholder="manufacturer Vaccine B"
  className="input__box"
  onChange={(e) =>{setMoreDetails({...moreDetails,manufacturerVaccineB:e.target.value})}}

/><input
            type="text"
            placeholder="manufacturer Vaccine C"
            className="input__box"
            onChange={(e) =>{setMoreDetails({...moreDetails,manufacturerVaccineC:e.target.value})}}
    
          /><input
          type="text"
          placeholder="manufacturer Vaccine D"
          className="input__box"
          onChange={(e) =>{setMoreDetails({...moreDetails,manufacturerVaccineD:e.target.value})}}
  
        />
        <input
          type="text"
          placeholder="positive Result Date"
          className="input__box"
          onChange={(e) =>{setMoreDetails({...moreDetails,positiveResultDate:e.target.value})}}
  
        />
        <input
          type="text"
          placeholder="recovery Date"
          className="input__box"
          onChange={(e) =>{setMoreDetails({...moreDetails,recoveryDate:e.target.value})}}
  
        />
        
          <button type="submit" className="price">
            Add
          </button>
        </form>
        <IconButton  color="inherit" aria-label="upload picture" component="label">
            <input hidden  />
            <HomeIcon sx={{ fontSize: 40 }}onClick={()=> { navigate('/') }}/>
            </IconButton >
              
        </>
      );
      
    };
    
    export default AddEmployee;
    