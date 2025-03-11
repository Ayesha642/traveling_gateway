import React from 'react';
import { Link } from 'react-router-dom';

const f1 = 'https://flypakistan.pk/assets/img/attractions/Clock%20Tower%20Faisalabad.jpg';
const f2 = 'https://flypakistan.pk/assets/img/attractions/Gutwala%20Park.jpg';
const f3 = 'https://flypakistan.pk/assets/img/attractions/Lyallpur%20Museum%20Faisalabad.png';

function Faisalabad_info() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Faisalabad_info"} className="list-group-item list-group-item-action">
            Faisalabad Travel Guide
            </Link>
            <Link to={"/Faisalabad_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Faisalabad_comp"} className="list-group-item list-group-item-action">
              Hotels in Faisalabad
            </Link>
            <Link to={"/Faisalabad_attractions"} className="list-group-item list-group-item-action">
              Attractions in Faisalabad
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">
            Hotels, Things to do, Places to visit, Restaurants, Attractions, Car Rental in Faisalabad
          </h2>
          
          <p>
            Faisalabad, known as the Manchester of Pakistan, is a major industrial and textile hub. 
            It boasts a rich history, vibrant markets, and significant landmarks such as the famous 
            Clock Tower and Jinnah Garden.
          </p>

          {/* Cards Section */}
          <section className="py-4">
            <div className="row g-4">
              {/* Attraction 1 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={f1} className="card-img-top" alt="Clock Tower Faisalabad" />
                  <div className="card-body">
                    <h5 className="card-title">Clock Tower</h5>
                    <p className="card-text">A historic landmark and the center of Faisalabad.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 2 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={f2} className="card-img-top" alt="Gatwala Park" />
                  <div className="card-body">
                    <h5 className="card-title">Gatwala Park</h5>
                    <p className="card-text">A beautiful park with lakes, wildlife, and greenery.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 3 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={f3} className="card-img-top" alt="Lyallpur Museum" />
                  <div className="card-body">
                    <h5 className="card-title">Lyallpur Museum</h5>
                    <p className="card-text">
                      A museum showcasing the history and heritage of Faisalabad.
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

export default Faisalabad_info;
