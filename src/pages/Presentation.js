import React from "react";
import { useTranslation } from "react-i18next";
import "./Presentation.css";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <div className="presentation-container">
      <div className="header-container">
        <img 
          src={`${process.env.PUBLIC_URL}/profile.png`} 
          alt="Profile" 
          className="profile-image" 
        />

        <header className="presentation-header">
          <h1>{t("presentation.title")}</h1>
          <p>{t("presentation.subtitle")}</p>
        </header>

        <img 
        src={`${process.env.PUBLIC_URL}/profile_picture.png`} 
        alt="Profile" 
        className="profile-image" 
        />
      </div>

      <section className="section">
        <h2>{t("presentation.summary_title")}</h2>
        <p>{t("presentation.summary_text_1")}</p>
        <p>{t("presentation.summary_text_2")}</p>
      </section>

      <section className="section">
        <h2>Curriculum vitæ</h2>
        <div className="button-list">
          <a href="/pdfs/CV-fr.pdf" target="_blank" rel="noopener noreferrer">🇫🇷</a>
          <a href="/pdfs/CV-en.pdf" target="_blank" rel="noopener noreferrer">🇬🇧</a>
        </div>
      </section>

      <section className="section">
        <h2>{t("presentation.profiles")}</h2>
        <div className="button-list">
          <a href="https://www.linkedin.com/in/samuel-goncalves-chercheur/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Samuel-Goncalves5" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.kaggle.com/uberblitzsche" target="_blank" rel="noopener noreferrer">Kaggle</a>
          {/*<a href="https://bsky.app/profile/uberblitzsche.bsky.social" target="_blank" rel="noopener noreferrer">BlueSky</a>
          <a href="https://www.instagram.com/smuel_gonclves" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@uberblitzsche" target="_blank" rel="noopener noreferrer">Youtube</a>*/}
          <a href="https://discord.com/users/uberblitzsche" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>
      </section>

      <section className="section">
        <h2>{t("presentation.contact")}</h2>
        <div className="button-list">
          <a href="mailto:samuel.goncalves@epita.fr" target="_blank" rel="noopener noreferrer">Mail EPITA</a>
          <a href="mailto:samuel.goncalves@etu.sorbonne-universite.fr" target="_blank" rel="noopener noreferrer">Mail Sorbonne</a>
        </div>
      </section>
    </div>
  );
};

export default Presentation;