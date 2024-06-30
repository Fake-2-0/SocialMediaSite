import { useContext } from 'react'
import './Rightbar.css'
import { LoginContext } from '../../Context/LoginContext'

const Rightbar = () => {
  const {currentuser} = useContext(LoginContext)
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="user-info">
              <img src="https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_960_720.jpg" alt="" />
              <span>User 2</span>
            </div>
            <div className="user-buttons">
              <button>Follow</button>
              <button>Decline</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_960_720.jpg" alt="" />
              <span>User 2</span>
            </div>
            <div className="user-buttons">
              <button>Follow</button>
              <button>Decline</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img src="https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_960_720.jpg" alt="" />
              <p>
                <span>User 2</span> changed their cover photo
              </p>
            </div>
            <span>1min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_960_720.jpg" alt="" />
              <p>
                <span>User 2</span> changed their cover photo
              </p>
            </div>
            <span>1min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_960_720.jpg" alt="" />
              <p>
                <span>User 2</span> changed their cover photo
              </p>
            </div>
            <span>1min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online</span>
          <div className="user">
            <div className="user-info">
              <img src="https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_960_720.jpg" alt="" />
              <div className='online-icon'/>
              <span>User 2</span>             
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_960_720.jpg" alt="" />
              <div className='online-icon'/>
              <span>User 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar