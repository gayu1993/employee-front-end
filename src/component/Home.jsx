
// first import react.logo files

import React from 'react'
import companylogo from '../assets/companylogo.png'
import Cards from './Cards';

function Home ()  {


  return (
    <React.Fragment>
    <div className="homepageborder">
    <img className='logostyle' src={companylogo}alt="covertechlogo"/>
    <div className="container">
       <div className="row">
       <Cards/>
       </div>
       
  </div>
  

      </div>



      <div className="footerborder">
      </div>
      </React.Fragment>
);
}
   
  
  


export default Home
