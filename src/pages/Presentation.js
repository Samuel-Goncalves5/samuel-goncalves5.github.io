import React from "react";
import { useTranslation } from "react-i18next";
import "./Presentation.css";

const Presentation = () => {
  const { t } = useTranslation();

  const ElementList = ({name}) => <ul>
  {t(name, { returnObjects: true }).map(
    (element, index) => (
      <li key={index}><span>{element[0]}</span> {element[1]}</li>
    )
  )}
  </ul>

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
          <p>{t("presentation.description")}</p>
        </header>

        <img 
        src={`${process.env.PUBLIC_URL}/profile_picture.png`} 
        alt="Profile" 
        className="profile-image" 
        />
      </div>

      <section className="section">
        <h2>{t("presentation.summary_title")}</h2>
        <p>{t("presentation.summary_text")}</p>
      </section>

      <section className="section">
        <h2>{t("presentation.skills.title")}</h2>
        <h3>{t("presentation.skills.fields.name")}</h3>
        <ElementList name={"presentation.skills.fields.list"} />

        <h3>{t("presentation.skills.computer_lang.name")}</h3>
        <ElementList name={"presentation.skills.computer_lang.list"} />

        <h3>{t("presentation.skills.lang.name")}</h3>
        <ElementList name={"presentation.skills.lang.list"} />
      </section>

      <section className="section">
        <h2>{t("presentation.also.name")}</h2>
        <h3>{t("presentation.also.hobbies.name")}</h3>
        <ElementList name={"presentation.also.hobbies.list"} />

        <h3>{t("presentation.also.interests.name")}</h3>
        <ElementList name={"presentation.also.interests.list"} />
      </section>

      <section className="section">
        <h2>{t("presentation.contact_title")}</h2>
        <div className="contact-links">
          <a href="mailto:samuel.goncalves@epita.fr">{t("presentation.email")}</a>
          <a href="mailto:samuel.goncalves@etu.sorbonne-universite.fr">{t("presentation.email2")}</a>
          <a
            href="https://www.linkedin.com/in/samuel-goncalves-chercheur"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("presentation.linkedin")}
          </a>
          <a
            href="https://github.com/Samuel-Goncalves5"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("presentation.github")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Presentation;