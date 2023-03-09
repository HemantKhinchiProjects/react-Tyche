import React from 'react';
import { navbarMenus } from '../../utils/constants';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="main-navigation">
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
    </nav>
  );
};

export default Navbar;
