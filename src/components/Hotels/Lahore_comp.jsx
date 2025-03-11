import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Lahore/Hotel/f1.png'
// import f2 from '../../../public/Lahore/Hotel/f2.png'
// import f3 from '../../../public/Lahore/Hotel/f3.png'
// import f4 from '../../../public/Lahore/Hotel/f4.png'
// import f5 from '../../../public/Lahore/Hotel/f5.png'
// import f6 from '../../../public/Lahore/Hotel/f6.png'
// import f7 from '../../../public/Lahore/Hotel/f7.png'
// import f8 from '../../../public/Lahore/Hotel/f8.png'
// import f9 from '../../../public/Lahore/Hotel/f9.png'

const f1 = '/Lahore/Hotel/f1.png';
const f2 = '/Lahore/Hotel/f2.png';
const f3 = '/Lahore/Hotel/f3.png';
const f4 = '/Lahore/Hotel/f4.png';
const f5 = '/Lahore/Hotel/f5.png';
const f6 = '/Lahore/Hotel/f6.png';
const f7 = '/Lahore/Hotel/f7.png';
const f8 = '/Lahore/Hotel/f8.png';
const f9 = '/Lahore/Hotel/f9.png';


function Lahore_comp() {
    return (
        <div>
            <section className="content-section">
                <div className="container">
                    <h1>Hotels in Lahore | Book Best Hotels In Lahore</h1>
                    <p>Looking to book cheap hotels in Lahore? Look no further! Enjoy great hotel deals
                        & amazing discounts
                        for hotels in Lahore. We guarantee the lowest prices for Lahore hotels. Our
                        support team is
                        available 24/7 to assist you throughout the booking process & address any queries
                        you may have.</p>
                    <p>We have a comprehensive list of 3-star to 5-star, near the airport & best hotels for
                        family.</p>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4">

                        {/* <!--  Card 1 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f1} className="card-img-top"
                                    alt="Destination Hotel Lahore" />
                                <div className="card-body">
                                    <h5 className="card-title">Pearl Continental Hotel Lahore</h5>
                                    <p className="card-text">Shahrah-e-Quaid-e-Azam, G.O.R. - I, Lahore,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.5</span></p>
                                    <p className="card-text">
                                        Pearl Continental Hotel is located in Lahore. It is a 5-star hotel that features an outdoor pool, a
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 2 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f2} className="card-img-top"
                                    alt="Destination Hotel Lahore" />
                                <div className="card-body">
                                    <h5 className="card-title">The Nishat Hotel Johar Town</h5>
                                    <p className="card-text">Adjacent to Emporium Mall, Main Abdul Haque Rd,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 30,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.3</span></p>
                                    <p className="card-text">
                                        The Nishat Hotel is located in Lahore. It is a 5-star hotel that features a restaurant, relaxation
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f3} className="card-img-top"
                                    alt="Destination Hotel Lahore" />
                                <div className="card-body">
                                    <h5 className="card-title">Avari Hotel</h5>
                                    <p className="card-text">Shahrah-e-Quaid-e-Azam, Garhi Shahu, Lahore, Punjab</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> Price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.7</span></p>
                                    <p className="card-text">
                                        Avari Hotel is located in Lahore. The hotel features an outdoor swimming pool, spa centre, fitness
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
                                    alt="Destination Hotel Lahore" />
                                <div className="card-body">
                                    <h5 className="card-title">Royal Swiss</h5>
                                    <p className="card-text">Opp. Cargo Complex, Allama Iqbal International Airport,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 20,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.4</span></p>
                                    <p className="card-text">
                                        Royal Swiss is located in Lahore. The hotel features a restaurant, outdoor pool, fitness centre,
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 5 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f5} className="card-img-top"
                                    alt="Destination Hotel Lahore" />
                                <div className="card-body">
                                    <h5 className="card-title">Park Lane Hotel Lahore</h5>
                                    <p className="card-text">107 B-3, M.M. Alam Road, Gulberg III, Gulberg, 54660</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 17,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.2</span></p>
                                    <p className="card-text">
                                        Park Lane Hotel Lahore is located in Lahore. The hotel features a seasonal outdoor pool, a fitness
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f6} className="card-img-top"
                                    alt="Destination Hotel Lahore" />
                                <div className="card-body">
                                    <h5 className="card-title">Ramada by Wyndham Lahore Gulberg II</h5>
                                    <p className="card-text">Gurumangat Road N-24,25 Gulberg ii Lahore Pakistan,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 24,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">9.0</span></p>
                                    <p className="card-text">
                                        Ramada by Wyndham hotel is located in Lahore. The hotel features a restaurant, a fitness
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
                                    alt="Destination Hotel Lahore" />
                                <div className="card-body">
                                    <h5 className="card-title">The Nishat Hotel</h5>
                                    <p className="card-text">Gulberg,Lahore</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 26,500 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.5</span></p>
                                    <p className="card-text">
                                        The Nishat Hotel Gulberg is located in Lahore. The hotel features an indoor pool, airport shuttle service,
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 8 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f8} className="card-img-top"
                                    alt="Destination Hotel Lahore" />
                                <div className="card-body">
                                    <h5 className="card-title">Indigo Heights Hotel & Suites</h5>
                                    <p className="card-text">3-C3 Noor Jahan Road Gulberg-3, Gulberg, 54000</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 13,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.9</span></p>
                                    <p className="card-text">
                                        Indigo Heights Hotel & Suites is located in Lahore. The hotel features a restaurant, an outdoor
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 9 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f9} className="card-img-top"
                                    alt="Destination Hotel Lahore" />
                                <div className="card-body">
                                    <h5 className="card-title">Luxus Grand Hotel</h5>
                                    <p className="card-text">4-Egerton Road, Opposite Aiwan-e-Iqbal, Lahore., 54000</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 14,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">9.3</span></p>
                                    <p className="card-text">
                                        Luxus Grand Hotel is located in Lahore. The hotel features a gym, a swimming pool, a restaurant, a
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

export default Lahore_comp
