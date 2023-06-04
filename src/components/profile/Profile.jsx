import { useSelector } from 'react-redux';
import data from '../../constants/data';
// import images from '../../constants/images';
import RightSidebar from '../rightSidebar/RightSidebar';
import Share from '../share/Share';
import './profile.css';

const Profile = () => {
  const userId = useSelector((state) => state.profile.userId);
  const user = data.users.filter((i) => i.userId === userId)[0];
  return (
    <div className="profile flex">
      <div className="profile__top">
        <div className="profile__top-coverPhoto">
          <img src={user.profile.coverPhoto} className="profile__top-coverPhoto__img" alt="cover pic" />
          <img src={user.profilePictureID[1]} alt="profile pic" className="small-profile-pic" />
        </div>
        <div className="profile__top-info flex-center">
          <h2 className="profile__top-info__name">{user.name.fullName()}</h2>
          <span className="profile__top-info__description">{user.profile.description}</span>
        </div>
      </div>
      <div className="profile__bottom flex">
        <div className="profile__bottom-feed">
          <Share />
        </div>
        <div className="profile__bottom-rightbar">
          <RightSidebar page="profile" user={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
