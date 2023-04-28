import data from '../../constants/data';
import Post from '../post/Post';
import Share from '../share/Share';
import Ads from '../ads/Ads';
import './feed.css';

const feed = () => (
  <div className="home__feed">
    <div className="home__feed-wrapper">
      <Share />
      <div className="home__feed-bigScreen">
        {data.users.filter((i) => i.posts.length > 0).map((i, index) => <Post post={i.posts[0]} key={`id_${index + 1}`} />)}
      </div>

      <div className="home__feed-smallScreen">
        {data.users.filter((i) => i.posts.length > 0).map((i, index) => {
          if ((index + 1) % 4 === 0) {
            return (
              <>
                <Ads key={`id_${index + 1}`} />
                <Post post={i.posts[0]} key={`id_${index + 1000}`} />
              </>
            );
          }
          return <Post post={i.posts[0]} key={`id_${index + 1}`} />;
        })}
      </div>
    </div>
  </div>
);

export default feed;
