import { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext';
import { useState } from 'react';

export const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:""
  });

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  };

  const {login} = useContext(LoginContext);

  const handleLogin = async (e) => { 
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  }
  return (
    <div className='login-page'>
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <input placeholder='Username' type="text" name='username' onChange={handleChange}/>
            <input placeholder='Password' type="password" name='password' onChange={handleChange}/>
            <button className="login-button" onClick={handleLogin}>Login</button>
            {err && err}
            <Link to="/register"><button className="nav-register">Sign Up</button></Link>
        </div>
    </div>
  )
}
