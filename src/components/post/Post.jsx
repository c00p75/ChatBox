import parse from 'html-react-parser';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { MdMoreVert } from 'react-icons/md';
import data from '../../constants/data';
import './post.css';
import Comments from '../comments/Comments';
import Reactions from '../reactions/Reactions';

const Post = ({ post }) => {
  const user = data.users.filter((i) => i.userId === post.userId)[0];
  const [showPost, setShowPost] = useState(true);
  const [showComments, setShowComments] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  // Close options when body is clicked
  if (showOptions) {
    document.querySelector('body').addEventListener('click', (e) => {
      if (!e.target.classList.contains('post__top-right__option') && !e.target.classList.contains('dots')) { setShowOptions(false); }
    });
  }

  // Parse posts containing hashtags
  let postText;
  if (post.body.text.indexOf('#') !== -1) {
    postText = post.body.text;
    postText.split(' ').forEach((i) => {
      if (i.indexOf('#') !== -1) postText = postText.replace(i, `<span>${i}</span>`);
    });
  }

  return (
    <>
      {showPost
    && (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top flex">
          <div className="post__top_left flex">
            <img src={user.profilePictureID[0]} alt="profile pic" className="small-profile-pic pointer" />
            <span className="post__username pointer">{user.name.fullName()}</span>
            <span className="post__date">5 minutes ago</span>
          </div>
          <div className="post__top_right">
            <button type="button" className="post__top-right__dots" onClick={() => setShowOptions(!showOptions)}>
              <MdMoreVert className="dots" />
            </button>
            {showOptions && (
            <div className="post__top-right__options">
              <button type="button" className="post__top-right__option" onClick={() => setShowOptions(false)}>Share</button>
              <button type="button" className="post__top-right__option" onClick={() => setShowPost(false)}>Remove from timeline</button>
            </div>
            )}
          </div>
        </div>
        <div className="post__center">
          <div className="post__body">
            {postText && <p className="post__body-text">{parse(postText)}</p>}
            {!postText && <p className="post__body-text">{post.body.text}</p>}
            <div className="post__body-img flex">
              {post.body.postImg.length !== 0 && (
                <img src={post.body.postImg[0]} className="post-Img pointer" alt={`${user.name.fullName()} iamge upload`} />
              )}

              {post.body.postImg.length > 1 && (

              <div className="post__body-img__more">
                <div className="post__body-img__more-container">
                  <img src={post.body.postImg[1]} className="post-Img pointer" alt={`${user.name.fullName()} iamge upload`} />
                </div>
                <div className="post__body-img__more post__body-img__more-overlay flex-center">
                  {`${post.body.postImg.length - 1}+`}
                </div>

              </div>

              // {/* <div className="post__body-img__many">
              //   {post.body.postImg.map((img, index) => {
              //     if (index > 0) {
              //        <img src={img} className="post-Img pointer" alt="upload"/>;
              //      }
              //     return '';
              //   })}
              // </div> */}

              )}

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
            <h5 className="comments__heading">{`Comments (${post.comments.length})`}</h5>
            {post.comments.map((comment, index) => (<Comments comment={comment} key={`id_${index + 1}`} />))}
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

Post.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};

export default Post;
