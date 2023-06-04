/* eslint-disable arrow-body-style */
import './aboutEdit.css';
import { RiCloseCircleFill } from 'react-icons/ri';

const AboutEdit = () => {
  return (
    <div className="aboutEdit">
      <div className="aboutEdit__modal-background" />
      <div className="aboutEdit__modal">
        <div className="aboutEdit__modal-container">
          <div className="aboutEdit__modal-header flex">
            <h1>Edit Information</h1>
            <button type="button" className="aboutEdit__modal-close">
              <RiCloseCircleFill />
            </button>
          </div>
          <div className="aboutEdit__modal-edit">
            <div className="aboutEdit__modal-edit_field">
              <h2>Bio</h2>
              <div className="aboutEdit__modal-edit_field-items">
                <div className="aboutEdit__modal-edit_field-item">
                  <span className="aboutEdit__modal-edit_field-item_header">Name: </span>
                  <input type="text" className="aboutEdit__modal-edit_name-value" />
                </div>

                <div className="aboutEdit__modal-edit_field-item">
                  <span className="aboutEdit__modal-edit_field-item_header">Date of Birth: </span>
                  <input type="text" className="aboutEdit__modal-edit_name-value" />
                </div>

                <div className="aboutEdit__modal-edit_field-item">
                  <span className="aboutEdit__modal-edit_field-item_header">Gender: </span>
                  <input type="text" className="aboutEdit__modal-edit_name-value" />
                </div>
              </div>
            </div>

            <div className="aboutEdit__modal-edit_field">
              <h2>Location</h2>
              <div className="aboutEdit__modal-edit_field-items">
                <div className="aboutEdit__modal-edit_field-item">
                  <span className="aboutEdit__modal-edit_field-item_header">Country: </span>
                  <input type="text" className="aboutEdit__modal-edit_name-value" />
                </div>

                <div className="aboutEdit__modal-edit_field-item">
                  <span className="aboutEdit__modal-edit_field-item_header">State: </span>
                  <input type="text" className="aboutEdit__modal-edit_name-value" />
                </div>

                <div className="aboutEdit__modal-edit_field-item">
                  <span className="aboutEdit__modal-edit_field-item_header">City: </span>
                  <input type="text" className="aboutEdit__modal-edit_name-value" />
                </div>
                <h1>Finish Info Headers and usb Headers</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEdit;
