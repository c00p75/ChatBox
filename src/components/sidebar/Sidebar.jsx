import { useState } from 'react';
import './sidebar.css';
import { MdExpandCircleDown } from 'react-icons/md';
import data from '../../constants/data';
import SidebarLinks from './SidebarLinks';

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="home__sidebar">
      <div className="home__sidebar-wrapper flex">
        <SidebarLinks />
        <button type="button" className="home__sidebar-button flex-center pointer" onClick={() => setShowMore(!showMore)}>
          <span>{showMore ? 'Less' : 'More'}</span>
          <MdExpandCircleDown className={`home__sidebar-icon ${showMore && 'home__sidebar-icon_showless'}`} />
        </button>
        <div className={`home__sidebar-more flex ${!showMore && 'hide'}`}>
          <hr className="home__sidebar-hr" />
          <h3>Friends</h3>
          <ul className="home__sidebar-friendList flex">
            {data.users.map((user) => (
              <li className="home__sidebar-friend flex pointer" key={user.id}>
                <img src={user.profilePictureID} alt="profile pic" className="small-profile-pic" />
                <span>{user.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
