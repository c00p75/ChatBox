/* eslint-disable jsx-a11y/label-has-associated-control */

const AboutEdit = () => (
  <form>
    <fieldset>
      <div className="field">
        <div className="field__item flex">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" />
        </div>

        <div className="field__item flex">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" />
        </div>

        <div className="field__item flex">
          <label htmlFor="middlename">Middle Name</label>
          <input type="text" id="middlename" name="middlename" />
        </div>

        <div className="field__item flex">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="field__item flex">
          <label htmlFor="dob">Date of Birth</label>
          <input id="dob" type="date" />
        </div>

        <div className="field__item flex">
          <label htmlFor="gender">Gender</label>
          <input id="gender" type="text" />
        </div>
      </div>
    </fieldset>

    <div className="line" />

    <fieldset>
      <div className="field">
        <div className="field__item flex">
          <label htmlFor="gender">Country</label>
          <input type="text" />
        </div>

        <div className="field__item flex">
          <label htmlFor="gender">State</label>
          <input type="text" />
        </div>

        <div className="field__item flex">
          <label htmlFor="gender">City</label>
          <input type="text" />
        </div>
      </div>
    </fieldset>
    <div>
      <button type="submit">Save changes</button>
    </div>
  </form>
);
export default AboutEdit;
