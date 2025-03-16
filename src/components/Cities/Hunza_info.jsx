import React from 'react';
import { Link } from 'react-router-dom';

const l1 = 'https://flypakistan.pk/assets/img/attractions/Attabad%20Lake.jpg';
const l2 = 'https://flypakistan.pk/assets/img/attractions/Karimabad,%20The%20Capital%20Of%20Hunza.png';
const l3 = 'https://flypakistan.pk/assets/img/attractions/Gojal%20Valley.png';

function Hunza_info() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Hunza_info"} className="list-group-item list-group-item-action">
              Hunza Travel Guide
            </Link>
            <Link to={"/Hunza_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Hunza_comp"} className="list-group-item list-group-item-action">
              Hotels in Hunza
            </Link>
            <Link to={"/Hunza_attractions"} className="list-group-item list-group-item-action">
              Attractions in Hunza
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">
            Hotels, Things to do, Places to visit, Restaurants, Attractions, Car Rental in Hunza
          </h2>

          <p>
          The Hunza Valley is a picturesque mountainous valley located in the northern part of Gilgit-Baltistan, Pakistan. The valley is shaped by the Hunza River and is bordered by Shigar to the southeast, Ishkoman to the northwest, and the Xinjiang region of China to the northeast.
          </p>

          {/* Cards Section */}
          <section className="py-4">
            <div className="row g-4">
              {/* Attraction 1 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l1} className="card-img-top" alt="Attabad Lake" />
                  <div className="card-body">
                    <h5 className="card-title">Attabad Lake</h5>
                    <p className="card-text">Attabad Lake is captivating in a way that will leave you speechless. People can enjoy jet skiing and boating on Attabad Lake.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 2 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l2} className="card-img-top" alt="Karimabad" />
                  <div className="card-body">
                    <h5 className="card-title">Karimabad, The Capital Of Hunza</h5>
                    <p className="card-text">Karimabad, previously known as Baltit, serves as the capital of the Hunza District in Gilgit-Baltistan, Pakistan.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 3 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l3} className="card-img-top" alt="Gojal Valley" />
                  <div className="card-body">
                    <h5 className="card-title">Gojal Valley</h5>
                    <p className="card-text">
                      Located in the far northern region of Pakistan, Gojal Valley, also known as Upper Hunza, is renowned for its mesmerizing lakes and breathtaking landscapes.
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

export default Hunza_info;
