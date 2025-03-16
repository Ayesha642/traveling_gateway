import React from 'react';
import { Link } from 'react-router-dom';

const i1 = 'https://flypakistan.pk/assets/img/attractions/Faisal%20Masjid.jpg';
const i2 = 'https://flypakistan.pk/assets/img/attractions/Daman-e-Koh.jpg';
const i3 = 'https://flypakistan.pk/assets/img/attractions/%20Lok%20Virsa%20Museum%20&%20Heritage.jpeg';

function IslamabadAttractions() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Sidebar */}
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
          <h2 className="mb-3">Attractions in Islamabad</h2>
          <p>
            Discover the beauty and cultural heritage of Islamabad, from the stunning Faisal Mosque to the serene Daman-e-Koh viewpoint and the historic Lok Virsa Museum.
          </p>

          <div className="row g-4">
            {/* Attraction 1 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={i1} className="card-img-top" alt="Faisal Mosque" />
                <div className="card-body">
                  <h5 className="card-title">Faisal Mosque</h5>
                  <p className="card-text">An iconic mosque known for its unique architecture and grandeur.</p>
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
                  <p className="card-text">A popular viewpoint offering panoramic views of Islamabad.</p>
                  <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                </div>
              </div>
            </div>

            {/* Attraction 3 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src={i3} className="card-img-top" alt="Lok Virsa Museum" />
                <div className="card-body">
                  <h5 className="card-title">Lok Virsa Museum</h5>
                  <p className="card-text">A cultural museum showcasing the rich heritage of Pakistan.</p>
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

export default IslamabadAttractions;