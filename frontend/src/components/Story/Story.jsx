import React, { useContext } from 'react'
import './Story.css'
import { LoginContext } from '../../Context/LoginContext'

export const Story = () => {
    const {currentUser} = useContext(LoginContext)
    // Temporary Data
    const stories = [
        {
            id: 1,
            name: "Fake",
            img: "https://cdn.pixabay.com/photo/2019/02/17/19/24/rose-4002969_1280.jpg"
        },
        {
            id: 2,
            name: "Fake",
            img: "https://cdn.pixabay.com/photo/2019/02/17/19/24/rose-4002969_1280.jpg"
        },
        {
            id: 3,
            name: "Fake",
            img: "https://cdn.pixabay.com/photo/2019/02/17/19/24/rose-4002969_1280.jpg"
        },
    ]
  return (
    <div className='stories'>
        <div className='story'>
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
        </div>
        {stories.map(story => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}
