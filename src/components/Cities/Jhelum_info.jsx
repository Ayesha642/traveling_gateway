import React from 'react';
import { Link } from 'react-router-dom';

const l1 = 'https://flypakistan.pk/assets/img/attractions/Khewra%20Salt%20Mine.jpg';
const l2 = 'https://flypakistan.pk/assets/img/attractions/Rohtas%20Fort.jpg';
const l3 = 'https://flypakistan.pk/assets/img/attractions/CMH%20Mosque.png';

function Jhelum_info() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Jhelum_info"} className="list-group-item list-group-item-action">
            Jhelum Travel Guide
            </Link>
            <Link to={"/Jhelum_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Jhelum_comp"} className="list-group-item list-group-item-action">
              Hotels in Jhelum
            </Link>
            <Link to={"/Jhelum_attractions"} className="list-group-item list-group-item-action">
              Attractions in Jhelum
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">
            Hotels, Things to do, Places to visit, Restaurants, Attractions, Car Rental in Jhelum
          </h2>

          <p>
          Jhelum is a city located on the right bank of the Jhelum River, situated in the Jhelum District in the northern part of Punjab province, Pakistan.
          </p>

          {/* Cards Section */}
          <section className="py-4">
            <div className="row g-4">
              {/* Attraction 1 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l1} className="card-img-top" alt="Khewra Salt Mine" />
                  <div className="card-body">
                    <h5 className="card-title">Khewra Salt Mine</h5>
                    <p className="card-text">It is accessible from the M2 Motorway via the Lillah Interchange. It is also called the Mayo Salt Mine, and it is the second-largest salt mine after the Sifto salt mine in Canada.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 2 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l2} className="card-img-top" alt="Rohtas Fort" />
                  <div className="card-body">
                    <h5 className="card-title">Rohtas Fort</h5>
                    <p className="card-text">Rohtas Fort is one of Pakistan's six UNESCO World Heritage Sites. It was built in the 1600s. General Sher Shah Suri built it. He was the first ruler of the short-lived Sur Dynasty in the subcontinent.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 3 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l3} className="card-img-top" alt="Shalimar Gardens" />
                  <div className="card-body">
                    <h5 className="card-title">CMH Mosque</h5>
                    <p className="card-text">
                      The CMH Mosque, located in Jhelum City, Punjab, is a stunning architectural masterpiece built with white marble.
                    </p>
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

export default Jhelum_info;
