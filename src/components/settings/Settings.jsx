import { useState } from 'react';
import PopupModal from '../popupModal/PopupModal';
import AboutEdit from './AboutEdit';
import ProfileEdit from './ProfileEdit';
import './settings.css';

const SettingsPopup = () => {
  const [displayUserInfo, setDisplayUserInfo] = useState(true);

  return (
    <div>
      <nav>
        <ul className="settings__nav flex">
          <li><button type="button" className={displayUserInfo ? 'active' : ''} onClick={() => setDisplayUserInfo(true)}>User Info</button></li>
          <li><button type="button" className={!displayUserInfo ? 'active' : ''} onClick={() => setDisplayUserInfo(false)}>Profile Settings</button></li>
        </ul>
      </nav>
      {displayUserInfo ? <AboutEdit /> : <ProfileEdit />}
    </div>
  );
};

const Settings = () => (
  <PopupModal title="Edit Profile" jsx={<SettingsPopup />} />
);

export default Settings;
