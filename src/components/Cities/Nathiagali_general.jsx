import React from "react";
import { Link } from "react-router-dom";

function Nathiagali_general() {
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
                    <h2>General Information about Nathiagali</h2>
                    <p>
                        Here you can add information about Nathiagali, including its history, geography, and more.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Nathiagali_general;
