import React from "react";
import { Link } from "react-router-dom";

function Islamabad_general() {
    return (
        <div className="container my-4">
            <div className="row">
                {/* Left Sidebar */}
                <div className="col-md-3">
                    <div className="list-group">
                        <Link to={"/Islamabad_info"} className="list-group-item list-group-item-action">
                            Islamabad Travel Guide
                        </Link>
                        <Link to={"/Islamabad_general"} className="list-group-item list-group-item-action">
                            General Information
                        </Link>
                        <Link to={"/Islamabad_comp"} className="list-group-item list-group-item-action">
                            Hotels in Islamabad
                        </Link>
                        <Link to={"/Islamabad_attractions"} className="list-group-item list-group-item-action">
                            Attractions in Islamabad
                        </Link>
                        <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
                            Car Rental
                        </Link>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-md-9">
                    <h2>General Information about Islamabad</h2>
                    <p>
                        Here you can add information about Nathiagali, including its history, geography, and more.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Islamabad_general;
