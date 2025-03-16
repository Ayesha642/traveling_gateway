import React from "react";
import { Link } from "react-router-dom";

function Multan_general() {
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
          <h2 className="mb-4 text-center">General Information about Multan</h2>

          {/* Image Section */}
          <img
            src="https://flypakistan.pk/assets/img/City/Multan.jpg"
            alt="Aerial View of Faisalabad"
            className="img-fluid mb-3"
          />

          {/* Description Section */}
          <p>
          Multan is the capital of the Multan Division in Punjab, Pakistan, located along the banks of the Chenab River. As the 7th largest city in Pakistan, Multan serves as the major cultural and economic center of Southern Punjab. With a history that spans back to antiquity, Multan is renowned for its rich cultural heritage, historical landmarks, and significance in the region's development.
          </p>

          <p>
          Multan, known for its rich history and cultural significance, is famous for its many Sufi shrines. Among these is the unique rectangular tomb of Shah Gardezi, dating back to the 1150s, adorned with Multan's iconic blue enameled tiles. Another notable site is the shrine of Shamsuddin Sabzwari, built in 1330, featuring a striking green dome. Besides its spiritual landmarks, Multan is renowned for its mosques, vast cotton farms, and fruit production, especially mangoes, which are famous worldwide. The city is located at a strategic bend formed by five rivers in central Pakistan, adding to its historical and geographical significance.
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
                <td>286 km²</td>
              </tr>
              <tr>
                <td><strong>Population</strong></td>
                <td>1,872,000.00   Approx</td>
              </tr>
            </tbody>
          </table>
        </div>



      </div>
    </div>
  );
}

export default Multan_general;
