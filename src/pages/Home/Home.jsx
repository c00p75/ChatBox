import { useSelector } from 'react-redux';
import data from '../../constants/data';
import Feed from '../../components/feed/Feed';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import './home.css';

const Home = () => {
  const userId = useSelector((state) => state.profile.userId);
  const user = data.users.filter((i) => i.userId === userId)[0];
  return (
    <div className="app__homeContainer flex">
      <Feed />
      <RightSidebar page="home" user={user} />
    </div>
  );
};

export default Home;
