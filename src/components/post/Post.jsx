import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { MdMoreVert } from 'react-icons/md';
import data from '../../constants/data';
import './post.css';
import Comments from '../comments/Comments';
import Reactions from '../reactions/Reactions';

const Post = ({ post }) => {
  const user = data.users.filter((i) => i.userId === post.userId)[0];
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top flex">
          <div className="post__top_left flex">
            <img src={user.profilePictureID} alt="profile pic" className="small-profile-pic pointer" />
            <span className="post__username pointer">{user.name.fullName()}</span>
            <span className="post__date">5 minutes ago</span>
          </div>
          <div className="post__top_right">
            <MdMoreVert style={{ color: 'dodgerblue' }} />
          </div>
        </div>
        <div className="post__center">
          <div className="post__body">
            <p className="post__body-text">{post.body.text}</p>
            <div className="post__body-img">
              {post.body.postImg.length > 0 && post.body.postImg.map((img, index) => (
                <img src={img} className="post-Img pointer" alt="" key={`${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="post__bottom">
          <div className="post__bottom-main flex">
            <div className="post__bottom-left flex">
              <Reactions post={post} />
            </div>
            <div className="post__bottom-right">
              <button type="button" onClick={() => setShowComments(!showComments)} className="post__comment-text flex pointer">{post.comments.length === 1 ? '1 comment' : `${post.comments.length} comments`}</button>
            </div>
          </div>
          <div className={!showComments ? 'hide' : ''}>
            <Comments post={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};

export default Post;
