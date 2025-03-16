import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/logo.webp';
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

function Navbar() {
    const [showCitiesDropdown, setShowCitiesDropdown] = useState(false);
    const [showHotelsDropdown, setShowHotelsDropdown] = useState(false);
    const [showMoreDropdown, setShowMoreDropdown] = useState(false);
    const navigate = useNavigate();

    const buttonStyle = { backgroundColor: "#21515f", borderColor: "#21515f", color: "white", padding: "6px 12px", textDecoration: "none", borderRadius: "5px" };

    return (
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-white nav">
                <div className="container-fluid d-flex justify-content-between">
                    <img src={logo} alt="Logo" className='logo' />
                    <h1 className="navbar-brand">Exploration & Adventure <br /> Traveling Gateway</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                            {/* About Us */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About Us</Link>
                            </li>

                            {/* Explore Cities */}
                            <li
                                className="nav-item dropdown"
                                onMouseEnter={() => setShowCitiesDropdown(true)}
                                onMouseLeave={() => setShowCitiesDropdown(false)}
                            >
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/all_cities"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate('/all_cities');
                                    }}
                                >
                                    Cities
                                </Link>
                                <ul className={`dropdown-menu ${showCitiesDropdown ? 'show' : ''}`}>
                                    <li><Link className="dropdown-item" to="/Faisalabad_info">Faisalabad</Link></li>
                                    <li><Link className="dropdown-item" to="/Lahore_info">Lahore</Link></li>
                                    <li><Link className="dropdown-item" to="/Islamabad_info">Islamabad</Link></li>
                                    <li><Link className="dropdown-item" to="/Nathiagali_info">Nathia Gali</Link></li>
                                    <li><Link className="dropdown-item" to="/Naran_info">Naran</Link></li>
                                    <li><Link className="dropdown-item" to="/Skardu_info">Skardu</Link></li>
                                    <li><Link className="dropdown-item" to="/Hunza_info">Hunza</Link></li>
                                    <li><Link className="dropdown-item" to="/Gilgit_info">Gilgit</Link></li>
                                    <li><Link className="dropdown-item" to="/Jhelum_info">Jhelum</Link></li>
                                    <li><Link className="dropdown-item" to="/Hyderabad_info">Hyderabad</Link></li>
                                    <li><Link className="dropdown-item" to="/Multan_info">Multan</Link></li>
                                </ul>
                            </li>

                            {/* Hotels */}
                            <li
                                className="nav-item dropdown"
                                onMouseEnter={() => setShowHotelsDropdown(true)}
                                onMouseLeave={() => setShowHotelsDropdown(false)}
                            >
                                <Link className="nav-link dropdown-toggle" to="/hotels">
                                    Hotels
                                </Link>
                                <ul className={`dropdown-menu ${showHotelsDropdown ? 'show' : ''}`}>
                                    <li><Link className="dropdown-item" to="/Faisalabad_comp">Hotels in Faisalabad</Link></li>
                                    <li><Link className="dropdown-item" to="/Lahore_comp">Hotels in Lahore</Link></li>
                                    <li><Link className="dropdown-item" to="/Islamabad_comp">Hotels in Islamabad</Link></li>
                                    <li><Link className="dropdown-item" to="/Nathiagali_comp">Hotels in Nathiagali</Link></li>
                                    <li><Link className="dropdown-item" to="/Naran_comp">Hotels in Naran</Link></li>
                                    <li><Link className="dropdown-item" to="/Skardu_comp">Hotels in Skardu</Link></li>
                                    <li><Link className="dropdown-item" to="/Hunza_comp">Hotels in Hunza</Link></li>
                                    <li><Link className="dropdown-item" to="/Gilgit_comp">Hotels in Gilgit</Link></li>
                                    <li><Link className="dropdown-item" to="/Jhelum_comp">Hotels in Jhelum</Link></li>
                                    <li><Link className="dropdown-item" to="/Hydrabad_comp">Hotels in Hyderabad</Link></li>
                                    <li><Link className="dropdown-item" to="/Multan_comp">Hotels in Multan</Link></li>
                                </ul>
                            </li>

                            {/* Special Deals */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Special_deal">Special Deals</Link>
                            </li>

                            {/* Buses */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Buses_info">Buses</Link>
                            </li>

                            {/* Booking */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Booking_info">Booking</Link>
                            </li>

                            {/* More */}
                            <li
                                className="nav-item dropdown"
                                onMouseEnter={() => setShowMoreDropdown(true)}
                                onMouseLeave={() => setShowMoreDropdown(false)}
                            >
                                <Link className="nav-link dropdown-toggle" to="#">
                                    More
                                </Link>
                                <ul className={`dropdown-menu ${showMoreDropdown ? 'show' : ''}`}>
                                    <li><Link className="dropdown-item" to="#">AI Assistant</Link></li>
                                    <li><Link className="dropdown-item" to="/Whatsapp_info">Whatsapp</Link></li>
                                </ul>
                            </li>
                        </ul>

                        {/* Login & Register Buttons */}
                        <div className="d-flex gap-2">
                            <Link to="/Login" style={buttonStyle} className="d-flex align-items-center">
                                <FaSignInAlt className="me-2" />
                                Login
                            </Link>
                            <Link to="/Signup" style={buttonStyle} className="d-flex align-items-center">
                                <FaUserPlus className="me-2" />
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;








// -----------PREVIOUS VERSION------------------
// import React from 'react'
// import { Link } from 'react-router-dom'

// import logo from '../../public/logo.webp'
// import { Button } from "react-bootstrap";
// import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

// function Navbar() {
//         const buttonStyle = { backgroundColor: "#21515f", borderColor: "#21515f" };
//         return (
//                 <div>
//                         <header className="container-fluid">
//                                 <nav className="navbar navbar-expand-lg bg-white nav">
//                                         <div className="container-fluid  d-flex justify-content-between">
//                                                 <img src={logo} alt="" className='logo' />
//                                                 <h1 className="navbar-brand">Exploration & Advanture <br /> Traveling Gateway</h1>
//                                                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
//                                                         aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//                                                         <span className="navbar-toggler-icon"></span>
//                                                 </button>
//                                                 <div className="collapse navbar-collapse" id="navbarText">
//                                                         <ul className="navbar-nav m-auto mb-2 mb-lg-0">

//                                                                 {/* <!-- about us --> */}
//                                                                 <li className="nav-item">
//                                                                         <Link className="nav-link" to={"/"}> About US</Link>
//                                                                 </li>

//                                                                 {/* <!-- explore cities --> */}
//                                                                 <li className="nav-item dropdown">
//                                                                         <Link className="nav-link dropdown-toggle" to={"/all_cities"} id="navbarDropdown" role="button"
//                                                                                 data-bs-toggle="dropdown" aria-expanded="false">
//                                                                                 Cities
//                                                                         </Link>
//                                                                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

//                                                                                 <li><Link className="dropdown-item"
//                                                                                         to={"/Faisalabad_info"}>Faisalabad</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Lahore_info"}>Lahore</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Islamabad_info"}>Islamabad</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Nathiagali_info"}>Nathia gali</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Naran_info"}>Naran</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Skardu_info"}>Skardu</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Hunza_info"}>Hunza</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Gilgit_info"}>Gilgit</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Jhelum_info"}>Jhelum</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Hydrabad_info"}>Hyderabad</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Multan_info"}>Multan</Link></li>
//                                                                         </ul>
//                                                                 </li>

//                                                                 {/* <!-- hotels --> */}
//                                                                 <li className="nav-item dropdown">
//                                                                         <Link className="nav-link dropdown-toggle" to="hotels.html" id="navbarDropdown" role="button"
//                                                                                 data-bs-toggle="dropdown" aria-expanded="false">
//                                                                                 Hotels
//                                                                         </Link>
//                                                                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                                                                 <li><Link className="dropdown-item" to={"/Faisalabad_comp"}> Hotels in Faisalabad </Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Lahore_comp"}> Hotels in Lahore </Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Islamabad_comp"}>Hotels in Islamabad </Link></li>

//                                                                                 <li><Link className="dropdown-item" to={"/Nathiagali_comp"}>Hotels in Nathiagali </Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Naran_comp"}>Hotels in Naran</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Skardu_comp"}>Hotels in Skardu</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Hunza_comp "}>Hotels in Hunza</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/gilgit_comp "}>Hotels in Gilgit</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"Jhelum_comp "}>Hotels in Jhelum </Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Hydrabad_comp "}>Hotels in Hyderabad</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Multan_comp "}>Hotels in Multan</Link></li>
//                                                                         </ul>
//                                                                 </li>

//                                                                 {/* <!-- Special Deals --> */}
//                                                                 <li className="nav-item"><Link className="nav-link" to={"/Special_deal"}> Special Deals</Link></li>

//                                                                 {/* <!-- Buses --> */}
//                                                                 <li className="nav-item"><Link className="nav-link" to={"/Buses_info"}>Buses</Link></li>

//                                                                 {/* <!-- booking --> */}
//                                                                 <li className="nav-item"><Link className="nav-link" to={"/Booking_info"}>Booking</Link></li>

//                                                                 {/* <!-- More --> */}
//                                                                 <li className="nav-item dropdown">
//                                                                         <Link className="nav-link dropdown-toggle" to="more.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">More </Link>
//                                                                         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                                                                 <li><Link className="dropdown-item" to="#">AI Assistent</Link></li>
//                                                                                 <li><Link className="dropdown-item" to={"/Whatsapp_info"}>Whatsapp</Link></li>
//                                                                         </ul>
//                                                                 </li>
//                                                         </ul>
//                                                         <div className="d-flex gap-2">

//                                                                 <Link to={'/Login'} style={buttonStyle} className="d-flex align-items-center buttonStyle">
//                                                                         <FaSignInAlt className="me-2" style={{ color: "white" }} />
//                                                                         Login
//                                                                 </Link>
//                                                                 <Link to={'/Signup'} style={buttonStyle} className="d-flex align-items-center buttonStyle">
//                                                                         <FaUserPlus className="me-2" style={{ color: "white" }} />
//                                                                         Register
//                                                                 </Link>

//                                                         </div>
//                                                 </div>
//                                         </div>
//                                 </nav>
//                         </header>
//                 </div>
//         )
// }

// export default Navbar
