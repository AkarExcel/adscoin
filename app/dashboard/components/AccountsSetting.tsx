import React from 'react'

const AccountsSetting = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12  col-lg-3">
          <div id="account-edit-photo">
            <div>
              <img src="images/demo/account-profile.jpg" alt="Account Image" />
            </div>
            <p>
              <a href="#!" className="btn btn-green-pro">
                Change Profile Picture
              </a>
            </p>
            <p>
              <a href="#!" className="btn">
                Delete Photo
              </a>
            </p>
          </div>
        </div>
        {/* close .col */}
        <div className="col">
          <form className="account-settings-form">
            <h5>General Information</h5>
            <p className="small-paragraph-spacing">
              By letting us know your name, we can make our support experience
              much more personal.
            </p>
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="first-name" className="col-form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    defaultValue="Suzie"
                  />
                </div>
              </div>
              {/* close .col */}
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="last-name" className="col-form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    defaultValue="Smith"
                  />
                </div>
              </div>
              {/* close .col */}
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="last-name" className="col-form-label">
                    Country:
                  </label>
                  <select className="custom-select">
                    <option value={0}>All Countries</option>
                    <option value={1}>Argentina</option>
                    <option value={2}>Australia</option>
                    <option value={3}>Bahamas</option>
                    <option value={4}>Belgium</option>
                    <option value={5}>Brazil</option>
                    <option value={6}>Canada</option>
                    <option value={7}>Chile</option>
                    <option value={8}>China</option>
                    <option value={9}>Denmark</option>
                    <option value={10}>Ecuador</option>
                    <option value={11}>France</option>
                    <option value={12}>Germany</option>
                    <option value={13}>Greece</option>
                    <option value={14}>Guatemala</option>
                    <option value={15}>Italy</option>
                    <option value={16}>Japan</option>
                    <option value={17}>asdfasdf</option>
                    <option value={18}>Korea</option>
                    <option value={19}>Malaysia</option>
                    <option value={20}>Monaco</option>
                    <option value={21}>Morocco</option>
                    <option value={22}>New Zealand</option>
                    <option value={23}>Panama</option>
                    <option value={24}>Portugal</option>
                    <option value={25}>Russia</option>
                    <option value={26}>United Kingdom</option>
                    <option selected="">United States</option>
                  </select>
                </div>
              </div>
              {/* close .col */}
            </div>
            {/* close .row */}
            <hr />
            <h5>Account Information</h5>
            <p className="small-paragraph-spacing">
              You can change the email address you use here.
            </p>
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="e-mail" className="col-form-label">
                    E-mail
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="e-mail"
                    defaultValue="suzie@outlook.com"
                  />
                </div>
              </div>
              {/* close .col */}
              <div className="col-sm">
                <div className="form-group">
                  <div>
                    <label htmlFor="button-change" className="col-form-label">
                      &nbsp; &nbsp;
                    </label>
                  </div>
                  <a href="#!" className="btn btn-form">
                    Change E-mail
                  </a>
                </div>
              </div>
              {/* close .col */}
            </div>
            {/* close .row */}
            <hr />
            <h5>Change Password</h5>
            <p className="small-paragraph-spacing">
              You can change the password you use for your account here.
            </p>
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="password" className="col-form-label">
                    Current Password:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    defaultValue="············"
                  />
                </div>
              </div>
              {/* close .col */}
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="new-password" className="col-form-label">
                    New Password:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="new-password"
                    placeholder="Minimum of 6 characters"
                  />
                </div>
              </div>
              {/* close .col */}
              <div className="col-sm">
                <div className="form-group">
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="col-form-label"
                    >
                      &nbsp; &nbsp;
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="confirm-password"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
              {/* close .col */}
            </div>
            {/* close .row */}
            {/* <hr /> */}
            {/* <h5>Preferred Genres</h5>
            <p className="small-paragraph-spacing">
              Pick your favorite genres for content.
            </p>
            <div className="registration-genres-step">
              <ul className="registration-genres-choice">
                <li className="active">
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/drama.png" alt="Drama" />
                  <h6>Drama</h6>
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/comedy.png" alt="Comedy" />
                  <h6>Comedy</h6>
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/action.png" alt="Action" />
                  <h6>Action</h6>
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/romance.png" alt="Romance" />
                  <h6>Romance</h6>
                </li>
                <li className="active">
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/horror.png" alt="Horror" />
                  <h6>Horror</h6>
                </li>
                <li className="active">
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/fantasy.png" alt="Fantasy" />
                  <h6>Fantasy</h6>
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/sci-fi.png" alt="Sci-Fi" />
                  <h6>Sci-Fi</h6>
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/thriller.png" alt="Thriller" />
                  <h6>Thriller</h6>
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/western.png" alt="Western" />
                  <h6>Western</h6>
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/adventure.png" alt="Adventure" />
                  <h6>Adventure</h6>
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/animation.png" alt="Animation" />
                  <h6>Animation</h6>
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  <img src="images/genres/documentary.png" alt="Documentary" />
                  <h6>Documentary</h6>
                </li>
              </ul>
              <div className="clearfix" />
            </div> */}
            {/* close .registration-genres-step */}
            <div className="clearfix" />
            <hr />
            <p>
              <a href="dashboard-account.html" className="btn btn-green-pro">
                Save Changes
              </a>
            </p>
            <br />
          </form>
        </div>
        {/* close .col */}
      </div>
      {/* close .row */}
    </div>
  )
}

export default AccountsSetting