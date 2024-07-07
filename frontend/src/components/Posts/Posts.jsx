import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../Axios'
import { Post } from '../Post/Post'
import './Posts.css'

export const Posts = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () => makeRequest.get("/posts").then((res)=>{
            return res.data;
        })
          
      })

      console.log(data);

  return (
    <div className="posts">
        {error? "Error" : (isPending ? "Loading" : data.map(post => (
            <Post post={post} key={post.id}/>
        )))}
    </div>
  )
}
