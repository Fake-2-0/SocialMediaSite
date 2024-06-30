import { Link } from 'react-router-dom'
import './Register.css'

export const Register = () => {
  return (
    <div className='signup-page'>
        <div className="signup-container">
            <h1 className="signup-heading">Sign-Up</h1>
            <input placeholder='Username' type="text" />
            <input placeholder='Email' type="email" />
            <input placeholder='Password' type="password" />
            <input placeholder='Username' type="text" />
            <button className="signup-button">Create Account</button>
            <Link to="/login"><button className="nav-login">Already have an account?</button></Link>
        </div>
    </div>
  )
}
