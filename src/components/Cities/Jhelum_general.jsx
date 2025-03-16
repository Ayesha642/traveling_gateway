import React from "react";
import { Link } from "react-router-dom";

function Jhelum_general() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Jhelum_info"} className="list-group-item list-group-item-action">
              Jhelum Travel Guide
            </Link>
            <Link to={"/Jhelum_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Jhelum_comp"} className="list-group-item list-group-item-action">
              Hotels in Jhelum
            </Link>
            <Link to={"/Jhelum_attractions"} className="list-group-item list-group-item-action">
              Attractions in Jhelum
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-4 text-center">General Information about Jhelum</h2>

          {/* Image Section */}
          <img
            src="https://flypakistan.pk/assets/img/City/Jhelum.jpeg"
            alt="Aerial View of Faisalabad"
            className="img-fluid mb-3"
          />

          {/* Description Section */}
          <p>
            Jhelum is a city located on the right bank of the Jhelum River, situated in the Jhelum District in the northern part of Punjab province, Pakistan. It is the 44th largest city in Pakistan by population. Jhelum is an important city with historical significance, serving as a key location due to its strategic position along the river, and it has been a hub of cultural and economic activity in the region. The city's proximity to important cities and its historical sites make it a notable area in Punjab.
          </p>

          <p>
            Jhelum is famously known as the "City of Soldiers" or "Land of Martyrs and Warriors" due to its historical contribution of a large number of soldiers to the British Army before Pakistan's independence and subsequently to the Pakistani armed forces. The city's name is believed to be derived from the words "Jal" (clean water) and "Ham" (snow), referencing the pristine waters of the Jhelum River, which originates from the snow-capped Himalayas and flows through the city. Jhelum is also an industrial hub with a variety of industries surrounding the city. These include flour mills, tobacco processing, marble, glass, and wood factories, which contribute to the local economy. The combination of its strategic location, historical significance, and industrial presence makes Jhelum a prominent city in the region.
          </p>


          {/* Information Table */}
          <table className="table table-bordered mt-4">
            <tbody>
              <tr>
                <td><strong>Province</strong></td>
                <td>Punjab</td>
              </tr>
              <tr>
                <td><strong>Country</strong></td>
                <td>Pakistan</td>
              </tr>
              <tr>
                <td><strong>Area</strong></td>
                <td>234 km²</td>
              </tr>
              <tr>
                <td><strong>Population</strong></td>
                <td>190,425.00  Approx</td>
              </tr>
            </tbody>
          </table>
        </div>



      </div>
    </div>
  );
}

export default Jhelum_general;
