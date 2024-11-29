import React from "react";
import { useTranslation } from "react-i18next";
import "./Experiences.css";

const Experiences = () => {
  const { t } = useTranslation();

  const Timeline = ({name}) => <div className="timeline">
  {t(name, { returnObjects: true }).map((exp, index) => (
    <div className="timeline-item" key={index}>
      <div className="timeline-date">{exp.date}</div>
      <div className="timeline-content">
        <h3>{exp.title}</h3>
        <p className="timeline-company">📍 {exp.company}</p>
        <p>{exp.description}</p>
      </div>
    </div>
  ))}
  </div>
  
  return (
    <div className="experiences-container">
      <h2>{t("experiences.professional_name")}</h2>
      <Timeline name={"experiences.professional"} />


      <h2>{t("experiences.education_name")}</h2>
      <Timeline name={"experiences.education"} />
    </div>
  );
};

export default Experiences;