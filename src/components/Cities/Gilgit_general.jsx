import React from "react";
import { Link } from "react-router-dom";

function Gilgit_general() {
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
            <Link to={"/Skardu_attractions"} className="list-group-item list-group-item-action">
              Attractions in Gilgit
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <h2 className="mb-4 text-center">General Information about Gilgit</h2>

          {/* Image Section */}
          <img
            src="https://flypakistan.pk/assets/img/City/Gilgit.jpg"
            alt="Aerial View of Faisalabad"
            className="img-fluid mb-3"
          />

          {/* Description Section */}
          <p>
          Gilgit is the capital city of Gilgit-Baltistan, located in the northern region of Pakistan. The city sits in a wide valley at the confluence of the Hunza River and Gilgit River, surrounded by majestic mountains, making it a central hub for tourism and adventure activities. Known for its strategic location and breathtaking scenic beauty, Gilgit serves as the gateway to the Karakoram Highway and the famous Gilgit-Baltistan mountain ranges.
          </p>

          <p>
          Gilgit is a renowned tourist destination in Pakistan, serving as a gateway for hiking and mountaineering in the Karakoram mountain range. The city is surrounded by some of the world’s highest and most beautiful valleys, including Nagar Valley, Skardu, Ghizer Valley, Astore Valley, Shigar, and Hunza Valley. Historically significant, Gilgit was an important city along the Silk Road, acting as a “Buddhist corridor” that facilitated the spread of Buddhism from South Asia to Central Asia. Many Chinese monks passed through Gilgit on their way to Kashmir, where they studied and preached Buddhism. Today, Gilgit remains a hub for adventure tourism, offering unparalleled natural beauty and rich cultural heritage.
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
                <td>38000 km²</td>
              </tr>
              <tr>
                <td><strong>Population</strong></td>
                <td>1,492,924.00  Approx</td>
              </tr>
            </tbody>
          </table>
        </div>



      </div>
    </div>
  );
}

export default Gilgit_general;
