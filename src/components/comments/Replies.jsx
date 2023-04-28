import { PropTypes } from 'prop-types';
import data from '../../constants/data';

const Replies = ({ comment, display }) => (
  <>
    {display && (
      comment.replies.map((reply, index) => (
        <div className="replies__reply flex" key={`${index + 1}`}>
          <img src={data.users.filter((i) => i.userId === reply.userId)[0].profilePictureID} alt="profile pic" className="small-profile-pic" />
          <div className="replies__body">
            <div className="replies__body-replier">
              <span className="pointer">
                {data.users.filter((i) => i.userId === reply.userId)[0].name.fullName()}
              </span>
            </div>
            <div className="comments__comment-date">{reply.commentReplyDate.toDateString()}</div>
            <p className="replies__body-text">{reply.body}</p>
          </div>
        </div>
      ))
    )}
  </>
);

Replies.propTypes = {
  comment: PropTypes.instanceOf(Object).isRequired,
  display: PropTypes.instanceOf(Boolean).isRequired,
};

export default Replies;
