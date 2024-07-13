import { Posts } from '../../components/Posts/Posts'
import Share from '../../components/Share/Share'
import { Story } from '../../components/Story/Story'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Story/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home