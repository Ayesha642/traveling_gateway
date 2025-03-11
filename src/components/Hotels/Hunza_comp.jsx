import React from 'react'
import { Link } from 'react-router-dom';

// import f1 from '../../../public/Hunza/Hotel/f1.png'
// import f2 from '../../../public/Hunza/Hotel/f2.png'
// import f3 from '../../../public/Hunza/Hotel/f3.png'
// import f4 from '../../../public/Hunza/Hotel/f4.png'
// import f5 from '../../../public/Hunza/Hotel/f5.png'
// import f6 from '../../../public/Hunza/Hotel/f6.png'
// import f7 from '../../../public/Hunza/Hotel/f7.png'
// import f8 from '../../../public/Hunza/Hotel/f8.png'
// import f9 from '../../../public/Hunza/Hotel/f9.png'

const f1 = '/Hunza/Hotel/f1.png';
const f2 = '/Hunza/Hotel/f2.png';
const f3 = '/Hunza/Hotel/f3.png';
const f4 = '/Hunza/Hotel/f4.png';
const f5 = '/Hunza/Hotel/f5.png';
const f6 = '/Hunza/Hotel/f6.png';
const f7 = '/Hunza/Hotel/f7.png';
const f8 = '/Hunza/Hotel/f8.png';
const f9 = '/Hunza/Hotel/f9.png';


function Hunza_comp() {
    return (
        <div>
            <section className="content-section">
                <div className="container">
                    <h1>Hotels in Hunza | Book Best Hotels In Hunza</h1>
                    <p>Looking to book cheap hotels in Hunza? Look no further! Enjoy great hotel deals
                        & amazing discounts
                        for hotels in Hunza. We guarantee the lowest prices for Hunza hotels. Our
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
                                    alt="Destination Hotel Hunza" />
                                <div className="card-body">
                                    <h5 className="card-title">Best Western Premier Hunza</h5>
                                    <p className="card-text">Main KKH Road Near Karimabad Ganish, Hunza.</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 13,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.0</span></p>
                                    <p className="card-text">
                                        Located in the heart of Ganish, Best Western Premier Hunza has 52 aesthetically
                                        furnished rooms along
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 2 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f2} className="card-img-top"
                                    alt="Destination Hotel Hunza" />
                                <div className="card-body">
                                    <h5 className="card-title">Hunza Serena Hotel</h5>
                                    <p className="card-text">Zeropoint, Hunza, Karimabad,Hunza</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.2</span></p>
                                    <p className="card-text">
                                        Hunza Serena Hotel is newly build hotel in Karimabad Hunza. It is a 5-star hotel.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f3} className="card-img-top"
                                    alt="Destination Hotel Hunza" />
                                <div className="card-body">
                                    <h5 className="card-title">Luxus Hunza Attabad Lake Resort</h5>
                                    <p className="card-text">Hunza, Gojal, Gojal, Aina Abad, Attabad, Gilgit-</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 13,500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.7</span></p>
                                    <p className="card-text">
                                        Luxus Hunza Resort is located at Hunza. The hotel room features a balcony with a view of
                                        the lake
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
                                    alt="Destination Hotel Hunza" />
                                <div className="card-body">
                                    <h5 className="card-title">Serena Altit Fort Residence</h5>
                                    <p className="card-text">Altit Fort, Hunza, Altit, Gilgit-Baltistan.,Hunza</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.9</span></p>
                                    <p className="card-text">
                                        Situated in Hunza.
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 5 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f5} className="card-img-top"
                                    alt="Destination Hotel Hunza" />
                                <div className="card-body">
                                    <h5 className="card-title">PC Legacy Hunza</h5>
                                    <p className="card-text">Nasirabad, Tehsil Aliabad, Hunza, Gilgit-Baltistan.,Hunza</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.0</span></p>
                                    <p className="card-text">
                                        PC Legacy Hunza is located in Nasirabad, Hunza. It is a 5-star hotel chain of Pearl
                                        Continental
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f6} className="card-img-top"
                                    alt="Destination Hotel Hunza" />
                                <div className="card-body">
                                    <h5 className="card-title">Darbar Hunza</h5>
                                    <p className="card-text">Hunza Karimabad,Hunza</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 18,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.3</span></p>
                                    <p className="card-text">
                                        Darbar Hunza hotel is located in Hunza. The hotel features a beautiful view of mountains
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
                                    alt="Destination Hotel Hunza" />
                                <div className="card-body">
                                    <h5 className="card-title">Eagle Nest Hunza</h5>
                                    <p className="card-text">Hunza Chowk, Hunza, Gilgit,Hunza</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 13,500 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">7.5</span></p>
                                    <p className="card-text">
                                        Eagle Nest hotel is located in Hunza. The hotel features a garden, a restaurant, a
                                        balcony, a closet in
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!--  Card 8 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f8} className="card-img-top"
                                    alt="Destination Hotel Hunza" />
                                <div className="card-body">
                                    <h5 className="card-title">Ambiance Resort Hunza</h5>
                                    <p className="card-text">Taltakdas, Hunza, Ali Abad, 15600,Hunza</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> price on call.
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">9.2</span></p>
                                    <p className="card-text">
                                        Ambiance Resort Hunza is offering accommodations in Hunza Valley. This 5-star hotel
                                        offers room
                                    </p>
                                    <Link to={'/Booking_foam'} className="btn btn-success w-100">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 9 --> */}
                        <div className="col-md-4">
                            <div className="card h-100 custom-card">
                                <img src={f9} className="card-img-top"
                                    alt="Destination Hotel Hunza" />
                                <div className="card-body">
                                    <h5 className="card-title">Moksha Resort Hunza</h5>
                                    <p className="card-text">Moksha Resorts, Chamangul Road Gulmit, Gojal Hunza,</p>
                                    <p className="card-text">
                                        <strong>Price/Night:</strong> PKR 18,000 + Taxes: included
                                    </p>
                                    <p className="card-text">Review Score: <span className="badge bg-success">8.0</span></p>
                                    <p className="card-text">
                                        Moksha Resorts is located in Gulmit Hunza. It is a 4-star hotel.
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

export default Hunza_comp
