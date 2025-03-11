import React from 'react'
import { Link } from "react-router"

function Signin() {
    return (
        <div className='main4'>
            <div className="signup-card">
                <h1>Sign up</h1>
                <p>Create your account</p>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn btn-signup w-100">Sign up</button>
                </form>
                <br />
                <Link to="#" className=" w-100 forgot-link mt-3 d-block">Sign in with Google</Link>
                <p className="mt-1">Already have an account? <Link to="/Login" className="login-link">Login</Link></p>
            </div>
        </div>
    )
}

export default Signin
