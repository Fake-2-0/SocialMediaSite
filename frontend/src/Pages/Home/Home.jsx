import { Posts } from '../../components/Posts/Posts'
import { Story } from '../../components/Story/Story'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Story/>
      <Posts/>
    </div>
  )
}

export default Home