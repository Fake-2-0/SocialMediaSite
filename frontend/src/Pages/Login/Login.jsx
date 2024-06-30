import { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext';

export const Login = () => {

  const {login} = useContext(LoginContext);

  const handelLogin = () => {
    login();
  }
  return (
    <div className='login-page'>
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <input placeholder='Username' type="text" />
            <input placeholder='Password' type="password" />
            <button className="login-button" onClick={handelLogin}>Login</button>
            <Link to="/register"><button className="nav-register">Sign Up</button></Link>
        </div>
    </div>
  )
}
