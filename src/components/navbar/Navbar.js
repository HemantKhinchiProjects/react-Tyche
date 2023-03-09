import React from 'react';
import Menu from './utils/Menu';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="main-navigation">
      <ul className="sf-menu">
        {Menu.map((link) => {
          const { id, text, url } = link;
          return <li></li>;
        })}
        <li>
          <a href="#">Menu Item 1</a>
        </li>
        <li>
          <a href="#">Menu Item 2</a>
        </li>
        <li>
          <a href="#">Menu Item 3</a>
        </li>
        <li>
          <a href="#">Menu Item 4</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
