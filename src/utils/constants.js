import React from 'react';
// import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaVimeoV,
  FaYoutube,
} from 'react-icons/fa';

export const navbarMenus = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'Shop',
    url: '/Shop',
  },
  {
    id: 3,
    text: 'Contact',
    url: '/Contact',
  },
  {
    id: 4,
    text: 'Blog',
    url: '/Blog',
  },
];
export const subFooter = [
  {
    id: 1,
    icon: <FaFacebookF />,
    title: 'Facebook',
    url: 'https://www.facebook.com/',
  },
  {
    id: 2,
    icon: <FaTwitter />,
    title: 'Twitter',
    url: 'https://twitter.com/',
  },
  {
    id: 3,
    icon: <FaDribbble />,
    title: 'Dribbble',
    url: 'https://dribbble.com/',
  },
  {
    id: 4,
    icon: <FaVimeoV />,
    title: 'VimeoV',
    url: 'https://vimeo.com/',
  },
  {
    id: 5,
    icon: <FaYoutube />,
    title: 'Youtube',
    url: 'https://www.youtube.com/',
  },
];
