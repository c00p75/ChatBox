/* eslint-disable jsx-a11y/label-has-associated-control */
import { BsTwitter } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';

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

          <div className="field__item flex">
            <label>Social Profile </label>
            <table className="social">
              <tr>
                <td><BsTwitter color="deepskyblue" /></td>
                <td><input type="text" id="twitter" name="twitter" /></td>
              </tr>
            </table>

            <div className="social">
              <span>Add face book, insta, and tiktok</span>
              <span><GrFacebook color="deepskyblue" /></span>
              <input type="text" id="facebook" name="facebook" />
            </div>

            <div className="social">
              <span><BsTwitter color="deepskyblue" /></span>
              <input type="text" id="instagram" name="instagram" />
            </div>

            <div className="social">
              <span><GrFacebook color="deepskyblue" /></span>
              <input type="text" id="tiktok" name="tiktok" />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div>
      <button type="submit">Update</button>
    </div>
  </form>
);

export default ProfileEdit;
