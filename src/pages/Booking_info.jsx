import React from 'react'
import { Link } from 'react-router-dom';

function Booking_info() {
    return (
        <div>
            <section>
                <div className="container mt-5 mb-5">
                    <div className="card8 shadow p-4">
                        <div className="card-header">
                            <h4 className="colour">Online Booking Foam</h4>
                        </div>
                        <div className="card-body">
                            <form id="tourForm">
                                <div className="mb-3">
                                    <label for="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder=""/>
                                        <small className="error d-none">This field is required.</small>
                                </div>
                                <div className="mb-3">
                                    <label for="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder=""/>
                                        <small className="error d-none">This field is required.</small>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Your Email</label>
                                    <input type="email" className="form-control" id="email" placeholder=""/>
                                        <small className="error d-none">A valid email is required.</small>
                                </div>
                                <div className="mb-3">
                                    <label for="phone" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="phone" placeholder=""/>
                                        <small className="error d-none">This field is required.</small>
                                </div>
                                <div className="mb-3">
                                    <label for="destination" className="form-label">Destination</label>
                                    <input type="text" className="form-control" id="destination" placeholder=""/>
                                        <small className="error d-none">This field is required.</small>
                                </div>
                                <div className="mb-3">
                                    <label for="numberOfPeople" className="form-label">Number of People</label>
                                    <input type="number" className="form-control" id="numberOfPeople" placeholder=""/>
                                        <small className="error d-none">This field is required.</small>
                                </div>
                                <div className="mb-3">
                                    <label for="checkIn" className="form-label">Check-In</label>
                                    <input type="date" className="form-control" id="checkIn"/>
                                        <small className="error d-none">This field is required.</small>
                                </div>
                                <div className="mb-3">
                                    <label for="checkOut" className="form-label">Check-Out</label>
                                    <input type="date" className="form-control" id="checkOut"/>
                                        <small className="error d-none">This field is required.</small>
                                </div>
                                <div className="mb-3">
                                    <label for="hotelStar" className="form-label">Choose Hotel Star</label>
                                    <select className="form-select" id="hotelStar">
                                        <option value="">Select...</option>
                                        <option value="1">1 Star</option>
                                        <option value="2">2 Stars</option>
                                        <option value="3">3 Stars</option>
                                        <option value="4">4 Stars</option>
                                        <option value="5">5 Stars</option>
                                    </select>
                                    <small className="error d-none">Please choose a hotel star.</small>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Specific Requirements</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="airportTransfer"/>
                                            <label className="form-check-label" for="Full Board Meals">Full Board Meals</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="tourGuide"/>
                                            <label className="form-check-label" for="tourGuide">Tour Guide</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="breakfast"/>
                                            <label className="form-check-label" for="breakfast">Breakfast</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="airportTransfer"/>
                                            <label className="form-check-label" for="Conference">Conference</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="tourGuide"/>
                                            <label className="form-check-label" for="Meeting">Meeting</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="breakfast"/>
                                            <label className="form-check-label" for="breakfast">Events</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="message" className="form-label">Message (Optional)</label>
                                    <textarea className="form-control" id="message" rows="3"
                                        placeholder="Enter additional details..."></textarea>
                                </div>
                                <button type="button" className="btn btn-primary w-25 ms-5" id="submitBtn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Booking_info
