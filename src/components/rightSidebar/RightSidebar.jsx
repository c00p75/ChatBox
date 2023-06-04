import { useSelector } from 'react-redux';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { BiHide, BiShow } from 'react-icons/bi';
import { MdOutlineEdit } from 'react-icons/md';
import data from '../../constants/data';
import images from '../../constants/images';
import Ads from '../ads/Ads';
import FriendsList from '../friendsList/FriendsList';
import AboutEdit from '../aboutEdit/AboutEdit';
import './rightSidebar.css';

const RightSidebar = ({ page, user }) => {
  const userId = useSelector((state) => state.profile.userId);
  const userAccess = userId === user.userId;
  const [publicLocation, setPublicLocation] = useState(user.profile.userInformation.country.public);
  const [publicRel, setPublicRel] = useState(user.profile.userInformation.relationship.public);
  const [publicDob, setPublicDob] = useState(user.profile.userInformation.dob.public);
  const [publicFriends, setPublicFriends] = useState(user.profile.userInformation.friends.public);
  const [publicFollowers, setFollowers] = useState(user.profile.userInformation.followers.public);
  const [publicFollowing, setFollowing] = useState(user.profile.userInformation.dob.public);
  const [publicGender, setPublicGender] = useState(user.profile.userInformation.gender.public);

  return (
    <div className="home__rightSidebar">

      {/* Rightbar content to render for home page. */}
      {page === 'home' && (
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
          <FriendsList
            friends={data.users.filter((i) => i.userId !== userId).filter((i) => i.online)}
          />
        </div>
      </div>
      )}

      {/* Rightbar content to render for profile page. */}
      {page === 'profile' && (
        <div className="rightSidebar__wrapper" style={{ padding: '1em' }}>
          <div className="rightSidebar__userInfo">
            <h1>
              About
              {' '}
              {user.name.first}
              {userAccess && (
              <button type="button" className="rightSidebar__userInfo-item_value-edit" onClick={() => console.log('edit')}>
                <MdOutlineEdit />
              </button>
              )}
            </h1>

            <AboutEdit />

            <div className={`rightSidebar__userInfo-item ${!userAccess && !publicLocation ? 'hide' : ''}`}>
              {userAccess && (
              <div className="tooltip">
                <button type="button" className="rightSidebar__userInfo-item_visible pointer" onClick={() => setPublicLocation(!publicLocation)}>
                  {publicLocation ? <BiShow /> : <BiHide />}
                </button>
                <span className="tooltiptext">{publicLocation ? 'Make public' : 'Make Private'}</span>
              </div>
              )}

              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                {!userAccess && <img src={images.location} alt="location" className="rightSidebar__userInfo-icon" />}
                <div>
                  <span className="rightSidebar__userInfo-item_key">
                    {'Location: '}
                  </span>
                  <span className="rightSidebar__userInfo-item_value">
                    {`${user.profile.userInformation.country.val}, ${user.profile.userInformation.state.val}, ${user.profile.userInformation.city.val}`}
                  </span>
                </div>
              </div>
            </div>

            <div className={`rightSidebar__userInfo-item ${!userAccess && !publicRel ? 'hide' : ''}`}>
              {userAccess && (
              <div className="tooltip">
                <button type="button" className="rightSidebar__userInfo-item_visible pointer" onClick={() => setPublicRel(!publicRel)}>
                  {publicRel ? <BiShow /> : <BiHide />}
                </button>
                <span className="tooltiptext">{publicRel ? 'Make public' : 'Make Private'}</span>
              </div>
              )}

              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                {!userAccess && <img src={images.relationship} alt="relatonship" className="rightSidebar__userInfo-icon" />}
                <div>
                  <span className="rightSidebar__userInfo-item_key">
                    {'Relationship: '}
                  </span>
                  <span className="rightSidebar__userInfo-item_value">{user.profile.userInformation.relationship.val}</span>
                </div>
              </div>
            </div>

            <div className={`rightSidebar__userInfo-item ${!userAccess && !publicDob ? 'hide' : ''}`}>
              {userAccess && (
              <div className="tooltip">
                <button type="button" className="rightSidebar__userInfo-item_visible pointer" onClick={() => setPublicDob(!publicDob)}>
                  {publicDob ? <BiShow /> : <BiHide />}
                </button>
                <span className="tooltiptext">{publicDob ? 'Make public' : 'Make Private'}</span>
              </div>
              )}

              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                {!userAccess && <img src={images.cake} alt="cake" className="rightSidebar__userInfo-icon" />}
                <div>
                  <span className="rightSidebar__userInfo-item_key">
                    {'Date of Birth: '}
                  </span>
                  <span className="rightSidebar__userInfo-item_value">{user.profile.userInformation.dob.val}</span>
                </div>
              </div>
            </div>

            <div className={`rightSidebar__userInfo-item ${!userAccess && !publicFriends ? 'hide' : ''}`}>
              {userAccess && (
              <div className="tooltip">
                <button type="button" className="rightSidebar__userInfo-item_visible pointer" onClick={() => setPublicFriends(!publicFriends)}>
                  {publicFriends ? <BiShow /> : <BiHide />}
                </button>
                <span className="tooltiptext">{publicFriends ? 'Make public' : 'Make Private'}</span>
              </div>
              )}

              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                {!userAccess && <img src={images.friends} alt="friends" className="rightSidebar__userInfo-icon" />}
                <div>
                  <span className="rightSidebar__userInfo-item_key">
                    {'Friends: '}
                  </span>
                  <span className="rightSidebar__userInfo-item_value">{user.profile.userInformation.friends.val}</span>
                </div>
              </div>
            </div>

            <div className={`rightSidebar__userInfo-item ${!userAccess && !publicFollowers ? 'hide' : ''}`}>
              {userAccess && (
              <div className="tooltip">
                <button type="button" className="rightSidebar__userInfo-item_visible pointer" onClick={() => setFollowers(!publicFollowers)}>
                  {publicFollowers ? <BiShow /> : <BiHide />}
                </button>
                <span className="tooltiptext">{publicFollowers ? 'Make public' : 'Make Private'}</span>
              </div>
              )}

              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                {!userAccess && <img src={images.followers} alt="followers" className="rightSidebar__userInfo-icon" />}
                <div>
                  <span className="rightSidebar__userInfo-item_key">
                    {'Followers: '}
                  </span>
                  <span className="rightSidebar__userInfo-item_value">{user.profile.userInformation.followers.val}</span>
                </div>
              </div>
            </div>

            <div className={`rightSidebar__userInfo-item ${!userAccess && !publicFollowing ? 'hide' : ''}`}>
              {userAccess && (
              <div className="tooltip">
                <button type="button" className="rightSidebar__userInfo-item_visible pointer" onClick={() => setFollowing(!publicFollowing)}>
                  {publicFollowing ? <BiShow /> : <BiHide />}
                </button>
                <span className="tooltiptext">{publicFollowing ? 'Make public' : 'Make Private'}</span>
              </div>
              )}

              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                {!userAccess && <img src={images.following} alt="following" className="rightSidebar__userInfo-icon" />}
                <div>
                  <span className="rightSidebar__userInfo-item_key">
                    {'Following: '}
                  </span>
                  <span className="rightSidebar__userInfo-item_value">{user.profile.userInformation.following.val}</span>
                </div>
              </div>
            </div>

            <div className={`rightSidebar__userInfo-item ${!userAccess && !publicGender ? 'hide' : ''}`}>
              {userAccess && (
              <div className="tooltip">
                <button type="button" className="rightSidebar__userInfo-item_visible pointer" onClick={() => setPublicGender(!publicGender)}>
                  {publicGender ? <BiShow /> : <BiHide />}
                </button>
                <span className="tooltiptext">{publicGender ? 'Make public' : 'Make Private'}</span>
              </div>
              )}

              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                {!userAccess && <img src={images.gender} alt="friends" className="rightSidebar__userInfo-icon" />}
                <div>
                  <span className="rightSidebar__userInfo-item_key">
                    {'Gender: '}
                  </span>
                  <span className="rightSidebar__userInfo-item_value">{user.profile.userInformation.gender.val}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

RightSidebar.defaultProps = {
  page: 'home',
};

RightSidebar.propTypes = {
  page: PropTypes.string,
};

RightSidebar.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default RightSidebar;
