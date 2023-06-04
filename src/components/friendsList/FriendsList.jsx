import { PropTypes } from 'prop-types';
import './friendsList.css';

const FriendsList = ({ friends }) => (
  <ul className="home__sidebar-friendList flex">
    {friends.map((friend, index) => (
      <li className="home__sidebar-friend flex pointer" key={`id_${index + 1}`}>
        <div style={{ position: 'relative' }}>
          <img src={friend.profilePictureID[0]} alt="profile pic" className="small-profile-pic" />
          <span className={`home__sidebar-friend__onlineStaus ${friend.online ? 'home__sidebar-friend__online' : ''}`} />
        </div>
        <span>{friend.name.fullName()}</span>
      </li>
    ))}
  </ul>
);

FriendsList.defaultProps = {
  friends: [],
};

FriendsList.propTypes = {
  friends: PropTypes.instanceOf(Object),
};

export default FriendsList;
