import React from 'react';
import { Link } from 'react-router-dom';

const l1 = 'https://flypakistan.pk/assets/img/attractions/Sheesh%20Mahal.jpg';
const l2 = 'https://flypakistan.pk/assets/img/attractions/Lahore%20Fort.jpg';
const l3 = 'https://flypakistan.pk/assets/img/attractions/Tomb%20Of%20Jahangir.jpg';
const l4 = 'https://flypakistan.pk/assets/img/attractions/Minar-e-Pakistan.png';

function LahoreAttractions() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to="/Lahore_info" className="list-group-item list-group-item-action">
              Lahore Travel Guide
            </Link>
            <Link to="/Lahore_general" className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to="/Lahore_comp" className="list-group-item list-group-item-action">
              Hotels in Lahore
            </Link>
            <Link to="/Lahore_attractions" className="list-group-item list-group-item-action">
              Attractions in Lahore
            </Link>
            <Link to="/Buses_info" className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">Attractions in Lahore</h2>
          <p>
            Discover the historical and cultural gems of Lahore, from the grandeur of the Mughal era to architectural marvels.
          </p>

          <div className="row g-4">
            {/* Sheesh Mahal */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={l1} className="card-img-top" alt="Sheesh Mahal" />
                <div className="card-body">
                  <h5 className="card-title">Sheesh Mahal</h5>
                  <p className="card-text">
                    Known as the "Palace of Mirrors," located within Lahore Fort. Famous for its intricate mirror work.
                  </p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Lahore Fort */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={l2} className="card-img-top" alt="Lahore Fort" />
                <div className="card-body">
                  <h5 className="card-title">Lahore Fort</h5>
                  <p className="card-text">A magnificent Mughal fort built during the reign of Emperor Akbar.</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Minar-e-Pakistan */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={l4} className="card-img-top" alt="Lahore Fort" />
                <div className="card-body">
                  <h5 className="card-title">Minar-e-Pakistan</h5>
                  <p className="card-text">Known as the "Tower of Pakistan" is a national monument in Lahore, Pakistan</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Tomb of Jahangir */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={l3} className="card-img-top" alt="Tomb of Jahangir" />
                <div className="card-body">
                  <h5 className="card-title">Tomb of Jahangir</h5>
                  <p className="card-text">
                    A grand mausoleum built in the 17th century, located in Shahdara Bagh across the Ravi River.
                  </p>
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

export default LahoreAttractions;
