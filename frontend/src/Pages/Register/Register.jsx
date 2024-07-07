import { Link } from 'react-router-dom'
import './Register.css'
import { useState } from 'react'
import axios from "axios"

export const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"", 
    name:""
  });

  const [err, setErr] = useState(null)

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  };

  const handleClick = async e =>{
    e.preventDefault()

    try{
      await axios.post("http://localhost:8800/api/loginAuth/register", inputs);
    }catch(err){
      setErr(err.response.data);
    }
  };

  return (
    <div className='signup-page'>
        <div className="signup-container">
            <h1 className="signup-heading">Sign-Up</h1>
            <input placeholder='Username' type="text" name='username' onChange={handleChange}/>
            <input placeholder='Email' type="email" name='email' onChange={handleChange}/>
            <input placeholder='Password' type="password" name='password' onChange={handleChange}/>
            <input placeholder='Username' type="text" name='name' onChange={handleChange}/>
            {err && err}
            <button className="signup-button" onClick={handleClick}>Create Account</button>
            <Link to="/login"><button className="nav-login">Already have an account?</button></Link>
        </div>
    </div>
  )
}
