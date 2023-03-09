import React from 'react';
import './Footer.css';
import lowerFooter from './lowerFooter';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className="site-Footer">Footer</footer>
      <footer className="site-copyright">
        <div className="site-info ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="menu-social" className="menu pull-left">
                  <ul id="menu-social-items" className="menu-items">
                    <li
                      id="menu-item-88"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-88"
                    >
                      <a href="https://facebook.com">
                        <span className="screen-reader-text">Facebook</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-89"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-89"
                    >
                      <a href="https://twitter.com">
                        <span className="screen-reader-text">Twitter</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-90"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-90"
                    >
                      <a href="http://dribbble.com">
                        <span className="screen-reader-text">Dribbble</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-91"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-91"
                    >
                      <a href="https://vimeo.com">
                        <span className="screen-reader-text">Vimeo</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-92"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-92"
                    >
                      <a href="https://youtube.com">
                        <span className="screen-reader-text">YouTube</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text pull-right">
                  Copyright © {new Date().getFullYear()} | Theme: Tyche |
                  Created by Hemant Khinchi.{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
