import {
  MdRssFeed, MdGroups, MdOutlineCases, MdEvent, MdSchool,
} from 'react-icons/md';
import {
  BsFillChatLeftTextFill, BsCollectionPlayFill, BsBookmarkStarFill, BsQuestionCircleFill,
} from 'react-icons/bs';

const SidebarLinks = () => (
  <ul className="home__sidebar-list flex">
    <li className="home__sidebar-listItem">
      <MdRssFeed className="home__sidebar-listItem_icon" />
      <span className="home__sidebar-listItem_text">Feed</span>
    </li>
    <li className="home__sidebar-listItem">
      <BsFillChatLeftTextFill className="home__sidebar-listItem_icon" />
      <span className="home__sidebar-listItem_text">Chat</span>
    </li>
    <li className="home__sidebar-listItem">
      <BsCollectionPlayFill className="home__sidebar-listItem_icon" />
      <span className="home__sidebar-listItem_text">Videos</span>
    </li>
    <li className="home__sidebar-listItem">
      <MdGroups className="home__sidebar-listItem_icon" />
      <span className="home__sidebar-listItem_text">Groups</span>
    </li>
    <li className="home__sidebar-listItem">
      <BsBookmarkStarFill className="home__sidebar-listItem_icon" />
      <span className="home__sidebar-listItem_text">Bookmarks</span>
    </li>
    <li className="home__sidebar-listItem">
      <BsQuestionCircleFill className="home__sidebar-listItem_icon" />
      <span className="home__sidebar-listItem_text">Questions</span>
    </li>
    <li className="home__sidebar-listItem">
      <MdOutlineCases className="home__sidebar-listItem_icon" />
      <span className="home__sidebar-listItem_text">Jobs</span>
    </li>
    <li className="home__sidebar-listItem">
      <MdEvent className="home__sidebar-listItem_icon" />
      <span className="home__sidebar-listItem_text">Events</span>
    </li>
    <li className="home__sidebar-listItem">
      <MdSchool className="home__sidebar-listItem_icon" />
      <span className="home__sidebar-listItem_text">Education</span>
    </li>
  </ul>
);

export default SidebarLinks;
