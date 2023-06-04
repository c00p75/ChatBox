import './profilePage.css';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import Profile from '../../components/profile/Profile';

const ProfilePage = () => (
  <div className="app__profile-container flex">
    <LeftSidebar />
    <Profile />
  </div>
);

export default ProfilePage;
