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
                    <h2 className="mb-4 text-center">General Information about Nathiagali</h2>

                    {/* Image Section */}
                    <img
                        src="https://flypakistan.pk/assets/img/blog/WhatsApp%20Image%202023-07-27%20at%2014.55.07.jpeg"
                        alt="Aerial View of Faisalabad"
                        className="img-fluid mb-3"
                    />

                    {/* Description Section */}
                    <p>
                    Nathia Gali is a charming hill station and mountain resort town located in the Abbottabad District of Khyber Pakhtunkhwa, Pakistan. Situated at the heart of the Galiyat range, Nathia Gali is one of the most popular hill stations in the region. The town’s stunning landscapes, cool climate, and natural beauty make it a sought-after destination for tourists looking to escape the heat and hustle of the plains. Its central location in the Galiyat range places it alongside other famous hill stations, offering visitors a perfect blend of serenity and adventure.
                    </p>

                    <p>
                    Nathia Gali is renowned for its scenic beauty, pleasant weather, and exceptional hiking tracks, which are significantly cooler than the rest of the Galiyat range due to its higher altitude. This alpine resort is a popular tourist destination, attracting nature enthusiasts and adventure seekers alike. From May to August, Nathia Gali’s breathtaking landscape becomes a paradise for hikers, offering a variety of nature trails and wildlife experiences. A must-see route in Nathia Gali is the picturesque trail leading to Thandiani, passing through Dagri Naka. The natural surroundings of Nathia Gali are awe-inspiring, with deep oak forests, lush green meadows, and towering pine and cedar trees. The mist that envelops the area during July and August adds to its magical allure, while the snowfall in winter enhances the town's beauty, creating a winter wonderland perfect for tourists.
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
                                <td> km²</td>
                            </tr>
                            <tr>
                                <td><strong>Population</strong></td>
                                <td>18,500.00 Approx</td>
                            </tr>
                        </tbody>
                    </table>
                </div>




            </div>
        </div>
    );
}

export default Nathiagali_general;
