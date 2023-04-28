import { useState } from 'react';
import './leftSidebar.css';
import { MdExpandCircleDown } from 'react-icons/md';
import data from '../../constants/data';
import SidebarLinks from './SidebarLinks';
import FriendsList from '../friendsList/FriendsList';

const LeftSidebar = () => {
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
          <FriendsList friends={data.users} />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
