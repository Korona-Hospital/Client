import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Employee } from "../model";
import AddSong from "./AddEmployee";
import EditSong from "./EditEmployee";
import HomePage from "../Pages/HomePage";
import ShowMoreDetails from "../Pages/ShowMoreDetails";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";


function ParentComponent() {
  const navigate=useNavigate()
    const [employees,setEmployees ]=useState<Employee[]>([]);
    useEffect (()=>{
   const f=async()=>{
    await axios.get('http://localhost:8080/employees').then((res) => {
      console.log(res.data)
      setEmployees(res.data);
    }).catch((error) => { console.log(error) })
  }
    f()
   },[])
  
    const editEmployee = async(id:string, newSongValue:Employee) => { 
    console.log(newSongValue);
    let copySongs = [...employees];
    const objIndex = copySongs.findIndex((e: Employee) => e.id == id);
    debugger
    copySongs[objIndex] = newSongValue;
    setEmployees(copySongs);
    console.log(copySongs)
   await axios.put(`http://localhost:8080/employees/updateEmployee`,newSongValue)
  .then(res => {
    console.log(employees);
  }).catch((error) => { console.log(error) })
}
   
  const deleteEmployee=async(e:any,song:Employee)=>{
    alert("הפציינט ימחק ולא יהיה ניתן לשחזרו");
 await axios.delete(`http://localhost:8080/employees/deleteEmployeeById/${song.id}`)
 .then(res => {
  setEmployees(employees.filter((s)=>s.id!=song.id));
 }).catch((error) => { console.log(error) })
     }

     const addEmployee=async(employee:Employee)  =>{
     await axios.post(`http://localhost:8080/employees`,employee)
    .then(res => {   
    }).catch((error)=>{console.log(error)})}
     
    return(
    
    <div className="App">
        <span className="heading">Corona management system for HMO</span>
        <img className="image"src="https://mail.google.com/mail/u/0?ui=2&ik=042f7be8e1&attid=0.1&permmsgid=msg-a:r-2440757641333586161&th=183f7c6f430afcb3&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-eZeID4AZoql-wTg9BvSlQ2dpiXfqgooyFSOdsR3drd5fj7HCC46Nw2wTdzekjywlVRcwG6qJDIzDtGKpRg9qgieuln4E34PnHT-fNnwuLKMConm4xSB6E4cs&disp=emb&realattid=ii_l9hpehyt0"
        width="240" height="63"  />
        {/* <img className="image"src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/SARS-CoV-2_%28CDC-23312%29.png/300px-SARS-CoV-2_%28CDC-23312%29.png"
        width="100" height="63"  /> */}
        <Routes>
          <Route path='/' element={<HomePage array={employees} deleteEmployee={deleteEmployee} setArray={setEmployees} />}></Route>
          <Route path='/AddEmployee' element={<AddEmployee array={employees} setArray={setEmployees} addEmployee={addEmployee}/>}></Route>
          <Route path='/EditEmployee/:id' element={<EditEmployee array={employees} editEmployee={editEmployee}/>}></Route>
          <Route path='/ShowMoreDetails/:id' element={<ShowMoreDetails array={employees} />}></Route>
         

  </Routes>
  
          </div>
    );
      
     
    }
  export default ParentComponent;
  