import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change la langue courante
  };

  return (
    <nav>
      <ul style={styles.navList}>
        <li><Link to="/">{t('navbar.presentation')}</Link></li>
        <li><Link to="/experiences">{t('navbar.experiences')}</Link></li>
        <li><Link to="/publications">{t('navbar.publications')}</Link></li>
        <li><Link to="/projets">{t('navbar.projects')}</Link></li>
        <li><Link to="/contact">{t('navbar.contact')}</Link></li>
      </ul>
      <div style={styles.languageSwitcher}>
        <button onClick={() => changeLanguage('fr')}>FR</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>
    </nav>
  );
};

const styles = {
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    padding: 0,
  },
  languageSwitcher: {
    marginLeft: "auto",
    display: "flex",
    gap: "10px",
  },
};

export default Navbar;