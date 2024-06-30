import { Post } from '../Post/Post'
import './Posts.css'

export const Posts = () => {
    // Temporary Data
    const posts = [
        {
            id: 1,
            name: "Fake",
            userId: 1,
            profilePic: "https://cdn.pixabay.com/photo/2023/04/20/20/22/robin-7940556_960_720.jpg",
            desc: "This is a Test Post",
            img: "https://cdn.pixabay.com/photo/2022/10/04/21/25/xr-7499160_1280.jpg"
        },
        {
            id: 2,
            name: "Fake",
            userId: 1,
            profilePic: "https://cdn.pixabay.com/photo/2023/04/20/20/22/robin-7940556_960_720.jpg",
            desc: "This is a Test Post"
        }
    ]

  return (
    <div className="posts">
        {posts.map(post => (
            <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}
