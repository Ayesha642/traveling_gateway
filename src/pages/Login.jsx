import React from 'react'
import { Link } from "react-router"

function Login() {
    return (
        <div className='main4'>
            <div className="login-card">
                <h1>Welcome Back</h1>
                <p>Enter your credential to login</p>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="username" placeholder="Username" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-login w-100">Login</button>
                </form>
                <Link to="/Reset_pass" className="forgot-link mt-3 d-block">Forgot password?</Link>
                <div className="divider colour">Don't have an account? <Link to="/Signup" className="signup-link">Sign Up</Link></div>
            </div>
        </div>
    )
}

export default Login
