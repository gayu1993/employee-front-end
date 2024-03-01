
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards () {
  return  <div className='container'>
    <div className="row g-4">
    <div className="col">
    <div className="card h-100">
    <img src="src/assets/companylogo.png" className="card-img-top" alt="..."/>
    <div className="card-body">
    <Button variant="primary">Primary</Button>{' '}
      </div>
      </div>
    </div>
    <div className="col">
    <div className="card h-100">
    <img src="src/assets/companylogo.png" className="card-img-top" alt="..."/>
    <div className="card-body">
   <a href="" class="btn">Click Here</a>
       
      </div>
      </div>
    </div>
  </div>

  </div>
}

export default Cards
  


  


