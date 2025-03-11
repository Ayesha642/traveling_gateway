import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Hydrabad/Hotel/f1.png'
// import f2 from '../../../public/Hydrabad/Hotel/f2.png'
// import f3 from '../../../public/Hydrabad/Hotel/f3.png'
// import f4 from '../../../public/Hydrabad/Hotel/f4.png'


const f1 = '/Hydrabad/Hotel/f1.png';
const f2 = '/Hydrabad/Hotel/f2.png';
const f3 = '/Hydrabad/Hotel/f3.png';
const f4 = '/Hydrabad/Hotel/f4.png';

function Hydrabad_comp() {
    return (
        <div>
            <section className="content-section">
                <div className="container">
                    <h1>Hotels in Hydrabad | Book Best Hotels In Hydrabad</h1>
                    <p>Looking to book cheap hotels in Hydrabad? Look no further! Enjoy great hotel deals
                        & amazing discounts
                        for hotels in Hydrabad. We guarantee the lowest prices for Hydrabad hotels. Our
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
                                    alt="Destination Hotel Hydrabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Hotel Indus</h5>
                                    <p className="card-text">Thandi Sarak, opposite Niaz Stadium، GOR</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 13,000 + Taxes: 15%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.2</span></p>
                                    <p className="card-text">
                                        Indus Hotel is located in Hyderabad and features a terrace, a restaurant, a fitness center, rooms with
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 2 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f2} className="card-img-top"
                                    alt="Destination Hotel Hydrabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Hotel Crown</h5>
                                    <p className="card-text">A/21 Block C, Auto Bahn Rd, Latifabad No 7,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 7,500 + Taxes: 13%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7</span></p>
                                    <p className="card-text">
                                        Hotel Crown is located in Hyderabad. The hotel features a terrace, each room with a wardrobe,
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f3} className="card-img-top"
                                    alt="Destination Hotel Hydrabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Imperial Inn Hotel</h5>
                                    <p className="card-text">B-13 Auto Bahn Rd, behind Ideas by G.A, Hyderabad, Sindh 71800,Hyderabad</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 5,500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7</span></p>
                                    <p className="card-text">
                                        Imperial Inn Hotel is located in Hyderabad, Sindh. The hotel features a terrace, Asian breakfast, a
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
                                    alt="Destination Hotel Hydrabad" />
                                <div className="card-body">
                                    <h5 className="card-title">Pc Inn Guest House</h5>
                                    <p className="card-text">Auto Bahn Rd, Latifabad Unit # 3 Latifabad, Hyderabad,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 5,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.0</span></p>
                                    <p className="card-text">
                                        Pc Inn Guest House is located in Hyderabad. The hotel features a terrace, private check-in/check-out,
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

export default Hydrabad_comp
