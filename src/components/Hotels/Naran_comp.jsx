import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Naran/Hotel/f1.png'
// import f2 from '../../../public/Naran/Hotel/f2.png'
// import f3 from '../../../public/Naran/Hotel/f3.png'
// import f4 from '../../../public/Naran/Hotel/f4.png'
// import f5 from '../../../public/Naran/Hotel/f5.png'
// import f6 from '../../../public/Naran/Hotel/f6.png'
// import f7 from '../../../public/Naran/Hotel/f7.png'
// import f8 from '../../../public/Naran/Hotel/f8.png'
// import f9 from '../../../public/Naran/Hotel/f9.png'

const f1 = '/Naran/Hotel/f1.png';
const f2 = '/Naran/Hotel/f2.png';
const f3 = '/Naran/Hotel/f3.png';
const f4 = '/Naran/Hotel/f4.png';
const f5 = '/Naran/Hotel/f5.png';
const f6 = '/Naran/Hotel/f6.png';
const f7 = '/Naran/Hotel/f7.png';
const f8 = '/Naran/Hotel/f8.png';
const f9 = '/Naran/Hotel/f9.png';


function Naran_comp() {
    return (
        <div>
            <section className="content-section">
                <div className="container">
                    <h1>Hotels in Naran | Book Best Hotels In Naran </h1>
                    <p>Looking to book cheap hotels in Naran? Look no further! Enjoy great hotel deals
                        & amazing discounts
                        for hotels in Naran. We guarantee the lowest prices for Naran hotels. Our
                        support team is
                        available 24/7 to assist you throughout the booking process & address any queries
                        you may have.</p>
                    <p>We have a comprehensive list of 3-star to 5-star, near the airport & best hotels for
                        family.</p>
                </div>
            </section>

            {/* <!-- This is a section of cards --> */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-4">

                        {/* <!--  Card 1 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f1} className="card-img-top"
                                    alt="Destination Hotel Naran" />
                                <div className="card-body">
                                    <h5 className="card-title">Mount Hayat Naran</h5>
                                    <p className="card-text">Naran Bazaar, Mansehra, Khyber Pakhtunkhwa,Naran</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 20000 + Taxes: 5%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">9.2</span></p>
                                    <p className="card-text">
                                        Mount Hayat Hotel Naran is newly build hotel in Naran. It is a 4-star hotel.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 2 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f2} className="card-img-top"
                                    alt="Destination Hotel Naran" />
                                <div className="card-body">
                                    <h5 className="card-title">The Sarai Hotel & Resort</h5>
                                    <p className="card-text">Saiful Muluk Rd, Katha, Naran, Mansehra, Khyber</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 23500 + Taxes: 13%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.8</span></p>
                                    <p className="card-text">
                                        The Sarai Hotel & Resort is located in Naran. The hotel features simple but elegant rooms, a restaurant
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f3} className="card-img-top"
                                    alt="Destination Hotel Naran" />
                                <div className="card-body">
                                    <h5 className="card-title">The Barcelo Naran</h5>
                                    <p className="card-text">Saiful Muluk Rd, Katha, Naran, Mansehra, Khyber Pakhtunkhwa,Naran7.0</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR  17000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.4</span></p>
                                    <p className="card-text">
                                        The Barcelo Apartments is located in Naran. It is newly build hotel in Naran.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4">

                        {/* <!--  Card 4 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f4} className="card-img-top"
                                    alt="Destination Hotel Naran" />
                                <div className="card-body">
                                    <h5 className="card-title">Naran Creek Hotel</h5>
                                    <p className="card-text">Naran, Mansehra, Khyber Pakhtunkhwa,Naran</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR  12000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.2</span></p>
                                    <p className="card-text">
                                        Naran Creek Hotel is located in Naran. The hotel features a restaurant, a garden a terrace and
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 5 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f5} className="card-img-top"
                                    alt="Destination Hotel Naran" />
                                <div className="card-body">
                                    <h5 className="card-title">Millennium Inn Hotel</h5>
                                    <p className="card-text">Main Bazar،, near PTDC, Naran,Naran,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> 13500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.2</span></p>
                                    <p className="card-text">
                                        Millennium Inn Hotel is located in Naran. The hotel features simple and clean rooms with all basic
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f6} className="card-img-top"
                                    alt="Destination Hotel Naran" />
                                <div className="card-body">
                                    <h5 className="card-title">Hummingbird Resort and Executive Suites Batakundi</h5>
                                    <p className="card-text">Batakundi, Mansehra, Khyber Pakhtunkhwa,Naran</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 6,500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.8</span></p>
                                    <p className="card-text">
                                        Hummingbird Resort and Executive Suites is located in Batakundi, Naran. The hotel features a
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4">

                        {/* <!--  Card 7 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f7} className="card-img-top"
                                    alt="Destination Hotel Naran" />
                                <div className="card-body">
                                    <h5 className="card-title">Hotel Home Naran</h5>
                                    <p className="card-text">Naran Bypass Road، Naran, Mansehra, Khyber</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 12000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.0</span></p>
                                    <p className="card-text">
                                        The Hotel Home is located in Naran. The hotel features a garden, room service, rooms with private
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 8 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f8} className="card-img-top"
                                    alt="Destination Hotel Naran" />
                                <div className="card-body">
                                    <h5 className="card-title">Hotel One Naran</h5>
                                    <p className="card-text">Main By Pass Road 75000, Naran, Mansehra, Khyber</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 16500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.2</span></p>
                                    <p className="card-text">
                                        Hotel One Naran is located in Naran. The hotel features neat and clean rooms with a private
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 9 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f9} className="card-img-top"
                                    alt="Destination Hotel Naran" />
                                <div className="card-body">
                                    <h5 className="card-title">Jovial Gold Hotel</h5>
                                    <p className="card-text">Naran Bypass Road، Naran, Mansehra, Khyber</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 10000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7</span></p>
                                    <p className="card-text">
                                        Jovial Gold Naran is located in Naran at Jheel road. It is a 3-star Hotel with 68 rooms
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Naran_comp
