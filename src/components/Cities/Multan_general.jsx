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
          <h2>General Information about Multan</h2>
          <p>
            Here you can add information about Nathiagali, including its history, geography, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Multan_general;
