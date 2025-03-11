import React from 'react'

function Buses_foam() {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h1 className="text-center mb-4">Rent-A-Car</h1>
                <p className="text-center text-muted mb-4">Renting a Car was never as easy as today. As the city is getting bigger
                    and more commercial, different vehicles are needed by everyone. So those who can’t afford to buy a car can
                    rent it for a day or more. Rent a Car Pakistan Tour and Travel is taking the lead. Different
                    companies who are just making money, we are here to provide quality to its valuable customers. Furthermore,
                    Car Rental Islamabad offers its best services to all cities in Pakistan. Additionally, with an efficient
                    driver, you may hire our cars on self-drive with an insurance facility.</p>

                <form id="rentalForm">
                    {/* <!-- Name --> */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label for="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" required/>
                        </div>
                        <div className="col-md-6">
                            <label for="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" required/>
                        </div>
                    </div>

                    {/* <!-- Email --> */}
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="" required/>
                    </div>

                    {/* <!-- National Identity Card --> */}
                    <div className="mb-3">
                        <label for="nationalId" className="form-label">National Identity Card</label>
                        <input type="text" className="form-control" id="nationalId" placeholder="" required/>
                    </div>

                    {/* <!-- Phone --> */}
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="" required/>
                    </div>

                    {/* <!-- Pick Up Location --> */}
                    <div className="mb-3">
                        <label for="pickupLocation" className="form-label">Pick Up Location</label>
                        <input type="text" className="form-control" id="pickupLocation" placeholder="" required/>
                    </div>

                    {/* <!-- Drop Location --> */}
                    <div className="mb-3">
                        <label for="dropLocation" className="form-label">Drop Location</label>
                        <input type="text" className="form-control" id="dropLocation" placeholder="" required/>
                    </div>

                    {/* <!-- Start Date --> */}
                    <div className="mb-3">
                        <label for="startDate" className="form-label">Start Date</label>
                        <input type="date" className="form-control" id="startDate" required/>
                    </div>

                    {/* <!-- End Date --> */}
                    <div className="mb-3">
                        <label for="endDate" className="form-label">End Date</label>
                        <input type="date" className="form-control" id="endDate" required/>
                    </div>

                    {/* <!-- Vehicle Type --> */}
                    <div className="mb-3">
                        <label for="vehicleType" className="form-label">Vehicle Types</label>
                        <select className="form-select" id="vehicleType" required>
                            <option value="">Honda BRV</option>
                            <option value="">Suzuki APV VAN</option>
                            <option value="">Toyota Grand Cabin 13 Seater</option>
                            <option value="">Toyota Corolla Gli</option>
                            <option value="">Coaster Saloon 22/Seats</option>
                            <option value="">Honda City Aspire 1.5</option>
                        </select>
                    </div>

                    {/* <!-- Comments --> */}
                    <div className="mb-3">
                        <label for="comments" className="form-label">Comments</label>
                        <textarea className="form-control" id="comments" rows="3"
                            placeholder="Additional details or requests..."></textarea>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary bg-dark w-50">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Buses_foam
