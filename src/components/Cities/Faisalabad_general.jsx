import React from "react";
import { Link } from "react-router-dom";

function Faisalabad_general() {
    return (
        <div className="container my-4">
            <div className="row">
                {/* Left Sidebar */}
                <div className="col-md-3">
                    <div className="list-group">
                        <Link to={"/Faisalabad_info"} className="list-group-item list-group-item-action">
                            Faisalabad Travel Guide
                        </Link>
                        <Link to={"/Faisalabad_general"} className="list-group-item list-group-item-action">
                            General Information
                        </Link>
                        <Link to={"/Faisalabad_comp"} className="list-group-item list-group-item-action">
                            Hotels in Faisalabad
                        </Link>
                        <Link to={"/Faisalabad_attractions"} className="list-group-item list-group-item-action">
                            Attractions in Faisalabad
                        </Link>
                        <Link to={"/Buses_info"} className="list-group-item list-group-item-action">
                            Car Rental
                        </Link>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-md-9">
                    <h2 className="mb-4 text-center">General Information about Faisalabad</h2>

                    {/* Image Section */}
                    <img
                        src="https://flypakistan.pk/assets/img/City/Faisalabad.jpeg"
                        alt="Aerial View of Faisalabad"
                        className="img-fluid mb-3"
                    />

                    {/* Description Section */}
                    <p>
                        Faisalabad, formerly known as Lyallpur, holds the prestigious title of the
                        "Manchester of Pakistan" due to its thriving textile industry and historical
                        significance in trade and commerce. As the third-most populous city in Pakistan—
                        following Karachi and Lahore—it stands as a bustling urban hub. Located in the
                        fertile eastern province of Punjab, Faisalabad is also the second-largest city in the
                        region, making it a vital contributor to the country’s economy. Renowned for its
                        industrial prowess, Faisalabad is not just a centre for textiles but also a melting pot
                        of culture, history, and innovation. The city plays a pivotal role in Pakistan’s
                        agricultural output, further solidifying its importance in the national framework.
                    </p>

                    <p>
                        Faisalabad is widely recognised as the “Centre of the Textile Industry” in Pakistan,
                        contributing to nearly half of the country's total textile exports. This thriving
                        industrial hub is not only vital to Pakistan’s economy but also a beacon of educational
                        excellence and innovation. The city proudly hosts the internationally acclaimed
                        University of Agriculture Faisalabad (UAF), a leader in agricultural research and
                        education. Alongside it stands the renowned Ayub Agricultural Research Institute,
                        a cornerstone of agricultural advancements in the region. Faisalabad is also home
                        to the Punjab Medical College, which has been instrumental in producing skilled
                        healthcare professionals for decades.
                    </p>

                    <p>
                        In addition to these prestigious institutions, Faisalabad boasts a range of other
                        educational establishments, including the Superior Science College, Textile College,
                        Commerce College, and the Poly-Technical College, catering to diverse academic and
                        technical disciplines. These institutions collectively contribute to the city’s reputation
                        as a centre for knowledge and innovation, alongside its industrial dominance.
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
                                <td>1300 km²</td>
                            </tr>
                            <tr>
                                <td><strong>Population</strong></td>
                                <td>3,203,846 Approx</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default Faisalabad_general;
