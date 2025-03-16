import React from 'react';
import { Link } from 'react-router-dom';

const c1 = 'https://flypakistan.pk/assets/img/attractions/Clock%20Tower%20Faisalabad.jpg';
const c2 = 'https://flypakistan.pk/assets/img/attractions/Gutwala%20Park.jpg';
const c3 = 'https://flypakistan.pk/assets/img/attractions/Jinnah%20Gardens.png';
const c4 = 'https://flypakistan.pk/assets/img/attractions/Lyallpur%20Museum%20Faisalabad.png';

function FaisalabadAttractions() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to="/Faisalabad_info" className="list-group-item list-group-item-action">
              Faisalabad Travel Guide
            </Link>
            <Link to="/Faisalabad_general" className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to="/Faisalabad_comp" className="list-group-item list-group-item-action">
              Hotels in Faisalabad
            </Link>
            <Link to="/Faisalabad_attractions" className="list-group-item list-group-item-action">
              Attractions in Faisalabad
            </Link>
            <Link to="/Buses_info" className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">Attractions in Faisalabad</h2>
          <p>Explore the vibrant cultural and historical landmarks of Faisalabad.</p>

          <div className="row g-4">
            {/* Attraction 1: Clock Tower */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={c1} className="card-img-top" alt="Clock Tower" />
                <div className="card-body">
                  <h5 className="card-title">Clock Tower</h5>
                  <p className="card-text">The iconic Ghanta Ghar, the hub for political rallies and religious events.</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Attraction 2: Gutwala Park */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={c2} className="card-img-top" alt="Gutwala Park" />
                <div className="card-body">
                  <h5 className="card-title">Gutwala Park</h5>
                  <p className="card-text">Faisalabad's largest recreational area with lakes, canals, and bamboo groves.</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Attraction 3: Jinnah Gardens */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={c3} className="card-img-top" alt="Jinnah Gardens" />
                <div className="card-body">
                  <h5 className="card-title">Jinnah Gardens</h5>
                  <p className="card-text">A serene escape with lush greenery and historical significance.</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Attraction 4: Lyallpur Museum */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={c4} className="card-img-top" alt="Lyallpur Museum" />
                <div className="card-body">
                  <h5 className="card-title">Lyallpur Museum</h5>
                  <p className="card-text">A heritage museum showcasing the rich history and culture of Faisalabad.</p>
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

export default FaisalabadAttractions;
