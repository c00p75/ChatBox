/* eslint-disable jsx-a11y/label-has-associated-control */

import images from '../../constants/images';

const ProfileEdit = () => (
  <form>
    <div className="aboutEdit__field">
      <fieldset>
        <div className="field">
          <div className="field__item flex">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="field__item flex">
            <label htmlFor="confirmpassword">Confirm Password: </label>
            <input type="password" id="confirmpassword" name="confirmpassword" />
          </div>

          <div className="field__item flex">
            <label htmlFor="email">Email Address </label>
            <input type="email" id="email" />
          </div>

          <div className="field__item flex">
            <label htmlFor="confirmemail">Confirm Email Address </label>
            <input type="email" id="confirmemail" name="confirmemail" />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <label className="social-label">Social Profiles </label>
        <div className="field">
          <table className="social field__item">
            <tbody>
              <tr>
                <td><img src={images.twitter} alt="twitter" /></td>
                <td><input type="text" id="twitter" name="twitter" /></td>
              </tr>
            </tbody>
          </table>

          <table className="social field__item">
            <tbody>
              <tr>
                <td><img src={images.facebook} alt="twitter" /></td>
                <td><input type="text" id="facebook" name="facebook" /></td>
              </tr>
            </tbody>
          </table>

          <table className="social field__item">
            <tbody>
              <tr>
                <td><img src={images.instagram} alt="twitter" /></td>
                <td><input type="text" id="instagram" name="instagram" /></td>
              </tr>
            </tbody>
          </table>

          <table className="social field__item">
            <tbody>
              <tr>
                <td><img src={images.tiktok} alt="twitter" /></td>
                <td><input type="text" id="tiktok" name="tiktok" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>
    </div>
    <div>
      <button type="submit">Update</button>
    </div>
  </form>
);

export default ProfileEdit;
