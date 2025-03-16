import React from "react";
import { Link } from "react-router-dom";

function Skardu_general() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <Link to={"/Skardu_info"} className="list-group-item list-group-item-action">
              Skardu Travel Guide
            </Link>
            <Link to={"/Skardu_general"} className="list-group-item list-group-item-action">
              General Information
            </Link>
            <Link to={"/Skardu_comp"} className="list-group-item list-group-item-action">
              Hotels in Skardu
            </Link>
            <Link to={"/Skardu_attractions"} className="list-group-item list-group-item-action">
              Attractions in Skardu
            </Link>
            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
              Car Rental
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
                    <h2 className="mb-4 text-center">General Information about Skardu</h2>

                    {/* Image Section */}
                    <img
                        src="https://flypakistan.pk/assets/img/City/Skardu.jpeg"
                        alt="Aerial View of Faisalabad"
                        className="img-fluid mb-3"
                    />

                    {/* Description Section */}
                    <p>
                    Skardu is a prominent city located in Gilgit-Baltistan, Pakistan, serving as the capital of both the Baltistan Division and Skardu District. The city acts as a major gateway to the eight-thousanders of the nearby Karakoram mountain range, attracting adventurers, trekkers, and mountaineers from around the world. Situated at an elevation of nearly 2,500 meters (8,202 feet) in the Skardu Valley, it is positioned at the confluence of the Shigar and Indus Rivers, offering a picturesque and breathtaking landscape
                    </p>

                    <p>
                    Skardu is renowned worldwide for its mountaineering and climbing opportunities. The region is home to K2, the world’s second-highest mountain and Pakistan’s tallest peak at an altitude of 8,611 meters. Skardu’s traditions, culture, landscape, and hospitality attract millions of tourists every year, making it a must-visit destination for adventurers. Along with Gilgit, it serves as a major hub for trekking, tourism, and expeditions in Gilgit–Baltistan. Tourists, hikers, and mountaineers from across the globe flock to Skardu to experience its high-altitude environment, which is home to four of the world’s 14 eight-thousanders, making it a prime location for outdoor exploration.
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
                                <td>77 km²</td>
                            </tr>
                            <tr>
                                <td><strong>Population</strong></td>
                                <td>214,848.00 Approx</td>
                            </tr>
                        </tbody>
                    </table>
                </div>




      </div>
    </div>
  );
}

export default Skardu_general;
