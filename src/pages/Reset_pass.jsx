import React from 'react'
import { Link } from "react-router"


function Reset_pass() {
    return (
        <div className='main4'>
            <div className="signup-card">
                <h1>Reset Password</h1>
                <p>Please enter your email and create a new password.</p>
                <form>
                    {/* <!-- Email Input --> */}
                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                    </div>

                    {/* <!-- New Password Input --> */}
                    <div className="mb-3">
                        <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" required />
                    </div>

                    {/* <!-- Confirm Password Input --> */}
                    <div className="mb-3">
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
                    </div>

                    {/* <!-- Submit Button --> */}
                    <Link to="/After_reset" className="btn btn-signup w-100">Reset Password</Link>
                </form>
            </div>
        </div>
    )
}

export default Reset_pass
