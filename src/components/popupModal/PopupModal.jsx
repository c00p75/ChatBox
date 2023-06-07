import { RiCloseCircleFill } from 'react-icons/ri';
import { PropTypes } from 'prop-types';
import './popupModal.css';

const PopupModal = ({ title, jsx }) => (
  <div className="popupModal">
    <div className="popupModal__modal-background" />
    <div className="popupModal__modal">
      <div className="popupModal__modal-container">
        <div className="popupModal__modal-header flex">
          <h1>{title}</h1>
          <button type="button" className="popupModal__modal-close">
            <RiCloseCircleFill />
          </button>
        </div>
        <div className="popupModal__modal-container__content">
          { jsx }
        </div>
      </div>
    </div>
  </div>
);

PopupModal.propTypes = {
  title: PropTypes.string.isRequired,
  jsx: PropTypes.element.isRequired,
};

export default PopupModal;
