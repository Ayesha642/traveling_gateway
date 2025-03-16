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
                    <h2 className="mb-4 text-center">General Information about Islamabad</h2>

                    {/* Image Section */}
                    <img
                        src="https://flypakistan.pk/assets/img/City/Islamabad.jpg"
                        alt="Aerial View of Faisalabad"
                        className="img-fluid mb-3"
                    />

                    {/* Description Section */}
                    <p>
                    Islamabad is the capital city of Pakistan, governed by the federal government as part of the Islamabad Capital Territory. It is the ninth-largest city in Pakistan, and the larger Islamabad–Rawalpindi metropolitan area ranks as the third-largest metropolitan area in the country, with a population of approximately 4.1 million people.
                    </p>

                    <p>
                    Islamabad, the capital city of Pakistan, is home to numerous attractions that draw both locals and visitors alike. Known for its stunning natural features and excellent infrastructure, Islamabad is a city that offers a blend of modern living and scenic landscapes. Shakarparian and Margalla Hills National Park are two of the most well-known parks and forests in the city, offering green spaces for outdoor activities and nature enthusiasts. One of Islamabad's most iconic landmarks is the Faisal Mosque, the largest mosque in South Asia and the fifth-largest in the world, known for its unique architectural design. According to the Globalization and World Cities Research Network, Islamabad is classified as a Gamma+ city, highlighting its growing importance in the global urban network. The city also has the highest cost of living in Pakistan, and its population is primarily composed of middle and upper-middle-class residents.
                    </p>


                    {/* Information Table */}
                    <table className="table table-bordered mt-4">
                        <tbody>
                            <tr>
                                <td><strong>Province</strong></td>
                                <td>ICT</td>
                            </tr>
                            <tr>
                                <td><strong>Country</strong></td>
                                <td>Pakistan</td>
                            </tr>
                            <tr>
                                <td><strong>Area</strong></td>
                                <td>220 km²</td>
                            </tr>
                            <tr>
                                <td><strong>Population</strong></td>
                                <td>1,015,000.00 Approx</td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>
        </div>
    );
}

export default Islamabad_general;
