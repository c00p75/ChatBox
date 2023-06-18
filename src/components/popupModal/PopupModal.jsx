import { RiCloseCircleFill } from 'react-icons/ri';
import { PropTypes } from 'prop-types';
import './popupModal.css';
import { useEffect } from 'react';

const PopupModal = ({ title, jsx, handleDisplay }) => {
  const body = document.querySelector('body');
  useEffect(() => {
    body.classList.add('no-scroll');
    return () => {
      body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="popupModal">
      <button type="button" className="popupModal__overlay" onClick={() => handleDisplay(false)}> </button>
      <div className="popupModal__modal">
        <div className="popupModal__modal-container">
          <div className="popupModal__modal-header flex">
            <h1>{title}</h1>
            <button type="button" className="popupModal__modal-close" onClick={() => handleDisplay(false)}>
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
};

PopupModal.propTypes = {
  title: PropTypes.string.isRequired,
  jsx: PropTypes.element.isRequired,

  handleDisplay: PropTypes.func.isRequired,
};

export default PopupModal;
