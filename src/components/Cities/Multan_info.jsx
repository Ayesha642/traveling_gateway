import React from 'react';
import { Link } from 'react-router-dom';

const l1 = 'https://flypakistan.pk/assets/img/attractions/Tomb%20Of%20Shah%20Yusuf%20Gardezi.jpg';
const l2 = 'https://flypakistan.pk/assets/img/attractions/Tomb%20Shah%20Shams%20Sabzwari%20Tabrez.jpg';
const l3 = 'https://flypakistan.pk/assets/img/attractions/Tomb%20Shah%20Rukne%20Alam.jpg';

function Multan_info() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
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
          <h2 className="mb-3">
            Hotels, Things to do, Places to visit, Restaurants, Attractions, Car Rental in Multan
          </h2>

          <p>
          Multan is the capital of the Multan Division in Punjab, Pakistan, located along the banks of the Chenab River.
          </p>

          {/* Cards Section */}
          <section className="py-4">
            <div className="row g-4">
              {/* Attraction 1 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l1} className="card-img-top" alt="Tomb Of Shah Yusuf Gardezi" />
                  <div className="card-body">
                    <h5 className="card-title">Tomb Of Shah Yusuf Gardezi</h5>
                    <p className="card-text">Known for his miraculous deeds, he played a significant role in spreading Islam in the region and revitalizing the city of Multan.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 2 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l2} className="card-img-top" alt="Tomb Shah Shams Sabzwari Tabrez" />
                  <div className="card-body">
                    <h5 className="card-title">Tomb Shah Shams Sabzwari Tabrez</h5>
                    <p className="card-text">Known for his spiritual influence, he established a dargah that continues to draw devotees. Shamsuddin Sabzwari's mausoleum in Multan is a site of annual pilgrimage, with the Urs held every June, celebrating his contributions to the spread of Islam in South Asia.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 3 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={l3} className="card-img-top" alt="Tomb Shah Rukne Alam" />
                  <div className="card-body">
                    <h5 className="card-title">Tomb Shah Rukne Alam</h5>
                    <p className="card-text">
                      His spiritual teachings left a lasting impact on the region. He was originally interred in his grandfather's mausoleum but was later moved to his own iconic tomb, which remains a significant landmark in Multan.
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

export default Multan_info;
