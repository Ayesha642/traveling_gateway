import React from 'react'
import { Link } from "react-router"

function After_reset() {
    return (
        <div className='main4'>
            <div className="success-card">
                <div className="icon">✔️</div>
                <h1>Password Reset</h1>
                <p>Your password has been successfully updated. You can now log in with your new password.</p>
                <Link to="/Login" className="btn-login">Go to Login</Link>
            </div>
        </div>
    )
}

export default After_reset
