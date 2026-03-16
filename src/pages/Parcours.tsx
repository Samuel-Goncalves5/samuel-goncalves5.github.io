import React from "react";
import "./Parcours.css";

type ParcoursItem = {
  title: string;
  date: string;
  content?: string;
  url?: string;
  image?: string;
  videoUrl?: string;
  type: "study" | "research" | "project" | "engagement" | "family" | "other";
};

type ParcoursDateItem = {
  year: number;
  list: ParcoursItem[];
};

const parcours: ParcoursDateItem[] = [
  {
    year: 2025,
    list: []
  },
  {
    year: 2024,
    list: []
  },
  {
    year: 2023,
    list: []
  },
  {
    year: 2022,
    list: []
  },
  {
    year: 2021,
    list: []
  },
  {
    year: 2020,
    list: []
  },
  {
    year: 2019,
    list: []
  },
  {
    year: 2018,
    list: []
  },
  {
    year: 2017,
    list: []
  },
  {
    year: 2016,
    list: []
  },
  {
    year: 2015,
    list: []
  },
  {
    year: 2014,
    list: []
  },
  {
    year: 2013,
    list: []
  },
  {
    year: 2012,
    list: []
  },
  {
    year: 2011,
    list: []
  },
  {
    year: 2010,
    list: []
  },
  {
    year: 2009,
    list: []
  },
  {
    year: 2008,
    list: []
  },
  {
    year: 2007,
    list: []
  },
  {
    year: 2006,
    list: []
  },
  {
    year: 2005,
    list: []
  },
  {
    year: 2004,
    list: []
  },
  {
    year: 2003,
    list: []
  },
  {
    year: 2002,
    list: [
      {
        title: "Naissance",
        date: "05/06",
        content: "À 17h15, 4,13 kilos et 53 cm",
        image: "photo à la maternité",
        type: "family"
      },
    ]
  }
];

const Parcours = () => {
  return (
    <div className="section">
      <h2>Parcours</h2>
      <div className="parcours-list">
        {parcours.map((yearpubs, index) => (
          <div key={index}>
            <h3 className="year">{yearpubs.year}</h3>
            <div>
              {yearpubs.list.map((pub, index2) => (
              <div className={`parcours-card`} key={`${index}-${index2}`}>
                <h3>{pub.title} ({pub.date})</h3>
                <div>
                  {pub.content ? <div className="left"><p className="description">{pub.content}</p></div> : undefined}
                  <div className="center">
                    {pub.image ? <img className="image" src={pub.image} alt={pub.image}/> : undefined}
                    {pub.url ? <a className="url" href={pub.url}/> : undefined}
                  </div>
                  {pub.videoUrl ? <div className="right"><iframe width="420" height="315" src={pub.videoUrl}/></div> : undefined}
                </div>
              </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parcours;