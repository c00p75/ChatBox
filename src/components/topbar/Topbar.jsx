import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsSearch, BsPersonFill, BsFillChatLeftTextFill } from 'react-icons/bs';
import { MdNotifications, MdOutlineViewTimeline } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';
import images from '../../constants/images';
import './topbar.css';
import data from '../../constants/data';
import SidebarLinks from '../leftSidebar/SidebarLinks';

const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const userId = useSelector((state) => state.profile.userId);
  const user = data.users.filter((i) => i.userId === userId)[0];

  const handleMenu = () => {
    // Toggle menu every time button is clicked
    document.querySelector('.topbar__bottom').classList.toggle('slider');
    const body = document.querySelector('body');

    setShowMenu(!showMenu);
    if (!showMenu) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  };
  const theme = 'theme-color2';

  return (
    <nav className={`app_navigation ${theme}`}>
      <div className="topbar">
        <div className="topbar__left">
          <div className="topbar__left-logo">
            <h1 className="topbar__left-logo__text flex" style={{ width: 'fit-content' }}>
              <img src={images.logo} alt="app logo" />
              <span style={{ color: 'white' }}>Chat</span>
              <span style={{ color: 'khaki' }}>Box</span>
            </h1>
          </div>
        </div>
        <div className="topbar__center flex-center">
          <BsSearch />
          <input type="text" placeholder="Search..." className="topbar__center-searchInput" />
        </div>
        <div className="topbar__right flex">
          <ul className="topbar__right-links flex-evenly">
            <li className="topbar__right-link">
              <span className="lg-screen">Home Page</span>
              <span className="sm-screen"><AiFillHome style={{ fontSize: '1.5em' }} /></span>
            </li>
            <li className="topbar__right-link">
              <span className="lg-screen">Timeline</span>
              <span className="sm-screen"><MdOutlineViewTimeline style={{ fontSize: '1.5em' }} /></span>
            </li>
            <li className="topbar__right-link">
              <ul className="topbar__right-icons flex-evenly">
                <li className="topbar__right-icon">
                  <BsPersonFill />
                  <span className="topbar__right-iconBadge flex-center">1</span>
                </li>
                <li className="topbar__right-icon">
                  <BsFillChatLeftTextFill style={{ fontSize: '1.2em' }} />
                  <span className="topbar__right-iconBadge flex-center">2</span>
                </li>
                <li className="topbar__right-icon">
                  <MdNotifications />
                  <span className="topbar__right-iconBadge flex-center">1</span>
                </li>
              </ul>
            </li>
            <li className="topbar__right-link__menu">
              <button type="button" onClick={handleMenu}>
                <TiThMenu style={{ fontSize: '1.2em' }} />
              </button>
            </li>
            <li className="topbar__right-img">
              <img src={user.profilePictureID[0]} alt="profile pic" className="small-profile-pic" />
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}

      <div className={`topbar__bottom slider ${theme}`}>
        <div className="topbar__center flex-center">
          <BsSearch />
          <input type="text" placeholder="Search..." className="topbar__center-searchInput" />
        </div>
        <div className="topbar__bottom-link flex">
          <ul className="topbar__bottom-icons">
            <li className="topbar__right-icon">
              <BsPersonFill />
              <span style={{ marginLeft: '0.5em' }}>Friends</span>
              <span className="topbar__right-iconBadge flex-center">1</span>
            </li>
            <li className="topbar__right-icon">
              <BsFillChatLeftTextFill style={{ fontSize: '1.2em' }} />
              <span style={{ marginLeft: '0.5em' }}>Messeges</span>
              <span className="topbar__right-iconBadge flex-center">2</span>
            </li>
            <li className="topbar__right-icon">
              <MdNotifications />
              <span style={{ marginLeft: '0.5em' }}>Notifications</span>
              <span className="topbar__right-iconBadge flex-center">1</span>
            </li>
          </ul>
          <SidebarLinks />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
