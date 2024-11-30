import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <ul className="nav-list">
        <ul className="pages-list">
          <li><Link to="/">{t('navbar.presentation')}</Link></li>
          <li><Link to="/publications">{t('navbar.publications')}</Link></li>
          <li><Link to="/experiences">{t('navbar.experiences')}</Link></li>
          <li><Link to="/events">{t('navbar.events')}</Link></li>
        </ul>
        <ul className="languages-list">
          <li><button onClick={() => changeLanguage('fr')}>🇫🇷</button></li>
          <li><button onClick={() => changeLanguage('en')}>🇬🇧</button></li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;