import React,{useState} from 'react'
import { json, useNavigate } from "react-router-dom"
import companylogo from '../assets/companylogo.png'
import axios from 'axios'
import cors from'cors'

const Login = (props)=>{
  const[Employee_id,setEmployee_id]=useState("")
  const[Password,setPassword]=useState("")
  const [Employee_idError, setEmployee_idError] = useState("")
  const [PasswordError, setPasswordError] = useState("")
  const navigate = useNavigate();


  const onButtonclick =() => {
    setEmployee_idError("")
    setPasswordError("")
    if ("" === Employee_id) {
      setEmployee_idError("Please enter your Employee_id ")
      return
    }
    
    if(Employee_id.length < 8){
      setEmployee_idError("the employee_id must be 9 charachter or more")
        return
  }

      if("" === Password) {
        setPasswordError("Please enter a password")
        return
    }

    if (Password.length < 7) {
      setPasswordError("The password must be 8 characters or longer")
        return
    }

    login();


  }


  const login = () =>{


  const values ={Employee_id, Password };

  

  
    fetch('http://localhost:3000/employee/getemployeebyemail?Email_id='+Employee_id ,{
      method:'get',
      // header is used for sending data using json format from backend to frontend also frontend-backend
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'http://localhost:3000',
        'Access-Control-Allow-Credentials' : 'true'

      },
      // body: JSON.stringify(Employeedetails)
  })
  .then((r)=> r.json())
  .then((r)=> { 
    if('Success' == r.message && r.user.length != 0) {
    
         navigate('/Home')
    }
    else{
      window.alert("Incorrect Employ-Id or Password")
    }
  })
  }
  return  <div className="container loginborder">
        <div>
        <h4 className="text-center pagelogin">WELCOME</h4>
         <img className="logostyle1" src={companylogo} alt="covertech logo" />

      </div>
      <br/>

      <div className="mb-3 mt-5 divemail">
       
        <input value={Employee_id} onChange={e=>setEmployee_id(e.target.value)} name="email" 
          type="email"
          placeholder="Enter Your Employee-Id"
          className={"form-control"}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        required/>
         <label className="exampleInputEmail1">{Employee_idError}</label>
      </div>
      <br/>
      <div className="mb-3 divemail">
      <input
          value={Password}
          placeholder="Enter Your Password"
          onChange={e=>setPassword(e.target.value)}
          className={"form-control"}
          id="exampleInputPassword1"
        />
        <label className="exampleInputPassword1">{PasswordError}</label>
      
      </div>
      <div className="col-12">
      
        <button type="button" className="btn btn-primary buttonstyle" onClick={onButtonclick}>Login</button><br /><br />
      
      </div>
      <div>
      <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"></input>
                <label className="form-check-label" >
                  Remember password
                </label>
              </div>
              <div>
        <span className="psw click">Forgot <a href="#">password?</a></span>
      </div>
      </div>
  </div>
}

    


export default Login
