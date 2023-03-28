import data from '../../constants/data';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

const feed = () => (
  <div className="home__feed">
    <div className="home__feed-wrapper">
      <Share />
      <Post post={data.users[4].posts[0]} />
      <Post post={data.users[9].posts[0]} />
    </div>
  </div>
);

export default feed;
