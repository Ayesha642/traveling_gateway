import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Islamabad/Hotel/f1.png'
// import f2 from '../../../public/Islamabad/Hotel/f2.png'
// import f3 from '../../../public/Islamabad/Hotel/f3.png'
// import f4 from '../../../public/Islamabad/Hotel/f4.png'
// import f5 from '../../../public/Islamabad/Hotel/f5.png'
// import f6 from '../../../public/Islamabad/Hotel/f6.png'
// import f7 from '../../../public/Islamabad/Hotel/f7.png'
// import f8 from '../../../public/Islamabad/Hotel/f8.png'
// import f9 from '../../../public/Islamabad/Hotel/f9.png'
const f1 = '/Islamabad/Hotel/f1.png';
const f2 = '/Islamabad/Hotel/f2.png';
const f3 = '/Islamabad/Hotel/f3.png';
const f4 = '/Islamabad/Hotel/f4.png';
const f5 = '/Islamabad/Hotel/f5.png';
const f6 = '/Islamabad/Hotel/f6.png';
const f7 = '/Islamabad/Hotel/f7.png';
const f8 = '/Islamabad/Hotel/f8.png';
const f9 = '/Islamabad/Hotel/f9.png';


function Islamabad_cmp() {
    return (
        <div>
            <section className="content-section">
                <div className="container">
                    <h1>Hotels in Islamabad | Book Best Hotels In Islamabad</h1>
                    <p>Looking to book cheap hotels in Islamabad? Look no further! Enjoy great hotel deals
                        & amazing discounts
                        for hotels in Islamabad. We guarantee the lowest prices for Islamabad hotels. Our
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
                                    alt="Destination Hotel Islamabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Islamabad Serena Hotel</h5>
                                    <p className="card-text">Khayaban-e-Suharwardy, G-5/1., 44000</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.8</span></p>
                                    <p className="card-text">
                                        Islamabad Serena Hotel welcomes guests with an outdoor swimming pool and relaxing spa treatments.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 2 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f2} className="card-img-top"
                                    alt="Destination Hotel Islamabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Islamabad Marriott Hotel</h5>
                                    <p className="card-text">Aga Khan Road, Shalimar 5, Pakistan , 46000 Islamabad,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.5</span></p>
                                    <p className="card-text">
                                        The 5-star Islamabad Marriott Hotel provides high-speed wireless internet, an indoor pool, and a
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f3} className="card-img-top"
                                    alt="Destination Hotel Islamabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Centaurus Hotel Apartments</h5>
                                    <p className="card-text">Jinnah Avenue The Centaurus Serviced Apartments, Blue</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">6.8</span></p>
                                    <p className="card-text">
                                        Situated in Islamabad, 3.7 km from Shah Faisal Mosque and 17 km from Lake View Park, Centaurus
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
                                    alt="Destination Hotel Islamabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Ramada by Wyndham Islamabad</h5>
                                    <p className="card-text">1 Club Road Murree Road, 44000 Islamabad,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 44,000 + Taxes: 20.75%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.9</span></p>
                                    <p className="card-text">
                                        Situated in Islamabad, 9 km from Shah Faisal Mosque, Ramada by Wyndham Islamabad features
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 5 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f5} className="card-img-top"
                                    alt="Destination Hotel Islamabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Best Western Premier Hotel Islamabad</h5>
                                    <p className="card-text">6 Club Rd, Shakar Parian, Islamabad, Islamabad Capital</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 38,000 + Taxes: 20.8%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.4</span></p>
                                    <p className="card-text">
                                        Best Western Premier hotel is located in Islamabad. Best Western Premier Islamabad offers 4-star
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f6} className="card-img-top"
                                    alt="Destination Hotel Islamabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Islamabad Regalia Hotel</h5>
                                    <p className="card-text">Street # 48, 1-1, Sector G-6/1, Islamabad, 44000,Islamabad</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 27,000 + Taxes: 20%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.5</span></p>
                                    <p className="card-text">
                                        Islamabad Regalia Hotel is located in Islamabad in sector G6. It is a 4-star hotel.
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
                                    alt="Destination Hotel Islamabad" />
                                <div className="card-body">
                                    <h5 className="card-title">The Margala</h5>
                                    <p className="card-text">Sahara Kashmir Rd, Shakar Parian, Islamabad, Islamabad</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 18,000 + Taxes: 20.75%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.3</span></p>
                                    <p className="card-text">
                                        The Margala Hotel is located in Islamabad near Shakar Parian. It is a 3-star hotel.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 8 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f8} className="card-img-top"
                                    alt="Destination Hotel Islamabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Elysium Apartments Islamabad</h5>
                                    <p className="card-text">Elysium Tower, Opposite Centaurus Mall, Blue Area.</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 20,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.8</span></p>
                                    <p className="card-text">
                                        Elysium Apartment Islamabad is located in the center of city Islamabad.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 9 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f9} className="card-img-top"
                                    alt="Destination Hotel Islamabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Avari Xpress</h5>
                                    <p className="card-text">Islamabad Express Highway, Service Rd E, Faizabad,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.8</span></p>
                                    <p className="card-text">
                                        Avari Xpress, Islamabad features a restaurant, fitness center, a shared lounge, and garden in Rawalpindi
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

export default Islamabad_cmp
