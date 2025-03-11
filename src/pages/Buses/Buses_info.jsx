import React from 'react'
import { Link } from 'react-router-dom';

// import one from '../../../public/Buses/one.png'
// import two from '../../../public/Buses/two.png'
// import three from '../../../public/Buses/three.png'
// import four from '../../../public/Buses/four.png'
// import five from '../../../public/Buses/five.png'
// import six from '../../../public/Buses/six.png'

const one = '/Buses/one.png';
const two = '/Buses/two.png';
const three = '/Buses/three.png';
const four = '/Buses/four.png';
const five = '/Buses/five.png';
const six = '/Buses/six.png';


function Buses_info() {
    return (
        <div>
            <section class="content-section">
                <div class="container">
                    <h1>Car Rentals - Best Rent A Car Service </h1>
                    <p>Exploration & Travelling Gateway provide the Best Rent-A-Car. Our
                        customers, who come from Lahore, Karachi, Interior Sindh, and some of the Gulf countries, really
                        love our service. We are trying to provide the best quality vehicle as per the demands of our
                        customers. Our team is experienced with the Northern Areas of Pakistan for the tourists who come for
                        holidays and honeymoon trips. We have the best fleet and team to accommodate them at reasonable
                        rates. </p>
                </div>
            </section>

            <section class="py-5">
                <div class="container">
                    <div class="row g-4 ">

                        <div class="col-md-4">
                            <div class="card h-100 custom-card">
                                <img src={one} class="card-img-top" alt="Buses" />
                                <div class="card-body">
                                    <h5 class="card-title">HONDA BRV</h5>
                                    <Link to={'/Buses_foam'} class="btn btn-success w-100">7500/ pkr per day</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card h-100 custom-card">
                                <img src={two} class="card-img-top" alt="Buses" />
                                <div class="card-body">
                                    <h5 class="card-title">Suzuki APV VAN</h5>
                                    <Link to={'/Buses_foam'} class="btn btn-success w-100">7500/ pkr per day</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card h-100 custom-card">
                                <img src={three} class="card-img-top" alt="Buses" />
                                <div class="card-body">
                                    <h5 class="card-title">Toyota Grand Cabin 13 Seater</h5>
                                    <Link to={'/Buses_foam'} class="btn btn-success w-100">7500/ pkr per day</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-5">
                <div class="container">
                    <div class="row g-4">

                        <div class="col-md-4">
                            <div class="card h-100 custom-card">
                                <img src={four} class="card-img-top" alt="Buses" />
                                <div class="card-body">
                                    <h5 class="card-title">Toyota Corolla Gli</h5>
                                    <Link to={'/Buses_foam'} class="btn btn-success w-100">7500/ pkr per day</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card h-100 custom-card">
                                <img src={five} alt="Buses" />
                                <div class="card-body">
                                    <h5 class="card-title">Coaster Saloon 22/Seats</h5>
                                    <Link to={'/Buses_foam'} class="btn btn-success w-100">7500/ pkr per day</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card h-100 custom-card">
                                <img src={six} class="card-img-top" alt="Buses" />
                                <div class="card-body">
                                    <h5 class="card-title">Honda City Aspire 1.5</h5>
                                    <Link to={'/Buses_foam'} class="btn btn-success w-100">7500/ pkr per day</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Buses_info
