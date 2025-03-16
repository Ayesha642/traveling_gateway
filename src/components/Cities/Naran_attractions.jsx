import React from 'react';
import { Link } from 'react-router-dom';

const n1 = 'https://flypakistan.pk/assets/img/attractions/Naran%20Kaghan.jpg';
const n2 = 'https://flypakistan.pk/assets/img/attractions/Lake%20Saif%20Ul%20Malook.jpg';
const n3 = 'https://flypakistan.pk/assets/img/attractions/Shogran.png';

function NaranAttractions() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Naran_info"} className="list-group-item list-group-item-action">
              Naran Travel Guide
            </Link>
            <Link to={"/Naran_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Naran_comp"} className="list-group-item list-group-item-action">
              Hotels in Naran
            </Link>
            <Link to={"/Naran_attractions"} className="list-group-item list-group-item-action">
              Attractions in Naran
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">Attractions in Naran</h2>
          <p>
            Explore the rich cultural and historical landmarks of Lahore, including famous sites like the
            Naran Kaghan, Lake Saif Ul Malook, and Shogran.
          </p>

          <div className="row g-4">
            {/* Attraction 1 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={n1} className="card-img-top" alt="Mushkpuri Top" />
                <div className="card-body">
                  <h5 className="card-title">Naran Kaghan</h5>
                  <p className="card-text">Kaghan Valley is an alpine-climate valley in Mansehra District of the Khyber Pakhtunkhwa</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Attraction 2 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={n2} className="card-img-top" alt="Ayubia National Park" />
                <div className="card-body">
                  <h5 className="card-title">Lake Saif Ul Malook</h5>
                  <p className="card-text"> Lake Saif-ul-Malook ranks as the fifth-best tourist destination in Pakistan.</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Attraction 3 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={n3} className="card-img-top" alt="Green Spot" />
                <div className="card-body">
                  <h5 className="card-title">Shogran</h5>
                  <p className="card-text">Shogran is renowned for its lush greenery, towering pine trees, and panoramic vistas.</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default NaranAttractions;
