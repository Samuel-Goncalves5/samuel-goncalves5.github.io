import React from "react";
import { useTranslation } from "react-i18next";
import "./Publications.css";

const Publications = () => {
  const { t } = useTranslation();

  return (
    <div className="publications-container">
      <h2>{t("publications.name")}</h2>
      <div className="publications-list">
        {t("publications.list", { returnObjects: true }).map((yearpubs, index) => (
          <div key={index}>
            <h3 className="Year">{yearpubs.year}</h3>
            <div>
              {yearpubs.list.map((pub, index2) => (
              <div className="publication-card" key={`${index}-${index2}`}>
                <h3>{pub.title}</h3>
                <p className="authors">{pub.authors}</p>
                <p className="journal">{pub.journal} ({pub.date})</p>
                <p className="description">{pub.description}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="read-more">
                  {pub.type === "techrep" ? t("publications.more_techrep") : t("publications.more_article")}
                </a>
              </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
