import React from 'react';
import './Navbar.css';
import { navbarMenus } from '../../utils/constants';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="main-navigation">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="sf-menu">
              {navbarMenus.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
