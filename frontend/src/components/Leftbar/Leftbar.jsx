import './Leftbar.css'
import friends_icon from '../../Assets/1.png'
import groups_icon from '../../Assets/2.png'
import market_icon from '../../Assets/3.png'
import watch_icon from '../../Assets/4.png'
import memories_icon from '../../Assets/5.png'
import events_icon from '../../Assets/6.png'
import gaming_icon from '../../Assets/7.png'
import gallery_icon from '../../Assets/8.png'
import videos_icon from '../../Assets/9.png'
import messages_icon from '../../Assets/10.png'
import { useContext } from 'react'
import { LoginContext } from '../../Context/LoginContext'


export const Leftbar = () => {
  const {currentUser} = useContext(LoginContext)
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={friends_icon} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={groups_icon} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={market_icon} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={watch_icon} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={memories_icon} alt="" />
            <span>Memories</span>
          </div>
          {/* <div className="item">
            <img src={tutorial_icon} alt="" />
            <span>Tutorial</span>
          </div>
          <div className="item">
            <img src={course_icon} alt="" />
            <span>Course</span>
          </div>
          <div className="item">
            <img src={funds_icon} alt="" />
            <span>Funds</span>
          </div> */}
        </div>

        {/* Short Cuts */}
        <div className="short-cuts">
            <h1>Short-cuts</h1>
            <div className="item">
              <img src={events_icon} alt="" />
              <span>Event</span>
            </div>
            <div className="item">
              <img src={gaming_icon} alt="" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src={gallery_icon} alt="" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={videos_icon} alt="" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={messages_icon} alt="" />
              <span>Messages</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Leftbar