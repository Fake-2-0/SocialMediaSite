import { useContext, useState } from 'react'
import './Comments.css'
import {LoginContext} from '../../Context/LoginContext'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../Axios'
import moment from 'moment'

export const Comments = ({postId}) => {
    const {currentUser} = useContext(LoginContext)

    const [desc, setDesc] = useState("");

    const { isPending, error, data } = useQuery({
        queryKey: ['comments'],
        queryFn: () => makeRequest.get("/comments?postId=" + postId).then((res)=>{
            return res.data;
        })    
      })
    
      const queryClient = useQueryClient()

      const addTodo = (newComment)=>{
          return makeRequest.post("/comments", newComment);
      }
  
      const mutation = useMutation({
          mutationFn: addTodo,
          onSuccess: async () => {
            queryClient.invalidateQueries(["comments"])
          },
      });   
  
      const handleClick = async(e) =>{
          e.preventDefault();
          mutation.mutate({desc, postId})
          setDesc("");
      };  
    
  return (
    <div className="comments">
        <div className="comment-box">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='Comment...' onChange={e=>{setDesc(e.target.value)}} value={desc}/>
            <button onClick={handleClick}>Send</button>
        </div>
        {isPending ? "Loading" : data.map((comment)=>(
            <div className="comment" key={comment.id}>
                <img src={comment.profilePic} alt="" />
                <div className="user-info">
                    <span className="user-name">{comment.name}</span>
                    <p className='comment-desc'>{comment.desc}</p>
                </div>
                <div className="date">
                    <span>{moment(comment.date).fromNow()}</span> 
                </div>
            </div>
        ))}
    </div>
  )
}
