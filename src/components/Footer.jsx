import React from 'react'
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <div>
            <footer className="footer ps-3 pe-3">
                <div className="navbar navbar-expand-lg  pt-5 ">
                    <h4 className="navbar-brand ">Exploration & Advanture Travelling Gateway</h4>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                        <form className="d-flex">
                            <input className="form-control me-2 p-2" type="email" placeholder="Your email address..."
                                aria-label="Your email address..." />
                            <button className="btn btn-outline-success bg-dark text-white  ps-3 pe-3 p-2"
                                type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-lg-6">
                        <h3>Customer support</h3>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">

                            <div className="col-lg-4">
                                <ul>
                                    <li>Contact Us</li>
                                    <li>About Us</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & condition</li>
                                    <li>How do I make a reservation?</li>
                                </ul>
                            </div>

                            <div className="col-lg-4">
                                <ul>
                                    <li>Refund Policy </li>
                                    <li> Terms & Conditions</li>
                                    <li>Trips</li>
                                    <li>FAQ</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>

                            <div className="col-lg-4">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-square-whatsapp"></i>
                                <i className="fa-brands fa-twitter"></i>
                            </div>

                        </div>

                    </div>

                </div>
                <hr />

                <div className="p-2">
                    <p>Copyright © 2024 Be Bold | Powered by Be Bold</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer
