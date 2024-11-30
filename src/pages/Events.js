import React from "react";
import { useTranslation } from "react-i18next";
import "./Events.css";

// Liste des événements avec type
const events = [
  { date: "Janvier 2024", description: "Début de ma recherche sur les archives numériques.", type: "Recherche" },
  { date: "Septembre 2023", description: "Collaboration avec le CNRS pour un rapport technique.", type: "Rapport" },
  { date: "Février 2022", description: "Stage à l'étranger en Finlande.", type: "Stage" },
  { date: "Janvier 2024", description: "Début de ma recherche sur les archives numériques.", type: "Recherche" },
  { date: "Septembre 2023", description: "Collaboration avec le CNRS pour un rapport technique.", type: "Rapport" },
  { date: "Mai 2023", description: "Participation à une conférence sur la vision par ordinateur.", type: "Conférence" },
  { date: "Janvier 2024", description: "Début de ma recherche sur les archives numériques.", type: "Recherche" },
  { date: "Septembre 2023", description: "Collaboration avec le CNRS pour un rapport technique.", type: "Rapport" },
  { date: "Mai 2023", description: "Participation à une conférence sur la vision par ordinateur.", type: "Conférence" },
  { date: "Février 2022", description: "Stage à l'étranger en Finlande.", type: "Stage" },
  { date: "Janvier 2024", description: "Début de ma recherche sur les archives numériques.", type: "Recherche" },
  { date: "Septembre 2023", description: "Collaboration avec le CNRS pour un rapport technique.", type: "Rapport" },
  { date: "Mai 2023", description: "Participation à une conférence sur la vision par ordinateur.", type: "Conférence" },
  { date: "Février 2022", description: "Stage à l'étranger en Finlande.", type: "Stage" },
];

// Couleurs associées aux types
const typeColors = {
  Recherche: "#fdfd96", // Jaune
  Rapport: "#ffb6c1", // Rose
  Conférence: "#87cefa", // Bleu clair
  Stage: "#98fb98", // Vert clair
};

const Events = () => {
  const { t } = useTranslation();

  /*
  return (
    <div className="events-container">
      <h2>{t("events.name")}</h2>

      <div className="legend">
        {Object.keys(typeColors).map((type) => (
          <div key={type} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: typeColors[type] }}></span>
            <span className="legend-label">{type}</span>
          </div>
        ))}
      </div>

      <div className="post-it-grid">
        {events.map((event, index) => (
          <div
            className="post-it"
            key={index}
            style={{ backgroundColor: typeColors[event.type] }}
          >
            <p className="post-it-date">{event.date}</p>
            <p className="post-it-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );*/

  return <h2>🛠</h2>
};

export default Events;
