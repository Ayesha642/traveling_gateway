import React from "react";
import { Link } from "react-router-dom";

function Naran_general() {
    return (
        <div className="container my-4">
            <div className="row">
                {/* Left Sidebar */}
                        <div className="col-md-3">
                          <div className="list-group">
                            <Link to={"/Naran_info"} className="list-group-item list-group-item-action">
                              Naran Travel Guide
                            </Link>
                            <Link to={"/Naran_general"} className="list-group-item list-group-item-action">
                              General Information
                            </Link>
                            <Link to={"/Naran_comp"} className="list-group-item list-group-item-action">
                              Hotels in Naran
                            </Link>
                            <Link to={"/Naran_attractions"} className="list-group-item list-group-item-action">
                              Attractions in Naran
                            </Link>
                            <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
                              Car Rental
                            </Link>
                          </div>
                        </div>

                {/* Main Content */}
                <div className="col-md-9">
                    <h2 className="mb-4 text-center">General Information about Naran</h2>

                    {/* Image Section */}
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8EQO5T9SjFMr0uouNtfro9MlJY8nzCfb7g&s"
                        alt="Aerial View of Faisalabad"
                        className="img-fluid mb-3"
                    />

                    {/* Description Section */}
                    <p>
                    Naran is a picturesque town nestled in the upper Kaghan Valley in Mansehra District, located in the Khyber Pakhtunkhwa province of Pakistan. This charming town is situated at an impressive altitude of 2,409 meters (7,904 ft), offering breathtaking views of the surrounding mountains and valleys. Naran is approximately 65 kilometres (40 miles) from Babusar Top and 119 kilometres (74 miles) from Mansehra city, making it a popular destination for tourists seeking a peaceful retreat in the mountains
                    </p>

                    <p>
                    Naran is a popular tourist destination due to its pleasant weather and stunning landscapes, attracting thousands of visitors each year. The town serves as a gateway to Gilgit Hunza via the Babusar Pass during the summer months. Naran’s bustling Naran Bazaar becomes incredibly crowded in peak season, with numerous restaurants and hotels catering to tourists. Naran is renowned for its breathtaking scenery, featuring snow-capped mountains, the Kunhar River, and several crystal-clear lakes, including Lulusar Lake, Dutipatsar Lake, Payala Lake, Lake Saiful Malook, and Saral Lake. These natural wonders make Naran a must-visit destination for nature lovers and adventure seekers.
                    </p>


                    {/* Information Table */}
                    <table className="table table-bordered mt-4">
                        <tbody>
                            <tr>
                                <td><strong>Province</strong></td>
                                <td>KPK</td>
                            </tr>
                            <tr>
                                <td><strong>Country</strong></td>
                                <td>Pakistan</td>
                            </tr>
                            <tr>
                                <td><strong>Area</strong></td>
                                <td>2409 km²</td>
                            </tr>
                            <tr>
                                <td><strong>Population</strong></td>
                                <td>1,669.00 Approx</td>
                            </tr>
                        </tbody>
                    </table>
                </div>




            </div>
        </div>
    );
}

export default Naran_general;
