import { MdPermMedia, MdLocationPin, MdEmojiEmotions } from 'react-icons/md';
import { CgTag } from 'react-icons/cg';
import data from '../../constants/data';
import './share.css';

const Share = () => (
  <div className="home__share">
    <div className="home__share-wrapper">
      <div className="home__share-top flex">
        <img src={data.userProfile.profilePictureID} alt="profile pic" className="small-profile-pic home__share-img" />
        <textarea rows="2" className="home__share-input" placeholder={`What's on your mind, ${data.userProfile.name.first}?`} style={{ resize: 'none', fontFamily: 'roboto', fontSize: '1em' }} />
      </div>
      <hr className="home__share-hr" />
      <div className="home__share-bottom flex">
        <div className="home__share-options flex">
          <div className="home__share-option flex">
            <MdPermMedia className="home__share-option_icon" style={{ color: 'tomato' }} />
            <span className="home__share-option_text pointer">Photo/Video</span>
          </div>
          <div className="home__share-option flex">
            <CgTag className="home__share-option_icon" style={{ color: 'royalblue' }} />
            <span className="home__share-option_text pointer">Tag</span>
          </div>
          <div className="home__share-option flex">
            <MdLocationPin className="home__share-option_icon" style={{ fontSize: '1.1em', color: 'lightseagreen' }} />
            <span className="home__share-option_text pointer">Location</span>
          </div>
          <div className="home__share-option flex">
            <MdEmojiEmotions className="home__share-option_icon" style={{ color: 'gold' }} />
            <span className="home__share-option_text pointer">Feelings</span>
          </div>
        </div>
        <button type="button" className="home__share-button pointer">Share</button>
      </div>
    </div>
  </div>
);

export default Share;
