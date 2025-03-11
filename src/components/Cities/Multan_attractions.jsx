import React from 'react';
import { Link } from 'react-router-dom';

const l1 = '/Lahore/Attractions/l1.png';
const l2 = '/Lahore/Attractions/l2.png';
const l3 = '/Lahore/Attractions/l3.png';

function MultanAttractions() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Multan_info"} className="list-group-item list-group-item-action">
              Multan Travel Guide
            </Link>
            <Link to={"/Multan_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Multan_comp"} className="list-group-item list-group-item-action">
              Hotels in Multan
            </Link>
            <Link to={"/Multan_attractions"} className="list-group-item list-group-item-action">
              Attractions in Multan
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">Attractions in Multan</h2>
          <p>
            Explore the rich cultural and historical landmarks of Lahore, including famous sites like the
            Badshahi Mosque, Lahore Fort, and Shalimar Gardens.
          </p>

          <div className="row g-4">
            {/* Attraction 1 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={l1} className="card-img-top" alt="Badshahi Mosque" />
                <div className="card-body">
                  <h5 className="card-title">Badshahi Mosque</h5>
                  <p className="card-text">One of Lahore's most iconic landmarks, built in 1673.</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Attraction 2 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={l2} className="card-img-top" alt="Lahore Fort" />
                <div className="card-body">
                  <h5 className="card-title">Lahore Fort</h5>
                  <p className="card-text">A magnificent fort built during the Mughal era.</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Attraction 3 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={l3} className="card-img-top" alt="Shalimar Gardens" />
                <div className="card-body">
                  <h5 className="card-title">Shalimar Gardens</h5>
                  <p className="card-text">
                    A UNESCO World Heritage Site known for its stunning architecture and gardens.
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

export default MultanAttractions;
