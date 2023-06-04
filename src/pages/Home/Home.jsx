import './home.css';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import Feed from '../../components/feed/Feed';
import RightSidebar from '../../components/rightSidebar/RightSidebar';

const Home = () => (
  <div>
    <div className="app__homeContainer flex">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  </div>
);

export default Home;
