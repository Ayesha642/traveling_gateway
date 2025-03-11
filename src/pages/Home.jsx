import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>

            {/* <!-- This is section of background image --> */}
            <section className="container-fluid">
                <div className="image1">
                    <div className="row">

                        <div className="col-lg-2">
                        </div>

                        <div className="col-lg-8 mt-5 text-white">
                            <h1 className="mt-3">See the Pakistan, create your story."</h1>
                            <h4 className="mt-3">Traveling websites help users explore destinations, compare prices, and book flights, hotels, and activities easily.
                                They provide travel guides, reviews, and itinerary planning tools for a seamless travel experience.
                                A well-designed travel website offers a user-friendly interface, secure payments, and real-time booking updates.
                            </h4>
                        </div>

                        <div className="col-lg-2">
                        </div>
                    </div>
                </div>
            </section>
<br />
            {/* <!-- About section --> */}
            <section>
                <div className="ms-3 me-3 ">
                    <h4 className='p-2'>Exploration & Advanture Traveling Gateway| Destination Management Company & Inbound Tour Operator</h4>
                    <p className='p-2'>Exploration & Advanture Traveling Gatewayis an online Destination Management Company (DMC) & Inbound Tour
                        Operator, offering all sort of
                        Ground Handling Services in Pakistan including FIT Hotel Bookings, Group Tours, Fixed Departures Tours,
                        Schools / Colleges & Universities Educational & Leisure Tours, Rent A Car, Tour Guides, For Conferences
                        &
                        Event bookings you can contact Exploration & Advanture Traveling Gateway! Top dmc in pakistan.</p>
                    <p className='p-2'>
                        Exploration & Advanture Traveling Gateway Online Hotel Booking Portal www.flypakistan.pk is featured
                        with
                        over direct contracted rates
                        with more than 400+ Hotels over 45 cities in Pakistan. Best negotiated low rates & instant confirmation
                        of
                        hotel booking with 24 hours customer support this portal unique and its rapidly attracting Tourists,
                        Corporate houses & online Users.
                    </p>
                </div>

                {/* cards */}
                <div className="container-fluid mt-5">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h4>Our Services</h4>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card text-center m-2">
                                <div>
                                    <div>
                                        <div className="mt-3"><i className="fa-solid fa-hotel"></i></div>
                                        <h3 className="p-3"> Hotel Booking </h3>
                                    </div>
                                    <hr />
                                    <p>Book cheap hotels in Pakistan, <br />
                                        Enjoy Great Hotel deals and <br />
                                        amazing discounts with convenience. <br />
                                        Lowest Price Guaranteed, Support <br />
                                        team is available 24/7. <br />
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card text-center m-2">
                                <div>
                                    <div>
                                        <div className="mt-3"><i className="fa-solid fa-car"></i></div>
                                        <h3 className="p-3">Car Rental
                                        </h3>
                                    </div>
                                    <hr />
                                    <p>Book your car online with Explortion & <br />
                                        Advanture Travelling Gateway and enjoy your <br />
                                        trip. We have a 24/7 roadside assistance <br />
                                        service. Flexible rentals, No hidden <br />
                                        fees, Price Match Guarantee. <br />
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card text-center m-2">
                                <div>
                                    <div>
                                        <div className="mt-3"><i className="fa-solid fa-person-walking-luggage"></i></div>
                                        <h3 className="p-3">Tour Guides</h3>
                                    </div>
                                    <hr />
                                    <p>Get the best tour guide services & <br />
                                        vacation packages under one roof. <br />
                                        Book tour guides for thematic/classNameic <br />
                                        tours anywhere, anytime, both for <br />
                                        groups & individual travelers.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-5 mb-5">
                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="card text-center m-2">
                                <div>
                                    <div>
                                        <div className="mt-3"><i className="fa-solid fa-people-group"></i></div>
                                        <h3 className="p-3">Group Tours</h3>
                                    </div>
                                    <hr />
                                    <p>Looking for an adventure vacation? <br />
                                        Group adventure traveling done right! <br />
                                        We help you discover new destinations <br />
                                        and organize VIP group tours with <br />
                                        quality travel packages.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card text-center m-2">
                                <div>
                                    <div>
                                        <div className="mt-3"><i className="fa-solid fa-clipboard"></i></div>
                                        <h3 className="p-3">Customized Tours</h3>
                                    </div>
                                    <hr />
                                    <p>Create your trip exactly as you are <br />
                                        imagining it. A trip that fits your <br />
                                        needs and preferences We offer Private <br />
                                        & Custom Tours at a very discounted price, <br />
                                        Contact Us Anytime
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card text-center m-2">
                                <div>
                                    <div>
                                        <div className="mt-3"><i className="fa-solid fa-wine-glass"></i></div>
                                        <h3 className="p-3">Events & Conferences
                                        </h3>
                                    </div>
                                    <hr />
                                    <p>With Exciting, Adventurous and Diverse <br />
                                        Touring services we also help you to <br />
                                        arrange your Corporate Events and <br />
                                        conferences in a guaranteed peaceful <br />
                                        environment.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
<br />
            </section>
        </div>
    )
}

export default Home
