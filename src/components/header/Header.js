import React from 'react';
import './Header.css';
const Header = () => {
  <header id="masthead" class="site-header" role="banner">
    This is Header
    <div class="site-branding container">
      <div class="row">
        <div class="col-sm-4 header-logo">
          <div class="site-title-description">
            <p class="site-description"></p>
          </div>
        </div>
        <div class="col-sm-8 header-banner"></div>
      </div>
    </div>
    <nav id="site-navigation" class="main-navigation" role="navigation">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <button href="#" id="mobile-menu-trigger">
              <i class="fa fa-bars"></i>{' '}
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>;
};
export default Header;
