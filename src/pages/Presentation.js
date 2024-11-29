import React from "react";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.welcome')}</h1>
      <p>{t('navbar.presentation')}</p>
    </div>
  );
};

export default Presentation;