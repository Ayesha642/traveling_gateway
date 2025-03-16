import React from "react";
import { Link } from "react-router-dom";

function Hunza_general() {
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
          <h2 className="mb-4 text-center">General Information about Hunza</h2>

          {/* Image Section */}
          <img
            src="https://flypakistan.pk/assets/img/City/Hunza.jpeg"
            alt="Aerial View of Faisalabad"
            className="img-fluid mb-3"
          />

          {/* Description Section */}
          <p>
          The Hunza Valley is a picturesque mountainous valley located in the northern part of Gilgit-Baltistan, Pakistan. The valley is shaped by the Hunza River and is bordered by Shigar to the southeast, Ishkoman to the northwest, and the Xinjiang region of China to the northeast. To the north, the Wakhan Corridor of Afghanistan also borders the Hunza Valley. Known for its breathtaking landscapes, Hunza Valley is a top tourist destination in Gilgit-Baltistan, famous for its stunning views of snow-capped peaks and lush green valleys.
          </p>

          <p>
          Hunza Valley is renowned for its stunning tourist attractions, including the famous Ruby Mines, a major draw for visitors. In addition to its natural beauty, the valley is home to Hunza's two most famous forts: Baltit Fort and Altit Fort. The Altit Fort, located in Altit Village, is the oldest fort in northern Pakistan and a historical landmark. The towering mountains of Hunza are so vast that most peaks below 20,000 feet are unnamed. Three of the world's highest mountains can be viewed from Karimabad village: Ultar Sar (7,500m), the majestic Rakaposhi (7,788m), and Bublimotin or Ladyfinger Peak (7,400m).
          </p>


          {/* Information Table */}
          <table className="table table-bordered mt-4">
            <tbody>
              <tr>
                <td><strong>Province</strong></td>
                <td>Gilgit Baltistan</td>
              </tr>
              <tr>
                <td><strong>Country</strong></td>
                <td>Pakistan</td>
              </tr>
              <tr>
                <td><strong>Area</strong></td>
                <td>11660 km²</td>
              </tr>
              <tr>
                <td><strong>Population</strong></td>
                <td>243,324.00  Approx</td>
              </tr>
            </tbody>
          </table>
        </div>



      </div>
    </div>
  );
}

export default Hunza_general;
