import React, { useState } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Home from'./component/Home';
import Employeedata from './component/Employee profile.jsx';
import Cards from './component/Cards';

function App() {
 const[loginpage,setLoginpage]=useState(false)
 const[Employee_id,setEmployee_id]=useState("")
//  const[Password,setPassword]=usestate("");


 


  
  return (
    
      <div className='App'>
        <BrowserRouter>
<Routes>
  <Route path ="/Home" element={<Home Employee_id={Employee_id} loginpage={loginpage} setLoginpage={setLoginpage}/>} />
  <Route path="/login" element={<Login setLoginpage={setLoginpage} setEmployee_id={setEmployee_id} />} />
  <Route path="/Employee profile" element={<Employee profile />}/>
</Routes>
       
        </BrowserRouter>
      
      </div>
      

    
  );
}

export default App
