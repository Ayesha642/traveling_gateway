import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Faisalabad/Hotel/f1.png'
// import f2 from '../../../public/Faisalabad/Hotel/f2.png'
// import f3 from '../../../public/Faisalabad/Hotel/f3.png'
// import f4 from '../../../public/Faisalabad/Hotel/f4.png'
// import f5 from '../../../public/Faisalabad/Hotel/f5.png'
// import f6 from '../../../public/Faisalabad/Hotel/f6.png'
// import f7 from '../../../public/Faisalabad/Hotel/f7.png'
// import f8 from '../../../public/Faisalabad/Hotel/f8.png'
// import f9 from '../../../public/Faisalabad/Hotel/f9.png'

const f1 = '/Faisalabad/Hotel/f1.png';
const f2 = '/Faisalabad/Hotel/f2.png';
const f3 = '/Faisalabad/Hotel/f3.png';
const f4 = '/Faisalabad/Hotel/f4.png';
const f5 = '/Faisalabad/Hotel/f5.png';
const f6 = '/Faisalabad/Hotel/f6.png';
const f7 = '/Faisalabad/Hotel/f7.png';
const f8 = '/Faisalabad/Hotel/f8.png';
const f9 = '/Faisalabad/Hotel/f9.png';


function Faisalabad_comp() {
    return (
        <div>
                <section className="content-section">
                    <div className="container">
                        <h1>Hotels in Faisalabad | Book Best Hotels In Faisalabad</h1>
                        <p>Looking to book cheap hotels in Faisalabad? Look no further! Enjoy great hotel deals
                            & amazing discounts
                            for hotels in Faisalabad. We guarantee the lowest prices for Faisalabad hotels. Our
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
                                        alt="Destination Hotel Faisalabad" />
                                    <div className="card-body">
                                        <h5 className="card-title">TEST HOTEL</h5>
                                        <p className="card-text">Canal Road Faisalabad,Faisalabad</p>
                                        <p className="card-text">
                                            <strong>Price/Night:</strong> PKR 0 + Taxes: 12%
                                        </p>
                                        <p className="card-text">Review Score: <span
                                            className="badge bg-success">0</span></p>
                                        <p className="card-text">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                                            consectetur quidem
                                            architecto tenetur mollitia velit officiis temporibus quae
                                            doloremque consequatur.
                                        </p>
                                        <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                    </div>
                                </div>
                            </div>

                            {/* <!--  Card 2 --> */}
                            <div className="col-md-4">
                                <div className="card h-100 custom-card">
                                    <img src={f2} className="card-img-top"
                                        alt="Destination Hotel Faisalabad" />
                                    <div className="card-body">
                                        <h5 className="card-title">Serena Hotel</h5>
                                        <p className="card-text">Club Road, Civil Lines,Faisalabad</p>
                                        <p className="card-text">
                                            <strong>Price/Night:</strong> Price on call.
                                        </p>
                                        <p className="card-text">Review Score: <span
                                            className="badge bg-success">8.0</span></p>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Perferendis quisquam omnis
                                            sunt harum impedit error.
                                        </p>
                                        <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card 3 --> */}
                            <div className="col-md-4">
                                <div className="card h-100 custom-card">
                                    <img src={f3} className="card-img-top"
                                        alt="Destination Hotel Faisalabad" />
                                    <div className="card-body">
                                        <h5 className="card-title">Avari Xpress Kohinoor</h5>
                                        <p className="card-text">12C Jaranwala Rd, Kohinoor City
                                            Faisalabad.,Faisalabad</p>
                                        <p className="card-text">
                                            <strong>Price/Night:</strong> Price on call.
                                        </p>
                                        <p className="card-text">Review Score: <span
                                            className="badge bg-success">8.0</span></p>
                                        <p className="card-text">
                                            Avari Xpress Kohinoor is located in Faisalabad, Punjab. This
                                            hotel features a
                                            restaurant, and a car
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
                                        alt="Destination Hotel Faisalabad" />
                                    <div className="card-body">
                                        <h5 className="card-title">Hotel One Faisalabad</h5>
                                        <p className="card-text">99 C, People Colony 1 D Ground, Punjab, 38040
                                        </p>
                                        <p className="card-text">
                                            <strong>Price/Night:</strong> PKR 13,500 + Taxes: 16%
                                        </p>
                                        <p className="card-text">Review Score: <span
                                            className="badge bg-success">8.3</span></p>
                                        <p className="card-text">
                                            Hotel one is located in Faisalabad, Punjab. The hotel offers a
                                            fitness center, a
                                            spa,
                                            four dining venues, an
                                        </p>
                                        <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                    </div>
                                </div>
                            </div>

                            {/* <!--  Card 5 --> */}
                            <div className="col-md-4">
                                <div className="card h-100 custom-card">
                                    <img src={f5} className="card-img-top"
                                        alt="Destination Hotel Faisalabad" />
                                    <div className="card-body">
                                        <h5 className="card-title">Circle Club Faisalabad</h5>
                                        <p className="card-text">Kashmir Road, West Canal, 38000 Faisalabad</p>
                                        <p className="card-text">
                                            <strong>Price/Night:</strong> PKR 12,000 + Taxes: +Taxes:16%
                                        </p>
                                        <p className="card-text">Review Score: <span
                                            className="badge bg-success">6.9</span></p>
                                        <p className="card-text">
                                            Circle Club is located in Faisalabad, Punjab. It is a 4-star
                                            hotel with a garden, a
                                            patio, an indoor
                                        </p>
                                        <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card 6 --> */}
                            <div className="col-md-4">
                                <div className="card h-100 custom-card">
                                    <img src={f6} className="card-img-top"
                                        alt="Destination Hotel Faisalabad" />
                                    <div className="card-body">
                                        <h5 className="card-title">West Inn Hotel Faisalabad</h5>
                                        <p className="card-text">123-Regency International, 949 Mall Road,
                                            Faisalabad,
                                            38000,Faisalabad
                                        </p>
                                        <p className="card-text">
                                            <strong>Price/Night:</strong> PKR 10,000 + Taxes: 16%
                                        </p>
                                        <p className="card-text">Review Score: <span
                                            className="badge bg-success">7.4</span></p>
                                        <p className="card-text">
                                            Hotel West inn Faisalabad is a former Best Western Hotel. It is
                                            located on a prime
                                            location of
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
                                        alt="Destination Hotel Faisalabad" />
                                    <div className="card-body">
                                        <h5 className="card-title">OXYGYM CLUB Hotel & Suites</h5>
                                        <p className="card-text">Sargodha Road 2nd Floor, Pearl City Towers,
                                            38000</p>
                                        <p className="card-text">
                                            <strong>Price/Night:</strong> PKR 9,500 + Taxes: 16%
                                        </p>
                                        <p className="card-text">Review Score: <span
                                            className="badge bg-success">7.8</span></p>
                                        <p className="card-text">
                                            Oxygym Club Hotel & Suites is located in Pearl City Mall
                                            Faisalabad. It is a 3-star
                                            hotel with a
                                        </p>
                                        <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                    </div>
                                </div>
                            </div>

                            {/* <!--  Card 8 --> */}
                            <div className="col-md-4">
                                <div className="card h-100 custom-card">
                                    <img src={f8} className="card-img-top"
                                        alt="Destination Hotel Faisalabad" />
                                    <div className="card-body">
                                        <h5 className="card-title">ROYALTON HOTEL FAISALABAD</h5>
                                        <p className="card-text">P-1270-West Canal Road,Abdullah Pur, 38000</p>
                                        <p className="card-text">
                                            <strong>Price/Night:</strong> PKR 9,000 + Taxes:16%
                                        </p>
                                        <p className="card-text">Review Score: <span
                                            className="badge bg-success">6.3</span></p>
                                        <p className="card-text">
                                            Royalton Hotel is located in Faisalabad, Punjab. The hotel has a
                                            restaurant, a gym,
                                            a
                                            shared lounge,
                                        </p>
                                        <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card 9 --> */}
                            <div className="col-md-4">
                                <div className="card h-100 custom-card">
                                    <img src={f9} className="card-img-top"
                                        alt="Destination Hotel Faisalabad" />
                                    <div className="card-body">
                                        <h5 className="card-title">Grand Regent Hotel and Suites</h5>
                                        <p className="card-text">Hakeem Sultan Ahmad Dawoodi Road, Peoples</p>
                                        <p className="card-text">
                                            <strong>Price/Night:</strong> PKR 9,000 + Taxes: 16%
                                        </p>
                                        <p className="card-text">Review Score: <span
                                            className="badge bg-success">7.2</span></p>
                                        <p className="card-text">
                                            Grand Regent Hotel and Suites is located in Faisalabad, Punjab.
                                            The hotel features a
                                            restaurant, a setting
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

export default Faisalabad_comp
