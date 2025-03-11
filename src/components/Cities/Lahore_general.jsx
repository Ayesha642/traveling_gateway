import React from "react";
import { Link } from "react-router-dom";

function Lahore_general() {
    return (
        <div className="container my-4">
            <div className="row">
                {/* Left Sidebar */}
                <div className="col-md-3">
                    {/* You can style this sidebar to look like the one in your screenshot */}
                    <div className="list-group">
                        {/* Heading in the sidebar (optional) */}
                        <Link to={"/Lahore_info"} className="list-group-item list-group-item-action">
                            Lahore Travel Guide
                        </Link>

                        <Link to={"/Lahore_general"} className="list-group-item list-group-item-action">
                            General Information
                        </Link>
                        <Link to={"/Lahore_comp"} className="list-group-item list-group-item-action">
                            Hotels in Lahore
                        </Link>
                        <Link to={"/Lahore_attractions"} className="list-group-item list-group-item-action">
                            Attractions in Lahore
                        </Link>
                        <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
                            Car Rental
                        </Link>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-md-9">
                    <h2>General Information about Lahore</h2>
                    <p>
                        Here you can add information about Nathiagali, including its history, geography, and more.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Lahore_general;
