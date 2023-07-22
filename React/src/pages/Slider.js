import React from "react";
import wmen from '../images/istockphoto-1170648040-612x612.jpg';



const Slider = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
        <img
    className="card-img img-fluid"
    src={wmen}
    alt="Card"
    height={50}
           />
          
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter bg-info text-success">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block text-success">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
