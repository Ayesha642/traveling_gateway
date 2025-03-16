import React from 'react';
import { Link } from 'react-router-dom';

const l1 = 'https://flypakistan.pk/assets/img/attractions/%20Babusar%20Top.jpg';
const l2 = 'https://flypakistan.pk/assets/img/attractions/Khunjerab%20Pass.jpg';
const l3 = 'https://flypakistan.pk/assets/img/attractions/Skardu.jpg';

function Gilgit_info() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Gilgit_info"} className="list-group-item list-group-item-action">
              Gilgit Travel Guide
            </Link>
            <Link to={"/Gilgit_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Gilgit_comp"} className="list-group-item list-group-item-action">
              Hotels in Gilgit
            </Link>
            <Link to={"/Gilgit_attractions"} className="list-group-item list-group-item-action">
              Attractions in Gilgit
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">
            Hotels, Things to do, Places to visit, Restaurants, Attractions, Car Rental in Gilgit
          </h2>

          <p>
            Gilgit is the capital city of Gilgit-Baltistan, located in the northern region of Pakistan. The city sits in a wide valley at the confluence of the Hunza River and Gilgit River, surrounded by majestic mountains, making it a central hub for tourism and adventure activities.
          </p>

          {/* Cards Section */}
          <section className="py-4">
            <div className="row g-4">
              {/* Attraction 1 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l1} className="card-img-top" alt="Babusar Top" />
                  <div className="card-body">
                    <h5 className="card-title">Babusar Top</h5>
                    <p className="card-text">Situated at an elevation of 4,173 meters (13,691 feet), it connects the Kaghan Valley to Chilas via the Thak Nala and the Karakoram Highway (KKH). </p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 2 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l2} className="card-img-top" alt="Khunjerab Pass" />
                  <div className="card-body">
                    <h5 className="card-title">Khunjerab Pass</h5>
                    <p className="card-text">The renowned mountain pass is also a major tourist destination. The Hunza valley is popular among travelers for a number of reasons, including the nearby Khunjerab Pass and the Khunjerab National Park.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 3 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l3} className="card-img-top" alt="Skardu valley" />
                  <div className="card-body">
                    <h5 className="card-title">Skardu valley</h5>
                    <p className="card-text">
                      Through this valley, you can get to some of the world's highest mountains, like K2, K3, and Gasherbrum. Thousands of climbers from all over the world come to these tall mountains every year.
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

export default Gilgit_info;
