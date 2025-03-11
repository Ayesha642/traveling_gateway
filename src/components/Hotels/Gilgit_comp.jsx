import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Gilgit/Hotel/f1.png'
// import f2 from '../../../public/Gilgit/Hotel/f2.png'
// import f3 from '../../../public/Gilgit/Hotel/f3.png'
// import f4 from '../../../public/Gilgit/Hotel/f4.png'
// import f5 from '../../../public/Gilgit/Hotel/f5.png'
// import f6 from '../../../public/Gilgit/Hotel/f6.png'
// import f7 from '../../../public/Gilgit/Hotel/f7.png'
// import f8 from '../../../public/Gilgit/Hotel/f8.png'
// import f9 from '../../../public/Gilgit/Hotel/f9.png'

const f1 = '/Gilgit/Hotel/f1.png';
const f2 = '/Gilgit/Hotel/f2.png';
const f3 = '/Gilgit/Hotel/f3.png';
const f4 = '/Gilgit/Hotel/f4.png';
const f5 = '/Gilgit/Hotel/f5.png';
const f6 = '/Gilgit/Hotel/f6.png';
const f7 = '/Gilgit/Hotel/f7.png';
const f8 = '/Gilgit/Hotel/f8.png';
const f9 = '/Gilgit/Hotel/f9.png';


function Gilgit_comp() {
    return (
        <div>
            <section className="content-section">
                <div className="container">
                    <h1>Hotels in Gilgit | Book Best Hotels In Gilgit</h1>
                    <p>Looking to book cheap hotels in Gilgit? Look no further! Enjoy great hotel deals
                        & amazing discounts
                        for hotels in Gilgit. We guarantee the lowest prices for Gilgit hotels. Our
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
                                    alt="Destination Hotel Gilgit" />
                                <div className="card-body">
                                    <h5 className="card-title">Destination Hotel Gilgit</h5>
                                    <p className="card-text">Near Gilgit Baltistan Assembly, Jutial, Gilgit,Gilgit</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 15,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.5</span></p>
                                    <p className="card-text">
                                        Our 4 – Star Destination Hotel Gilgit is located adjacent to Gilgit–Baltistan Assembly
                                        in the heart of
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 2 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f2} className="card-img-top"
                                    alt="Destination Hotel Gilgit" />
                                <div className="card-body">
                                    <h5 className="card-title">Park Hotel Gilgit</h5>
                                    <p className="card-text">Airport Rd, Kashirot, Gilgit, Gilgit-Baltistan 15100,Gilgit</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 7,500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.0</span></p>
                                    <p className="card-text">
                                        Park hotel is situated in the heart of the Gilgit city, just at a walking distance from
                                        the airport. It offers
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f3} className="card-img-top"
                                    alt="Destination Hotel Gilgit" />
                                <div className="card-body">
                                    <h5 className="card-title">Gilgit Serena Hotel</h5>
                                    <p className="card-text">Jutial, Gilgit, Gilgit-Baltistan 15100.,Gilgit</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.6</span></p>
                                    <p className="card-text">
                                        Gilgit Serena Hotel features 5-star accommodation with a garden and a terrace. Among the
                                        facilities of this
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
                                    alt="Destination Hotel Gilgit" />
                                <div className="card-body">
                                    <h5 className="card-title">Ramada by Wyndham Gilgit</h5>
                                    <p className="card-text">Gilgit Rd, Sakwar, Gilgit, 15101,Gilgit</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 18,500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.8</span></p>
                                    <p className="card-text">
                                        Ramada By Wyndham Gilgit is a newly build 4-star hotel located in Gilgit.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 5 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f5} className="card-img-top"
                                    alt="Destination Hotel Gilgit" />
                                <div className="card-body">
                                    <h5 className="card-title">Avari Xpress Gilgit</h5>
                                    <p className="card-text">Jutial Plaza, Gilgit,Gilgit</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.4</span></p>
                                    <p className="card-text">
                                        Avari Xpress Gilgit is located in the main city of Gilgit near Jutail. It is a 4-star
                                        hotel.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f6} className="card-img-top"
                                    alt="Destination Hotel Gilgit" />
                                <div className="card-body">
                                    <h5 className="card-title">Kallisto Hotel Gilgit</h5>
                                    <p className="card-text">Babar Rd, Gilgit, 15100,Gilgit</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 14,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.0</span></p>
                                    <p className="card-text">
                                        Kallisto Hotel is a hotel chain of Darbar Hunza. It is located in Gilgit near Gilgit
                                        Airport.
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
                                    alt="Destination Hotel Gilgit" />
                                <div className="card-body">
                                    <h5 className="card-title">Indus lodges Gilgit</h5>
                                    <p className="card-text">River View Road, 15100 Gilgit.,Gilgit</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 7,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.0</span></p>
                                    <p className="card-text">
                                        Indus lodges Gilgit is located in Gilgit. The hotel features a bar, a lawn, a terrace, a
                                        restaurant, and car
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 8 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f8} className="card-img-top"
                                    alt="Destination Hotel Gilgit" />
                                <div className="card-body">
                                    <h5 className="card-title">Citi Hotel Gilgit</h5>
                                    <p className="card-text">Airport Rd, Shaheed saif ur rehman link road kashirot</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 4,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">6.5</span></p>
                                    <p className="card-text">
                                        Citi Hotel Gilgit is located on Airport road, Shaheed Saif Ur Rehman link Road. Citi
                                        hotel Gilgit
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 9 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f9} className="card-img-top"
                                    alt="Destination Hotel Gilgit" />
                                <div className="card-body">
                                    <h5 className="card-title">Tourist Hamlet Hotel</h5>
                                    <p className="card-text">Khomer Chowk Shahre Quaid Azam gilgit,Gilgit</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 4,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">6.5</span></p>
                                    <p className="card-text">
                                        Tourist Hamlet Hotel is located in Gilgit-Baltistan. The hotel offers BBQ facilities,
                                        Kid meals and
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

export default Gilgit_comp
