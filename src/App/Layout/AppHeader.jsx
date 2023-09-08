import React from 'react';
import '../Components/HeaderMenu/styles.css';
import './styles/header.css';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';
import LogoIcon from '../Images/start-it-logo.svg';
import person from '../Images/star.svg';
import hamburger from '../Images/star.svg';

const Logo = () => (
  <a href="/">
    {' '}
    <img style={{ width: 150 }} src={LogoIcon} className="logo" alt="logo" />
  </a>
);

export function AppHeader({ handleVisible }) {
  return (
    <header>
      <button className="header-button">
        <img src={hamburger} alt="hamburger" onClick={handleVisible} />
      </button>
      <Logo />
      <HeaderMenu />
      <button className="header-button">
        <img src={person} alt="person" />
      </button>
    </header>
  );
}
