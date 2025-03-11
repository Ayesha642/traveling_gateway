import React from 'react';
import { Link } from 'react-router-dom';

const n1 = 'https://pakistantravelplaces.com/wp-content/uploads/2018/10/Mushkpuri-trek-Photo-by-Imran-Ahmed.jpg';
const n2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ayubia%2C_Pakistan.jpg/1200px-Ayubia%2C_Pakistan.jpg';
const n3 = 'https://lh5.googleusercontent.com/p/AF1QipOTugBSvazxr7A1zXEb-dNw1-0Ur2Q9vTVDJ5VY=w270-h156-n-k-no';

function Nathiagali_info() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Nathiagali_info"} className="list-group-item list-group-item-action">
                Nathiagali Travel Guide
            </Link>
            <Link to={"/Nathiagali_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Nathiagali_comp"} className="list-group-item list-group-item-action">
              Hotels in Nathiagali
            </Link>
            <Link to={"/Nathiagali_attractions"} className="list-group-item list-group-item-action">
              Attractions in Nathiagali
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">
            Hotels, Things to do, Places to visit, Restaurants, Attractions, Car Rental in Nathiagali
          </h2>
          
          <p>
            Nathiagali, a picturesque hill station in Pakistan, is known for its lush green forests, cool weather,
            and breathtaking views of the Himalayas. It is a perfect getaway for nature lovers and adventure seekers.
          </p>

          {/* Cards Section */}
          <section className="py-4">
            <div className="row g-4">
              {/* Attraction 1 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={n1} className="card-img-top" alt="Mushkpuri Top" />
                  <div className="card-body">
                    <h5 className="card-title">Mushkpuri Top</h5>
                    <p className="card-text">A popular hiking destination offering stunning panoramic views.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 2 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={n2} className="card-img-top" alt="Ayubia National Park" />
                  <div className="card-body">
                    <h5 className="card-title">Ayubia National Park</h5>
                    <p className="card-text">A beautiful wildlife park with diverse flora and fauna.</p>
                    <Link to="/Booking_foam" className="btn btn-success w-100">Explore</Link>
                  </div>
                </div>
              </div>

              {/* Attraction 3 */}
              <div className="col-md-4">
                <div className="card h-100">
                  <img src={n3} className="card-img-top" alt="Green Spot" />
                  <div className="card-body">
                    <h5 className="card-title">Green Spot</h5>
                    <p className="card-text">A peaceful retreat with stunning green landscapes.</p>
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

export default Nathiagali_info;
