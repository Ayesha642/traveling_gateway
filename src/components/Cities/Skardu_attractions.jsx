import React from 'react';
import { Link } from 'react-router-dom';

const n1 = 'https://flypakistan.pk/assets/img/attractions/Shangrila%20Resort%20Skardu.jpeg';
const n2 = 'https://flypakistan.pk/assets/img/attractions/Sheosar%20Lake.jpg';
const n3 = 'https://flypakistan.pk/assets/img/attractions/Deosai%20National%20Park.png';

function SkarduAttractions() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Skardu_info"} className="list-group-item list-group-item-action">
              Skardu Travel Guide
            </Link>
            <Link to={"/Skardu_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Skardu_comp"} className="list-group-item list-group-item-action">
              Hotels in Skardu
            </Link>
            <Link to={"/Skardu_attractions"} className="list-group-item list-group-item-action">
              Attractions in Skardu
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">Attractions in Skardu</h2>
          <p>
            Explore the rich cultural and historical landmarks of Lahore, including famous sites like the
            Badshahi Mosque, Lahore Fort, and Shalimar Gardens.
          </p>

          <div className="row g-4">
            {/* Attraction 1 */}
            <div className="col-md-4">
                            <div className="card h-100">
                              <img src={n1} className="card-img-top" alt="Mushkpuri Top" />
                              <div className="card-body">
                                <h5 className="card-title">Shangrila Resort Skardu</h5>
                                <p className="card-text">Shangrila Resort, established in 1983, opened the first Resort Hotel in Skardu, Gilgit-Baltistan, Pakistan.</p>
                                <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                              </div>
                            </div>
                          </div>

            {/* Attraction 2 */}
            <div className="col-md-4">
                            <div className="card h-100">
                              <img src={n2} className="card-img-top" alt="Ayubia National Park" />
                              <div className="card-body">
                                <h5 className="card-title">Shigar Fort</h5>
                                <p className="card-text">Shigar Fort, a 17th-century marvel in Shigar Valley, Baltistan, has been transformed into a heritage hotel managed by Serena Hotels.</p>
                                <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                              </div>
                            </div>
                          </div>

            {/* Attraction 3 */}
            <div className="col-md-4">
                            <div className="card h-100">
                              <img src={n3} className="card-img-top" alt="Green Spot" />
                              <div className="card-body">
                                <h5 className="card-title">Deosai National Park</h5>
                                <p className="card-text">Deosai National Park, situated at the crossroads of Skardu, Astore, and Kharmang districts, is a high-altitude plateau teeming with biodiversity.</p>
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

export default SkarduAttractions;
