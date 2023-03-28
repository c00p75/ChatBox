import images from '../../constants/images';
import './rightSidebar.css';

const RightSidebar = () => (
  <div className="rightSidebar">
    <div className="rightSidebar__wrapper">
      <div className="rightSidebar__birthday-container">
        <img src={images.giftbox} alt="gift box" className="rightSidebar__birthday-img" />
        <span>
          <button type="button" className="btn-link">Chan Evans</button>
          {' '}
          and 3 others have a birthday today.

        </span>
      </div>
    </div>
  </div>
);

export default RightSidebar;
