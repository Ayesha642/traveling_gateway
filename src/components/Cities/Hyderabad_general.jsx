import React from "react";
import { Link } from "react-router-dom";

function Hyderabad_general() {
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
          <h2 className="mb-4 text-center">General Information about Hyderabad</h2>

          {/* Image Section */}
          <img
            src="https://flypakistan.pk/assets/img/City/Hyderabad.jpg"
            alt="Aerial View of Faisalabad"
            className="img-fluid mb-3"
          />

          {/* Description Section */}
          <p>
          Hyderabad is the second-largest city in Sindh and the eighth-largest in Pakistan. Established in 1768 by Mian Ghulam Shah Kalhoro of the Kalhora Dynasty, the city once served as the provincial capital until 1847, when the British shifted the capital to Bombay's presidency. Located approximately 150 kilometers (93 miles) from Karachi, Pakistan's largest city, Hyderabad is easily accessible via a direct railway and motorway.
          </p>

          <p>
          Hyderabad is currently a major cultural and commercial center that connects urban and rural Sindh. The city is home to historical treasures such as the graves of the Talpur and Kalhora rulers, two majestic forts, and the vibrant Shahi Bazaar, renowned for its colorful and lively atmosphere. However, there are a number of historic and old marketplaces, as well as the famed Hyderabadi biryani. On the other hand, the city's stunning monuments and architecture will compel you to enjoy its charm.
          </p>


          {/* Information Table */}
          <table className="table table-bordered mt-4">
            <tbody>
              <tr>
                <td><strong>Province</strong></td>
                <td>Sindh</td>
              </tr>
              <tr>
                <td><strong>Country</strong></td>
                <td>Pakistan</td>
              </tr>
              <tr>
                <td><strong>Area</strong></td>
                <td>292 km²</td>
              </tr>
              <tr>
                <td><strong>Population</strong></td>
                <td>1,733,000.00  Approx</td>
              </tr>
            </tbody>
          </table>
        </div>



      </div>
    </div>
  );
}

export default Hyderabad_general;
