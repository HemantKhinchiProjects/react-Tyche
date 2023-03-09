import React from 'react';
import './Footer.css';
import lowerFooter from './lowerFooter';
import { NavLink } from 'react-router-dom';
import { subFooter } from '../../utils/constants';
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
                    {subFooter.map((icon) => {
                      const { id, url, title, iconn } = icon;
                      return (
                        <li
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-88"
                          key={id}
                        >
                          <NavLink to={url}>
                            {iconn}
                            <span class="screen-reader-text">{title}</span>
                          </NavLink>
                        </li>
                      );
                    })}
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
