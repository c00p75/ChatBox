import { PropTypes } from 'prop-types';
import { VscReactions } from 'react-icons/vsc';
import './reactions.css';
import { useState } from 'react';
import images from '../../constants/images';

const Reactions = ({ post }) => {
  const [reaction, setReaction] = useState();

  const totalReactions = (
    post.reactions.like + post.reactions.sad + post.reactions.love
    + post.reactions.angry + post.reactions.wow + post.reactions.funny
  );

  const handleClick = (selection) => {
    setReaction(selection);
    if (selection === reaction) setReaction(false);
  };

  return (
    <div className="reactions__container flex">
      <div className="reactions__button-container flex-center pointer">
        <VscReactions className="reactions-button" />
      </div>
      <div className="reactions__wrapper">
        <div className="reactions flex">
          <div className="reactions__reaction flex like-reaction">
            <span className={`reactions__reaction-count ${reaction === 'like' && 'reaction-selected'}`}>
              {reaction === 'like' ? post.reactions.like + 1 : post.reactions.like}
            </span>
            <button type="button" className="reactions__reaction-image" onClick={() => handleClick('like')}>
              <img src={images.likeGIF} alt="like reaction" className="reactions__reaction-image-active" />
              <img src={images.like} alt="like reaction" className="reactions__reaction-image_static" />
            </button>
          </div>

          <div className="reactions__reaction flex love-reaction">
            <span className={`reactions__reaction-count ${reaction === 'love' && 'reaction-selected'}`}>
              {reaction === 'love' ? post.reactions.love + 1 : post.reactions.love}
            </span>
            <button type="button" className="reactions__reaction-image" onClick={() => handleClick('love')}>
              <img src={images.loveGIF} alt="love reaction" className="reactions__reaction-image-active" />
              <img src={images.love} alt="love reaction" className="reactions__reaction-image_static" />
            </button>
          </div>

          <div className="reactions__reaction sad-reaction">
            <span className={`reactions__reaction-count ${reaction === 'sad' && 'reaction-selected'}`}>
              {reaction === 'sad' ? post.reactions.sad + 1 : post.reactions.sad}
            </span>
            <button type="button" className="reactions__reaction-image" onClick={() => handleClick('sad')}>
              <img src={images.sadGIF} alt="sad emoji" className="reactions__reaction-image-active" />
              <img src={images.sad} alt="sad emoji" className="reactions__reaction-image_static" />
            </button>
          </div>

          <div className="reactions__reaction laugh-reaction">
            <span className={`reactions__reaction-count ${reaction === 'funny' && 'reaction-selected'}`}>
              {reaction === 'funny' ? post.reactions.funny + 1 : post.reactions.funny}
            </span>
            <button type="button" className="reactions__reaction-image" onClick={() => handleClick('funny')}>
              <img src={images.laughGIF} alt="laugh emoji" className="reactions__reaction-image-active" />
              <img src={images.laugh} alt="laugh emoji" className="reactions__reaction-image_static" />
            </button>
          </div>

          <div className="reactions__reaction angry-reaction">
            <span className={`reactions__reaction-count ${reaction === 'angry' && 'reaction-selected'}`}>
              {reaction === 'angry' ? post.reactions.angry + 1 : post.reactions.angry}
            </span>
            <button type="button" className="reactions__reaction-image" onClick={() => handleClick('angry')}>
              <img src={images.angryGIF} alt="angry emoji" className="reactions__reaction-image-active" />
              <img src={images.angry} alt="angry emoji" className="reactions__reaction-image_static" />
            </button>
          </div>

          <div className="reactions__reaction wow-reaction">
            <span className={`reactions__reaction-count ${reaction === 'wow' && 'reaction-selected'}`}>
              {reaction === 'wow' ? post.reactions.wow + 1 : post.reactions.wow}
            </span>
            <button type="button" className="reactions__reaction-image" onClick={() => handleClick('wow')}>
              <img src={images.wowGIF} alt="wow emoji" className="reactions__reaction-image-active" />
              <img src={images.wow} alt="wow emoji" className="reactions__reaction-image_static" />
            </button>
          </div>
        </div>
      </div>
      {totalReactions > 0 && (
        <span className="reactionCounter flex-center">{totalReactions === 1 ? '1 reaction' : `${reaction ? totalReactions + 1 : totalReactions} reactions`}</span>
      )}
      {totalReactions === 0 && (
        <span className="reactionCounter flex-center">{reaction && '1 reaction'}</span>
      )}
    </div>
  );
};

Reactions.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};

export default Reactions;
