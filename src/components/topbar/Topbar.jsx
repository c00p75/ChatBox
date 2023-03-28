import { BsSearch, BsPersonFill, BsFillChatLeftTextFill } from 'react-icons/bs';
import { MdNotifications, MdOutlineViewTimeline } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';
import images from '../../constants/images';
import './topbar.css';
import data from '../../constants/data';
import SidebarLinks from '../leftSidebar/SidebarLinks';

const Topbar = () => {
  const handleMenu = () => {
    const menu = document.querySelector('.home__topbar-bottom');
    menu.classList.toggle('slider');
  };
  const theme = 'theme-color2';

  return (
    <nav className={`app_navigation ${theme}`}>
      <div className="home__topbar">
        <div className="home__topbar-left">
          <div className="home__topbar-left__logo">
            <h1 className="home__topbar-left__logo-text pointer flex" style={{ width: 'fit-content' }}>
              <img src={images.logo} alt="app logo" />
              <span style={{ color: 'white' }}>Chat</span>
              <span style={{ color: 'khaki' }}>Box</span>
            </h1>
          </div>
        </div>
        <div className="home__topbar-center flex-center">
          <BsSearch />
          <input type="text" placeholder="Search..." className="home__topbar-center_searchInput" />
        </div>
        <div className="home__topbar-right flex">
          <ul className="home__topbar-right_links flex-evenly">
            <li className="home__topbar-right_link pointer">
              <span className="lg-screen">Home Page</span>
              <span className="sm-screen"><AiFillHome style={{ fontSize: '1.5em' }} /></span>
            </li>
            <li className="home__topbar-right_link pointer">
              <span className="lg-screen">Timeline</span>
              <span className="sm-screen"><MdOutlineViewTimeline style={{ fontSize: '1.5em' }} /></span>
            </li>
            <li className="home__topbar-right_link">
              <ul className="home__topbar-right_icons flex-evenly">
                <li className="home__topbar-right_icon pointer">
                  <BsPersonFill />
                  <span className="home__topbar-right_iconBadge flex-center">1</span>
                </li>
                <li className="home__topbar-right_icon pointer">
                  <BsFillChatLeftTextFill style={{ fontSize: '1.2em' }} />
                  <span className="home__topbar-right_iconBadge flex-center">2</span>
                </li>
                <li className="home__topbar-right_icon pointer">
                  <MdNotifications />
                  <span className="home__topbar-right_iconBadge flex-center">1</span>
                </li>
              </ul>
            </li>
            <li className="home__topbar-right_link-menu">
              <button type="button" onClick={handleMenu}>
                <TiThMenu style={{ fontSize: '1.2em' }} />
              </button>
            </li>
            <li className="home__topbar-right_img pointer">
              <img src={data.userProfile.profilePictureID} alt="profile pic" className="small-profile-pic" />
            </li>
          </ul>
        </div>
      </div>

      <div className={`home__topbar-bottom slider ${theme}`}>
        <div className="home__topbar-center flex-center">
          <BsSearch />
          <input type="text" placeholder="Search..." className="home__topbar-center_searchInput" />
        </div>
        <div className="home__topbar-bottom_link flex">
          <ul className="home__topbar-bottom_icons">
            <li className="home__topbar-right_icon pointer">
              <BsPersonFill />
              <span style={{ marginLeft: '0.5em' }}>Friends</span>
              <span className="home__topbar-right_iconBadge flex-center">1</span>
            </li>
            <li className="home__topbar-right_icon pointer">
              <BsFillChatLeftTextFill style={{ fontSize: '1.2em' }} />
              <span style={{ marginLeft: '0.5em' }}>Messeges</span>
              <span className="home__topbar-right_iconBadge flex-center">2</span>
            </li>
            <li className="home__topbar-right_icon pointer">
              <MdNotifications />
              <span style={{ marginLeft: '0.5em' }}>Notifications</span>
              <span className="home__topbar-right_iconBadge flex-center">1</span>
            </li>
          </ul>
          <SidebarLinks />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
