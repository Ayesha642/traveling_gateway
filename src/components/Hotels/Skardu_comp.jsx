import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Skardu/Hotel/f1.png'
// import f2 from '../../../public/Skardu/Hotel/f2.png'
// import f3 from '../../../public/Skardu/Hotel/f3.png'
// import f4 from '../../../public/Skardu/Hotel/f4.png'
// import f5 from '../../../public/Skardu/Hotel/f5.png'
// import f6 from '../../../public/Skardu/Hotel/f6.png'
// import f7 from '../../../public/Skardu/Hotel/f7.png'
// import f8 from '../../../public/Skardu/Hotel/f8.png'
// import f9 from '../../../public/Skardu/Hotel/f9.png'
const f1 = '/Skardu/Hotel/f1.png';
const f2 = '/Skardu/Hotel/f2.png';
const f3 = '/Skardu/Hotel/f3.png';
const f4 = '/Skardu/Hotel/f4.png';
const f5 = '/Skardu/Hotel/f5.png';
const f6 = '/Skardu/Hotel/f6.png';
const f7 = '/Skardu/Hotel/f7.png';
const f8 = '/Skardu/Hotel/f8.png';
const f9 = '/Skardu/Hotel/f9.png';

function Skardu_comp() {
    return (
        <div>
            <section className="content-section">
                <div className="container">
                    <h1>Hotels in Skardu | Book Best Hotels In Skardu</h1>
                    <p>Looking to book cheap hotels in Skardu? Look no further! Enjoy great hotel deals
                        & amazing discounts
                        for hotels in Skardu. We guarantee the lowest prices for Skardu hotels. Our
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
                                    alt="Destination Hotel Skardu" />
                                <div className="card-body">
                                    <h5 className="card-title">Pc Legacy Skardu</h5>
                                    <p className="card-text">JSR, Gamba Skardu,Skardu</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price On Call
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8</span></p>
                                    <p className="card-text">
                                        Located in Skardu, PC Legacy Skardu offers 4-star accommodations with a garden,
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 2 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f2} className="card-img-top"
                                    alt="Destination Hotel Skardu" />
                                <div className="card-body">
                                    <h5 className="card-title">Khoj Resort Skardu</h5>
                                    <p className="card-text">Jarba Zhou Rd, Shigar, Gilgit-Baltistan,Skardu</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 29000 + Taxes: 13%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.2</span></p>
                                    <p className="card-text">
                                        Khoj Resort Shigar is a 4-star hotel located in Skardu. It has a garden.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f3} className="card-img-top"
                                    alt="Destination Hotel Skardu" />
                                <div className="card-body">
                                    <h5 className="card-title">Serena Shigar Fort</h5>
                                    <p className="card-text">Skardu shigar valley,Skardu</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PRICE ON CALL
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.1</span></p>
                                    <p className="card-text">
                                        Serena Shigar Fort is a Historic Heritage Hotel In Pakistan.
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
                                    alt="Destination Hotel Skardu" />
                                <div className="card-body">
                                    <h5 className="card-title">Shangrilla Resort Skardu</h5>
                                    <p className="card-text">Lower Kachura Lake Suite No 1.First Floor. Areej Towers.E-</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR  23500 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.1</span></p>
                                    <p className="card-text">
                                        Shangrilla Resort Skardu hotel was named SHANGRILA after a book titled “LOST HORIZON” written
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 5 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f5} className="card-img-top"
                                    alt="Destination Hotel Skardu" />
                                <div className="card-body">
                                    <h5 className="card-title">Himmel Skardu by Luxus</h5>
                                    <p className="card-text">Wazirpor, Shigar, Valley, Skardu, Baltistan, Gilgit-</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> 31500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.8</span></p>
                                    <p className="card-text">
                                        Himmal Skardu by Luxus is newly build hotel in Shigar Skardu. It is a 5-star hotel.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f6} className="card-img-top"
                                    alt="Destination Hotel Skardu" />
                                <div className="card-body">
                                    <h5 className="card-title">Serena Khaplu Palace</h5>
                                    <p className="card-text">Serena Khaplu Palace, Chaqchan Road, Sargiab،</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.6</span></p>
                                    <p className="card-text">
                                        Featuring free WiFi throughout the property, Serena Khaplu Palace offers accommodation in Khapalu.a
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
                                    alt="Destination Hotel Skardu" />
                                <div className="card-body">
                                    <h5 className="card-title">BYARSA HOTEL SKARDU</h5>
                                    <p className="card-text">Lower Kachura, Shangrila Road, Gulshan Abad, Skardu,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong>PKR 33000 +Taxes:16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.3</span></p>
                                    <p className="card-text">
                                        BYARSA HOTEL SKARDU has a restaurant and bar. The property features a garden, as well as a
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 8 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f8} className="card-img-top"
                                    alt="Destination Hotel Skardu" />
                                <div className="card-body">
                                    <h5 className="card-title">Dynasty Skardu</h5>
                                    <p className="card-text">411 Kushmora Road, Gayool, Skardu,Skardu</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 16500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.4</span></p>
                                    <p className="card-text">
                                        Dynasty Hotel is located in Skardu City. It is a luxury Hotel.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 9 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f9} className="card-img-top"
                                    alt="Destination Hotel Skardu" />
                                <div className="card-body">
                                    <h5 className="card-title">Harriot Skardu</h5>
                                    <p className="card-text">7MV4 497, Gulshan e Ali, Skardu,Skardu</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 14000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7</span></p>
                                    <p className="card-text">
                                        Harriot Hotel is located in skardu city area. It is newly build 3-star hotel in Skardu.
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

export default Skardu_comp
