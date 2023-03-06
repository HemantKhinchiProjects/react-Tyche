import React from 'react';
import './TopHeader.css';
const Header = () => {
  return (
    <header className="top-header-bar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="top-header-bar">
              <li className="top-email">
                <i className="fa fa-envelope-o"></i> flyass@gmail.com{' '}
              </li>

              <li className="top-search">
                <form
                  role="search"
                  method="get"
                  className="pull-right"
                  id="searchform_topbar"
                  action="https://colorlibhub.com/tyche/"
                >
                  <label>
                    <span className="screen-reader-text"></span>
                    <input
                      className="search-field-top-bar"
                      id="search-field-top-bar"
                      placeholder="Search ..."
                      value=""
                      name="s"
                      type="search"
                    />
                  </label>
                  <button
                    id="search-top-bar-submit"
                    type="submit"
                    className="search-top-bar-submit"
                  >
                    <span className="fa fa-search"></span>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
