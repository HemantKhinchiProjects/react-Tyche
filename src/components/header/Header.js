import React from 'react';
import './Header.css';
import TopHeader from './TopHeader';
TopHeader;
const Header = () => {
  return (
    <>
      <TopHeader />
      <header id="masthead" className="site-header" role="banner">
        <div className="site-branding container">
          <div className="row">
            <div className="col-sm-4 header-logo">
              <div className="site-title-description">
                <p className="site-description"></p>
              </div>
            </div>
            <div className="col-sm-8 header-banner"></div>
          </div>
        </div>
        <nav id="site-navigation" className="main-navigation" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <button href="#" id="mobile-menu-trigger">
                  <i className="fa fa-bars"></i>{' '}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
