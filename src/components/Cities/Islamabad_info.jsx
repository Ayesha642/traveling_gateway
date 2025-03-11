import React from 'react';
import { Link } from 'react-router-dom';

// Image paths for Islamabad attractions
const i1 = 'https://flypakistan.pk/assets/img/attractions/Faisal%20Masjid.jpg';
const i2 = 'https://flypakistan.pk/assets/img/attractions/Daman-e-Koh.jpg';
const i3 = 'https://flypakistan.pk/assets/img/attractions/Pakistan%20Monument.jpeg';

function Islamabad_info() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Islamabad_info"} className="list-group-item list-group-item-action">
            Islamabad Travel Guide
            </Link>
            <Link to={"/Islamabad_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Islamabad_comp"} className="list-group-item list-group-item-action">
              Hotels in Islamabad
            </Link>
            <Link to={"/Islamabad_attractions"} className="list-group-item list-group-item-action">
              Attractions in Islamabad
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">
            Hotels, Things to do, Places to visit, Restaurants, Attractions, Car Rental in Islamabad
          </h2>
          
          <p>
            Islamabad, the capital of Pakistan, is known for its scenic beauty, modern architecture, and tranquil environment.
            The city offers attractions like Faisal Mosque, Daman-e-Koh, and Pakistan Monument. It is a hub for nature lovers and
            adventure seekers alike.
          </p>

          {/* Cards Section */}
          <section className="py-4">
            <div className="row g-4">
              {/* Attraction 1 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={i1} className="card-img-top" alt="Faisal Mosque" />
                  <div className="card-body">
                    <h5 className="card-title">Faisal Mosque</h5>
                    <p className="card-text">The largest mosque in Pakistan, known for its stunning architecture.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 2 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={i2} className="card-img-top" alt="Daman-e-Koh" />
                  <div className="card-body">
                    <h5 className="card-title">Daman-e-Koh</h5>
                    <p className="card-text">A popular viewpoint offering breathtaking views of Islamabad.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 3 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={i3} className="card-img-top" alt="Pakistan Monument" />
                  <div className="card-body">
                    <h5 className="card-title">Pakistan Monument</h5>
                    <p className="card-text">A national symbol representing the unity of Pakistan.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Islamabad_info;