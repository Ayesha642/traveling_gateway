import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Nathiagali/Hotel/f1.png'
// import f2 from '../../../public/Nathiagali/Hotel/f2.png'
// import f3 from '../../../public/Nathiagali/Hotel/f3.png'
// import f4 from '../../../public/Nathiagali/Hotel/f4.png'
// import f5 from '../../../public/Nathiagali/Hotel/f5.png'
// import f6 from '../../../public/Nathiagali/Hotel/f6.png'
// import f7 from '../../../public/Nathiagali/Hotel/f7.png'
// import f8 from '../../../public/Nathiagali/Hotel/f8.png'
// import f9 from '../../../public/Nathiagali/Hotel/f9.png'

const f1 = '/Nathiagali/Hotel/f1.png';
const f2 = '/Nathiagali/Hotel/f2.png';
const f3 = '/Nathiagali/Hotel/f3.png';
const f4 = '/Nathiagali/Hotel/f4.png';
const f5 = '/Nathiagali/Hotel/f5.png';
const f6 = '/Nathiagali/Hotel/f6.png';
const f7 = '/Nathiagali/Hotel/f7.png';
const f8 = '/Nathiagali/Hotel/f8.png';
const f9 = '/Nathiagali/Hotel/f9.png';



function Nathiagali_cmp() {
    return (
        <div>

            <section className="content-section">
                <div className="container">
                    <h1>Hotels in Nathiagali | Book Best Hotels In Nathiagali</h1>
                    <p>Looking to book cheap hotels in Nathiagali? Look no further! Enjoy great hotel deals
                        & amazing discounts
                        for hotels in Nathiagali. We guarantee the lowest prices for Nathiagali hotels. Our
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
                                    alt="Destination Hotel Nathiagali" />
                                <div className="card-body">
                                    <h5 className="card-title">Alpine Hotel & Resort</h5>
                                    <p className="card-text">Alpine Hotel And Resorts NathiyaGali,Nathiagali</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 37,000 + Taxes: 5%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">9.2</span></p>
                                    <p className="card-text">
                                        Alpine Hotel & Resort is located in Nathia Gali. Ayubia National Park and Murree Hills are worth
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 2 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f2} className="card-img-top"
                                    alt="Destination Hotel Nathiagali" />
                                <div className="card-body">
                                    <h5 className="card-title">Hotel Elites</h5>
                                    <p className="card-text">Adjacent Civil Hospital, Nathiagali, 22280 Kālābāgh,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 19,500 + Taxes: 13%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.8</span></p>
                                    <p className="card-text">
                                        Hotel Elites is located in Nathia Gali. The hotel features a communal lounge, a business
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f3} className="card-img-top"
                                    alt="Destination Hotel Nathiagali" />
                                <div className="card-body">
                                    <h5 className="card-title">Hummingbird Resort & Executive Suites</h5>
                                    <p className="card-text">Murree, Abbottabad Rd, Changla Gali,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 24,500 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7</span></p>
                                    <p className="card-text">
                                        Featuring free WIFI, a restaurant and a barbecue, Mahgul Resort offers accommodation in Murree,
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
                                    alt="Destination Hotel Nathiagali" />
                                <div className="card-body">
                                    <h5 className="card-title">Qubed Nathiagali</h5>
                                    <p className="card-text">Gali Banian, Abbottabad, Khyber</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 10,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.0</span></p>
                                    <p className="card-text">
                                        Destination Hotel Thandiani offers 4-star accommodation with a garden, a terrace, and a
                                        restaurant.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 5 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f5} className="card-img-top"
                                    alt="Destination Hotel Nathiagali" />
                                <div className="card-body">
                                    <h5 className="card-title">Republika Urban Abbottabad</h5>
                                    <p className="card-text">Comsats University Rd, Al Mansoor Town,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 6,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">6</span></p>
                                    <p className="card-text">
                                        Republika Urban, nestled in the charming Musa Zai Colony of Abbottabad, Pakistan, offers
                                        a
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f6} className="card-img-top"
                                    alt="Destination Hotel Nathiagali" />
                                <div className="card-body">
                                    <h5 className="card-title">Republika Central Abbottabad</h5>
                                    <p className="card-text">Peer Bandi Rd, Bandi Dhundan,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 6,500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">6</span></p>
                                    <p className="card-text">
                                        Republika Central, nestled in the charming Musa Zai Colony in Abbottabad, Pakistan,
                                        offers a
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
                                    alt="Destination Hotel Nathiagali" />
                                <div className="card-body">
                                    <h5 className="card-title">Destination Hotel Thandiani</h5>
                                    <p className="card-text">Gali Banian, Abbottabad, Khyber</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 10,000 + Taxes: 16%
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.0</span></p>
                                    <p className="card-text">
                                        Destination Hotel Thandiani offers 4-star accommodation with a garden, a terrace, and a
                                        restaurant.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 8 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f8} className="card-img-top"
                                    alt="Destination Hotel Nathiagali" />
                                <div className="card-body">
                                    <h5 className="card-title">Republika Urban Abbottabad</h5>
                                    <p className="card-text">Comsats University Rd, Al Mansoor Town,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 6,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">6</span></p>
                                    <p className="card-text">
                                        Republika Urban, nestled in the charming Musa Zai Colony of Abbottabad, Pakistan, offers
                                        a
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 9 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f9} className="card-img-top"
                                    alt="Destination Hotel Nathiagali" />
                                <div className="card-body">
                                    <h5 className="card-title">Republika Central Abbottabad</h5>
                                    <p className="card-text">Peer Bandi Rd, Bandi Dhundan,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 6,500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">6</span></p>
                                    <p className="card-text">
                                        Republika Central, nestled in the charming Musa Zai Colony in Abbottabad, Pakistan,
                                        offers a
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

export default Nathiagali_cmp
