
import React from 'react';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// In your main JavaScript file (e.g., index.js or App.jsx)
import 'bootstrap/dist/css/bootstrap.min.css';


function Cards() {
  return (
    <div className='container'>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <img src="src/assets/employee details.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <Button variant="outline-secondary">Employee Details</Button>{' '}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="src/assets/project details.png" className="card-img-top" alt="..." />
            <div className="card-body">
            <Button variant="outline-secondary">Project details</Button>{' '}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="src/assets/performance report.png" className="card-img-top" alt="..." />
            <div className="card-body">
            <Button variant="outline-secondary">Performance report</Button>{' '}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="src/assets/my info.png" className="card-img-top" alt="..." />
            <div className="card-body">
            <Button variant="outline-secondary">My info</Button>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;