import React from 'react'
import { Link } from 'react-router-dom';

// import one from '../../public/Special_deal/one.jpg'
// import two from '../../public/Special_deal/two.jpg'
// import three from '../../public/Special_deal/three.jpg'
// import four from '../../public/Special_deal/four.jpg'
// import five from '../../public/Special_deal/five.jpg'
// import six from '../../public/Special_deal/six.jpg'
// import seven from '../../public/Special_deal/seven.jpg'
// import eight from '../../public/Special_deal/eight.jpg'
// import nine from '../../public/Special_deal/nine.png'

const one = '/Special_deal/one.jpg';
const two = '/Special_deal/two.jpg';
const three = '/Special_deal/three.jpg';
const four = '/Special_deal/four.jpg';
const five = '/Special_deal/five.jpg';
const six = '/Special_deal/six.jpg';
const seven = '/Special_deal/seven.jpg';
const eight = '/Special_deal/eight.jpg';
const nine = '/Special_deal/nine.png';


function Special_deal() {
    return (
        <div>
            <section className="content-section">
                <div className="container">
                    <h1>Special Packages for families: </h1>
                    <p>Our special packages for families are designed to bring loved ones closer while enjoying memorable
                        experiences together. Whether it’s a relaxing getaway, an adventure-filled vacation, or a cultural
                        retreat, these packages offer something for everyone. Tailored to fit the needs of families, they
                        include exclusive discounts, kid-friendly activities, and amenities to ensure comfort and convenience
                        for all ages. Spend quality time with your family while creating unforgettable moments at exceptional
                        value.
                    </p>
                </div>
            </section>

            {/* Card */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={one} className="card-img-top" alt="Hunza Tour" />
                                <div className="card-body">
                                    <h5 className="card-title">Skardu Tour Package (8 Days/7 Nights)</h5>
                                    <p className="card-text">Rs 220,000</p>
                                    <Link to={'/Booking_foam'}  className="btn btn-primary w-100">View Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={two} className="card-img-top" alt="Naran Kaghan Tour" />
                                <div className="card-body">
                                    <h5 className="card-title">Pakistan Tour Package (10 Days/9 Nights)</h5>
                                    <p className="card-text">Rs 199,000</p>
                                    <Link to={'/Booking_foam'}  className="btn btn-primary w-100">View Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={three} className="card-img-top" alt="Skardu Tour" />
                                <div className="card-body">
                                    <h5 className="card-title">Honeymoon Tour Package Swat (4 Days/3Nights)</h5>
                                    <p className="card-text">Rs 79,000</p>
                                    <Link to={'/Booking_foam'}  className="btn btn-primary w-100">View Details</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={four} className="card-img-top" alt="Hunza Tour" />
                                <div className="card-body">
                                    <h5 className="card-title">Family Tour Package Swat (4 Days/3 Nights)</h5>
                                    <p className="card-text">Rs 89,000</p>
                                    <Link to={'/Booking_foam'}  className="btn btn-primary w-100">View Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={five} className="card-img-top" alt="Naran Kaghan Tour" />
                                <div className="card-body">
                                    <h5 className="card-title">Honeymoon Tour Package Naran Kaghan(4 Days/3 Nights)</h5>
                                    <p className="card-text">Rs 89,000</p>
                                    <Link to={'/Booking_foam'}  className="btn btn-primary w-100">View Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={six} className="card-img-top" alt="Skardu Tour" />
                                <div className="card-body">
                                    <h5 className="card-title">Honeymoon Tour Package Swat (4 Days/3Nights)</h5>
                                    <p className="card-text">Rs 79,000</p>
                                    <Link to={'/Booking_foam'}  className="btn btn-primary w-100">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={seven} className="card-img-top" alt="Hunza Tour" />
                                <div className="card-body">
                                    <h5 className="card-title">4 Days Tour to Murree, Nathiagali & Shogran</h5>
                                    <p className="card-text">Rs 100,000 for couple </p>
                                    <Link to={'/Booking_foam'}  className="btn btn-primary w-100">View Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={eight} className="card-img-top" alt="Naran Kaghan Tour" />
                                <div className="card-body">
                                    <h5 className="card-title">Honeymoon Tour Package Naran Kaghan(4 Days/3 Nights)</h5>
                                    <p className="card-text">Rs 89,000</p>
                                    <Link to={'/Booking_foam'}  className="btn btn-primary w-100">View Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={nine} className="card-img-top" alt="Skardu Tour" />
                                <div className="card-body">
                                    <h5 className="card-title">Honeymoon Tour Package Swat (4 Days/3Nights)</h5>
                                    <p className="card-text">Rs 79,000</p>
                                    <Link to={'/Booking_foam'}  className="btn btn-primary w-100">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Special_deal
