import { useSelector } from 'react-redux';
import data from '../../constants/data';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import Feed from '../../components/feed/Feed';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import './home.css';

const Home = () => {
  const userId = useSelector((state) => state.profile.userId);
  const user = data.users.filter((i) => i.userId === userId)[0];
  return (
    <div>
      <div className="app__homeContainer flex">
        <LeftSidebar />
        <Feed />
        <RightSidebar page="home" user={user} />
      </div>
    </div>
  );
};

export default Home;
