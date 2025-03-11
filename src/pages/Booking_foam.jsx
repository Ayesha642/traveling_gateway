import React from 'react'

function Booking_foam() {
  return (
    <div>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-1">
          </div>
          <br />
          <div className="col-md-10">
            <div className="custom-form">

              <h2 className="">Availability</h2>
              <hr />

              <form className="row align-items-center g-3">
                <div className="col-md-4">
                  <label for="checkInDate" className="form-label">Check-in date</label>
                  <input type="date" id="checkInDate" className="form-control" placeholder="" />
                </div>

                <div className="col-md-2">
                  <label for="nights" className="form-label">Nights</label>
                  <select id="nights" className="form-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label for="checkOutDate" className="form-label">Check-out date</label>
                  <input type="date" id="checkOutDate" className="form-control" placeholder="" />
                </div>

                <div className="col-md-2 d-flex align-items-end">
                  <button type="button" className="btn btn-success w-100">SEARCH</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-1">
          </div>

        </div>

        <div className="row">
          <div className="col-md-1">
          </div>

          <div className="col-md-10 main-content">
            <div>
              <h4>General</h4>
              <p>Perched at an elevation of around 9,000 feet above sea level,
                Thandiani is renowned for its unparalleled beauty and serene<br />
                landscapes. The climate in Thandiani is delightful: summer
                unveils its lush greenery, while winter drapes it in a serene <br />
                layer of snow.</p>
              <hr />

              <h4>Check-in</h4>
              <p>From 2:00 pm</p>
              <hr />

              <h4>Check-out</h4>
              <p>Untill 12:00 pm</p>
              <hr />

              <h4>Cancellation / Prepayment</h4>
              <p>Cancellation and prepayment policies vary according to room type.
                Please check the room conditions when selecting your room.</p>
              <hr />

              <h4>Payment Options</h4>
              <p>Bank Transfers & Online Payment options available in the following bank account.

              </p>

            </div>
          </div>

          <div class="col-md-1">
          </div>

        </div>

      </div>
    </div>
  )
}

export default Booking_foam
