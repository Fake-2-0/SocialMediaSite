
import { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext'

const DarkMode = () =>{
    return(
        document.body.classList.toggle('dark')
    )
}


const Navbar = () => {
    const {currentUser} = useContext(LoginContext);

  return (
    <div className='navbar-container'>
        <div className="navbar-left">
            <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">Logo</span>
            </Link>
            <span class="material-symbols-outlined">
                home
            </span>
            <span class="material-symbols-outlined">
                grid_view
            </span>
            <span class="material-symbols-outlined" onClick={DarkMode}>
                dark_mode
            </span> 
        </div>
        <div className="navbar-center">
            {/* Searchbar */}
            <div className="searchbar">
            <span class="material-symbols-outlined">
                search
            </span>
            <input placeholder="Search"type="text" className="serach-input" />
            </div>
        </div>
        <div className="navbar-right">
            {/* Links */}
            {/* <div className="navbar-links">
                <span className="navbar-link">Homepage</span>
                <span className="navbar-link">Timeline</span>
            </div> */}
            {/* Icons */}
            <div className="navbar-icons">
                <div className="navbar-icon-item">
                <span class="material-symbols-outlined">
                    person
                </span>
                <span className="icon-count">1</span>
                </div>
                <div className="navbar-icon-item">
                <span class="material-symbols-outlined">
                    notifications
                </span>
                <span className="icon-count">1</span>
                </div>
                <div className="navbar-icon-item">
                <span class="material-symbols-outlined">
                    chat
                </span>
                <span className="icon-count">1</span>
                </div>
                <div className="user">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar