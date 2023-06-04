import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { ImReply } from 'react-icons/im';
import data from '../../constants/data';
import Reactions from '../reactions/Reactions';
import './comments.css';

const Comments = ({ comment }) => {
  const [ShowReply, setShowReply] = useState(false);
  console.log(comment);
  return (
    <div className="comments">
      <div className="comments__comment flex">
        <div className="comments__comment-header flex">
          <img src={data.users.filter((i) => i.userId === comment.commenterId)[0].profilePictureID[0]} alt="profile pic" className="small-profile-pic" />
          <div className="comments__comment-commenter flex-center">
            <span className="pointer">{comment.commenterName()}</span>
            <div className="comments__comment-date">{comment.commentDate.toDateString()}</div>
          </div>
        </div>
        <div className="comments__comment-body">
          <div className="comments__comment-text">{comment.body}</div>
          <div className="comments__comment-bottom">
            {comment.replies.length && (
              <div className="comments__comment-replies">
                <div className="replies__header flex">
                  <div className="replies__header-left flex">
                    <button type="button" className="replies__header-replyButton flex">
                      <ImReply />
                      {' '}
                      Reply
                    </button>
                    <Reactions post={comment} />
                  </div>
                  <span>
                    <button type="button" onClick={() => setShowReply(!ShowReply)} style={{ width: 'max-content' }}>
                      {comment.replies.length === 1 ? '1 reply' : `${comment.replies.length} replies`}
                    </button>
                  </span>
                </div>
                <div className="replies__input">
                  <textarea rows="5" placeholder="reply..." style={{ resize: 'none', fontFamily: 'roboto', fontSize: '0.9em' }} />
                </div>
                {ShowReply && comment.replies.map((reply, index) => (
                  <div className="replies__reply flex" key={`${index + 1}`}>
                    <div className="comments__comment-header flex">
                      <img src={data.users.filter((i) => i.userId === reply.userId)[0].profilePictureID[0]} alt="profile pic" className="small-profile-pic" />
                      <div className="replies__body-replier">
                        <span className="pointer">
                          {data.users.filter((i) => i.userId === reply.userId)[0].name.fullName()}
                        </span>
                        <div className="comments__comment-date">{reply.commentReplyDate.toDateString()}</div>
                      </div>
                    </div>
                    <div className="replies__body">
                      <p className="replies__body-text">{reply.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Comments.propTypes = {
  comment: PropTypes.instanceOf(Object).isRequired,
};

export default Comments;
