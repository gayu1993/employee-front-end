
// first import react.logo files

import React from 'react'
import companylogo from '../assets/companylogo.png'
import Employeedetails from './Employeedetails';

function Home ()  {


  return (
    <React.Fragment>
    <div className="homepageborder">
    <img className='logostyle' src={companylogo}alt="covertechlogo"/>
    <div className="container">
       <div className="row">
       <Employeedetails />
       </div>
       
  </div>
  

      </div>



      <div className="footerborder">
      </div>
      </React.Fragment>
);
}
   
  
  


export default Home
