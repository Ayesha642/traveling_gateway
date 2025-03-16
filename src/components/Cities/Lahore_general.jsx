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
                    <h2 className="mb-4 text-center">General Information about Lahore</h2>

                    {/* Image Section */}
                    <img
                        src="https://flypakistan.pk/assets/img/City/Lahore.jpg"
                        alt="Aerial View of Faisalabad"
                        className="img-fluid mb-3"
                    />

                    {/* Description Section */}
                    <p>
                        Lahore is the capital of the Pakistani province of Punjab and stands as the country's second-largest city, following Karachi. It is also the 26th largest city in the world. Known for its rich history, vibrant culture, and economic strength, Lahore plays a pivotal role in Pakistan's growth. With an estimated GDP of $84 billion as of 2019, Lahore is one of Pakistan's wealthiest cities, contributing significantly to the nation’s economy. Its diverse industries, cultural heritage, and business opportunities make it a leading hub in the region
                    </p>

                    <p>
                        Lahore is frequently called the “City of Gardens” due to its large gardens and overgrown gardens, making it one of the most ignorant municipalities in Pakistan. The city boasts a rich history and is home to Pakistan's thriving Urdu film industry, commonly known as Lollywood. Lahore is also a prominent centre for Qawwali music, a traditional genre that has gained international acclaim. In addition to its cultural offerings, the city is home to some of Pakistan’s most iconic landmarks, such as the famous Badshahi Mosque, the historic Walled City, and the exquisite Wazir Khan Mosque. The city also hosts numerous Sufi and Sikh shrines, making it a spiritual centre that attracts a significant portion of Pakistan's tourism economy.
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
                                <td>1772 km²</td>
                            </tr>
                            <tr>
                                <td><strong>Population</strong></td>
                                <td>11,130,000.00 Approx</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}

export default Lahore_general;
