import React from 'react';
import { Link } from 'react-router-dom';

// If you are storing images locally, make sure the paths are correct.
// Otherwise, you can keep your current `const l1 = '/Lahore/Attractions/l1.png';` approach.
const l1 = 'https://lh3.googleusercontent.com/p/AF1QipM-PLneiGlZyJ3-Meto263QdTtnbZSET8D5KiXT=s1360-w1360-h1020';
const l2 = 'https://flypakistan.pk/assets/img/attractions/Lahore%20Fort.jpg';
const l3 = 'https://flypakistan.pk/assets/img/attractions/Shalimar%20Bagh.jpg';

function Lahore_info() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          {/* You can style this sidebar to look like the one in your screenshot */}
          <div className="list-group">
            {/* Heading in the sidebar (optional) */}
            <Link to={"/Lahore_info"} className="list-group-item list-group-item-action">
                Lahore Travel Guide
            </Link>

            <Link to={"/Lahore_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Lahore_comp"} className="list-group-item list-group-item-action">
              Hotels in Lahore
            </Link>
            <Link to={"/Lahore_attractions"} className="list-group-item list-group-item-action">
              Attractions in Lahore
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          {/* Top heading (similar to your screenshot) */}
          <h2 className="mb-3">
            Hotels, Things to do, Places to visit, Restaurants, Attractions, Car Rental in Lahore
          </h2>
          
          <p>
            Lahore is the capital of the Pakistani province of Punjab and the second-largest city in the country.
            It is known for its rich history, vibrant culture, and architectural heritage, including the iconic 
            Badshahi Mosque, Lahore Fort, and Shalimar Gardens. Lahore is also famous for its food and bustling markets.
          </p>

          {/* Cards Section */}
          <section className="py-4">
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
          </section>

        </div>
      </div>
    </div>
  );
}

export default Lahore_info;
