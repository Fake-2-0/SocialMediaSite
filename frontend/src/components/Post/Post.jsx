import { useState } from 'react'
import { Comments } from '../Comments/Comments'
import './Post.css'
import { Link } from 'react-router-dom'

export const Post = ({ post }) => {
    const liked = false

    const [commentsOpen, setCommentsOpen] = useState(false);
    
    return (
        <div className="post">
            <div className="user-container">
                <div className="user">
                    <div className="user-info">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none" }}>
                                <span className='user-name'>{post.name}</span>
                            </Link>
                            <span className='date'>1min ago</span>  
                        </div>
                    </div>
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        <span class="material-symbols-outlined like">
                            favorite
                        </span>
                        12 Likes
                    </div>
                    <div className="item" onClick={()=>setCommentsOpen(!commentsOpen)}>
                        <span class="material-symbols-outlined">
                            comment
                        </span>
                        12 Comments
                    </div>
                    <div className="item">
                        <span class="material-symbols-outlined">
                            share
                        </span>
                        5 Shares
                    </div>
                </div>
                {commentsOpen && <Comments/>}
            </div>
        </div>
    )
}
