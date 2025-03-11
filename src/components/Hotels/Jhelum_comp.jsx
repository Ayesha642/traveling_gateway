import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Jhelum/Hotel/f1.png'
const f1 = '/Jhelum/Hotel/f1.png';


function Jhelum_comp() {
    return (
        <div>
            <section className="content-section">
                <div className="container">
                    <h1>Hotels in Jhelum | Book Best Hotels In Jhelum</h1>
                    <p>Looking to book cheap hotels in Jhelum? Look no further! Enjoy great hotel deals
                        & amazing discounts
                        for hotels in Jhelum. We guarantee the lowest prices for Jhelum hotels. Our
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
                                    alt="Destination Hotel Jhelum" />
                                <div className="card-body">
                                    <h5 className="card-title">Khan Plaza And Suites</h5>
                                    <p className="card-text">opposite Masjid Bilal, Model Colony Jhelum, Punjab</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 4,500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">6.2</span></p>
                                    <p className="card-text">
                                        Khan Plaza and suites is located in Jhelum, within 800 m of Jhelum and 1.7 km of Dhok Abdullah
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

export default Jhelum_comp
