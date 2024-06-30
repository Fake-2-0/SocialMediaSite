import { useContext } from 'react'
import './Comments.css'
import {LoginContext} from '../../Context/LoginContext'

export const Comments = () => {
    const {currentUser} = useContext(LoginContext)

    const comments = [
        {
            id: 1,
            name: "Fake Dog",
            desc: "The Cake is a LIE",
            userId: 2,
            profilePic: "https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_960_720.jpg"
        },
        {
            id: 2,
            name: "Fake Dog",
            desc: "WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! WOOF!!!! ",
            userId: 2,
            profilePic: "https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_960_720.jpg"
        },
    ]
  return (
    <div className="comments">
        <div className="comment-box">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='Comment...' />
            <button>Send</button>
        </div>
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="user-info">
                    <span className="user-name">{comment.name}</span>
                    <p className='comment-desc'>{comment.desc}</p>
                </div>
                <div className="date">
                    <span>1hr ago</span> 
                </div>
            </div>
        ))}
    </div>
  )
}
