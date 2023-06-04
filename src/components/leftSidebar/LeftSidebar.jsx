import { useState } from 'react';
import './leftSidebar.css';
import { useSelector } from 'react-redux';
import { MdExpandCircleDown, MdOutlineMenuOpen } from 'react-icons/md';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import data from '../../constants/data';
import SidebarLinks from './SidebarLinks';
import FriendsList from '../friendsList/FriendsList';

const LeftSidebar = () => {
  const userId = useSelector((state) => state.profile.userId);
  const [showMore, setShowMore] = useState(false);
  const [showLeftsideMenu, setShowLeftsideMenu] = useState(true);
  const leftSidebarMenu = () => { setShowLeftsideMenu(!showLeftsideMenu); };

  return (
    <>
      <button type="button" className="home__sidebar_more" onClick={leftSidebarMenu}>
        <div className="home__sidebar_more-arrow__container">
          <span className="home__sidebar_more-arrow">
            {showLeftsideMenu && <RiMenuUnfoldLine />}
            {!showLeftsideMenu && <MdOutlineMenuOpen />}
          </span>
        </div>
      </button>
      <div className={`home__sidebar ${showLeftsideMenu ? 'leftMenuSlider' : 'leftMenuSliderFixed'}`}>
        <div className="home__sidebar-wrapper flex">
          <SidebarLinks />
          <button type="button" className="home__sidebar-button flex-center pointer" onClick={() => setShowMore(!showMore)}>
            <span>{showMore ? 'Less' : 'More'}</span>
            <MdExpandCircleDown className={`home__sidebar-icon ${showMore && 'home__sidebar-icon_showless'}`} />
          </button>
          <div className={`home__sidebar-more flex ${!showMore && 'hide'}`}>
            <hr className="home__sidebar-hr" />
            <h3>Friends</h3>
            <FriendsList friends={data.users.filter((i) => i.userId !== userId)} />
          </div>
        </div>
      </div>

    </>
  );
};

export default LeftSidebar;
