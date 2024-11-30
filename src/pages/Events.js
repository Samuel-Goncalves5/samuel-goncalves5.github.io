import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import "./Events.css";

const Events = () => {
  const [selectedType, setSelectedType] = useState(null);
  const handleTypeClick = (type) => {
    setSelectedType((prevType) => (prevType === type ? null : type));
  };

  const { t } = useTranslation();
  const types = t("events.types", { returnObjects: true })

  return (
    <div className="events-container">
      <h2>{t("events.name")}</h2>

      <div className="legend">
        {Object.keys(types).map((type) => (
          <div
            key={types[type].name}
            className={`legend-item ${selectedType === types[type].name ? "active" : ""}`}
            onClick={() => handleTypeClick(type)}
          >
            <span className="legend-color" style={{ backgroundColor: types[type].color }}></span>
            <span className="legend-label">{types[type].name}</span>
          </div>
        ))}
      </div>

      <div className="post-it-grid">
        {t("events.list", { returnObjects: true })
        .filter((event) => !selectedType || event.type === selectedType)
        .map((event, index) => (
          <div
            className="post-it"
            key={index}
            style={{ backgroundColor: types[event.type].color }}
          >
            <p className="post-it-date">{event.date}</p>
            <p className="post-it-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
