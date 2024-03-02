
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
              <Button variant="primary">Employee Details</Button>{' '}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="src/assets/project details.png" className="card-img-top" alt="..." />
            <div className="card-body">
            <Button variant="primary">Project details</Button>{' '}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="src/assets/performance report.png" className="card-img-top" alt="..." />
            <div className="card-body">
            <Button variant="primary">Performance report</Button>{' '}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="src/assets/my info.png" className="card-img-top" alt="..." />
            <div className="card-body">
            <Button variant="primary">My info</Button>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;