import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Multan/Hotel/f1.png'
// import f2 from '../../../public/Multan/Hotel/f2.png'
// import f3 from '../../../public/Multan/Hotel/f3.png'
// import f4 from '../../../public/Multan/Hotel/f4.png'
// import f5 from '../../../public/Multan/Hotel/f5.png'
// import f6 from '../../../public/Multan/Hotel/f6.png'
// import f7 from '../../../public/Multan/Hotel/f7.png'
// import f8 from '../../../public/Multan/Hotel/f8.png'

const f1 = '/Multan/Hotel/f1.png';
const f2 = '/Multan/Hotel/f2.png';
const f3 = '/Multan/Hotel/f3.png';
const f4 = '/Multan/Hotel/f4.png';
const f5 = '/Multan/Hotel/f5.png';
const f6 = '/Multan/Hotel/f6.png';
const f7 = '/Multan/Hotel/f7.png';
const f8 = '/Multan/Hotel/f8.png';


function Multan_comp() {
    return (
        <div>
            <section className="content-section">
                <div className="container">
                    <h1>Hotels in Multan | Book Best Hotels In Multan</h1>
                    <p>Looking to book cheap hotels in Multan? Look no further! Enjoy great hotel deals
                        & amazing discounts
                        for hotels in Multan. We guarantee the lowest prices for Multan hotels. Our
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
                                    alt="Destination Hotel Multan" />
                                <div className="card-body">
                                    <h5 className="card-title">Rumanza by Pearl Continental</h5>
                                    <p className="card-text">Rumanza Golf & Country Club, Multan, Punjab</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.0</span></p>
                                    <p className="card-text">
                                        Rumanza by Pearl Continental Hotel is located in Multan. It is a 5-star hotel by Pearl Continental
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 2 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f2} className="card-img-top"
                                    alt="Destination Hotel Multan" />
                                <div className="card-body">
                                    <h5 className="card-title">Ramada by Wyndham</h5>
                                    <p className="card-text">78- Abdali Rd, Multan,Multan</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 19,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.5</span></p>
                                    <p className="card-text">
                                        Ramada by Wyndham is located in Multan. The hotel features an outdoor pool, BBQ facilities, a
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f3} className="card-img-top"
                                    alt="Destination Hotel Multan" />
                                <div className="card-body">
                                    <h5 className="card-title">Avari Boutique</h5>
                                    <p className="card-text">In-front of Multan High Court، Kaswar Gardezi Road, Shadman Colony, Multan.,Multan</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.3</span></p>
                                    <p className="card-text">
                                        Avari Boutique is located in Multan. The hotel features a fitness centre, a restaurant, currency
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
                                    alt="Destination Hotel Multan" />
                                <div className="card-body">
                                    <h5 className="card-title">Avari Xpress Court Road</h5>
                                    <p className="card-text">Old Bahawalpur Road Opposite High Court,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.9</span></p>
                                    <p className="card-text">
                                        Avari Xpress is located in Multan. This is the perfect place for families. The hotel features a shuttle
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 5 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f5} className="card-img-top"
                                    alt="Destination Hotel Multan" />
                                <div className="card-body">
                                    <h5 className="card-title">Hotel One Tariq Road</h5>
                                    <p className="card-text">59 B, Tariq Road Punjab, 60000 Multan,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 14,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8</span></p>
                                    <p className="card-text">
                                        Hotel One is located in Multan. The hotel features a rental car, complimentary toiletries and offers
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f6} className="card-img-top"
                                    alt="Destination Hotel Multan" />
                                <div className="card-body">
                                    <h5 className="card-title">Falettis Grand Hotel Multan</h5>
                                    <p className="card-text">Building No.8 Chowk, Azmat Wasti Rd, opposite iqbal park</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 14,500 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.5</span></p>
                                    <p className="card-text">
                                        Falettis Grand Hotel is located in Multan. It is a 4-star Hotel.
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
                                    alt="Destination Hotel Multan" />
                                <div className="card-body">
                                    <h5 className="card-title">Chalet Multan</h5>
                                    <p className="card-text">Main Airport Road, Old Jamilabad Road, Jamilabad</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 9,500 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.3</span></p>
                                    <p className="card-text">
                                        The Chalet hotel is located in Multan. The hotel offers car rental services, a minibar, a sun terrace,
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 8 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f8} className="card-img-top"
                                    alt="Destination Hotel Multan" />
                                <div className="card-body">
                                    <h5 className="card-title">Hotel One Lalazar Colony</h5>
                                    <p className="card-text">9 Lalazar Old, Bahawalpur Road, 60000 Multan</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 12,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.4</span></p>
                                    <p className="card-text">
                                        Hotel One is located in Multan. The hotel features en suite bathrooms, a fitness centre, a business centre, a
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

export default Multan_comp
