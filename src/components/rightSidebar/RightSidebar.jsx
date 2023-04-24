import data from '../../constants/data';
import images from '../../constants/images';
import Ads from '../ads/Ads';
import FriendsList from '../friendsList/FriendsList';
import './rightSidebar.css';

const RightSidebar = () => (
  <div className="home__rightSidebar">
    <div className="rightSidebar__wrapper">
      <div className="rightSidebar__birthday-container flex">
        <img src={images.giftbox} alt="gift box" className="rightSidebar__birthday-img" />
        <span>
          <button type="button" className="btn-link">Chan Evans</button>
          {' '}
          and
          {' '}
          <button type="button" className="btn-link"> 3 other friends</button>
          {' '}
          have a birthday today.
        </span>
      </div>
      <div className="rightSidebar__ad">
        <Ads />
      </div>
      <div className="rightSidebar__friendsList">
        <h3 className="flex-center">Friends Online</h3>
        <FriendsList friends={data.users.filter((i) => i.online)} />
      </div>
    </div>
  </div>
);

export default RightSidebar;
