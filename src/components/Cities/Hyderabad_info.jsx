import React from 'react';
import { Link } from 'react-router-dom';

const n1 = '/Nathiagali/Attractions/n1.png';
const n2 = '/Nathiagali/Attractions/n2.png';
const n3 = '/Nathiagali/Attractions/n3.png';

function Hyderabad_info() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Hyderabad_info"} className="list-group-item list-group-item-action">
            Hyderabad Travel Guide
            </Link>
            <Link to={"/Hyderabad_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Hydrabad_comp"} className="list-group-item list-group-item-action">
              Hotels in Hyderabad
            </Link>
            <Link to={"/Hyderabad_attractions"} className="list-group-item list-group-item-action">
              Attractions in Hyderabad
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-3">
            Hotels, Things to do, Places to visit, Restaurants, Attractions, Car Rental in Hyderabad
          </h2>

          <p>
          Hyderabad is the second-largest city in Sindh and the eighth-largest in Pakistan. Established in 1768 by Mian Ghulam Shah Kalhoro of the Kalhora Dynasty, the city once served as the provincial capital until 1847.
          </p>

          {/* Cards Section */}
          <section className="py-4">
            <div className="row g-4">
              


            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hyderabad_info;
