import "./Publications.css";

type PublicationItem = {
  title: string;
  authors: string;
  date: string;
  journal: string;
  description: string;
  link: string;
  type: "techrep" | "article";
};

type PublicationDateItem = {
  year: number;
  list: PublicationItem[];
};

const publications: PublicationDateItem[] = [
  {
    year: 2025,
    list: [
      {
        title: "Identification de circulation d'images dans de grandes collections de photographies historiques : construction de représentations multimodales",
        authors: "Samuel Gonçalves, Camille Kurtz, Florence Cloppet, Daniel Foliard, Isabelle Bloch (en compagnie de Raphaël Renard, Mohamed Chelali, Fantin Le Ber, Emre Çağan Kanlı, Louise De Wilde-Calmettes, Sihem Yousfi, Marie-Louise Kitoko)",
        date: "Août 2025",
        journal: "Projet ANR HighVision : Université Paris Cité [LIPADE, ECHELLES], Sorbonne Université [LIP6]",
        description: "Les espaces latents induits par l'état de l'art des modèles d'IA en vision par ordinateur et intelligence artificielle (CVAI) tendent à être utilisables sans ré-entrainement pour un grand nombre de tâches et de domaines. Nous évaluons des modèles de vision et des modèles vision-langage (VLM) pour des tâches de partionnement de données dans le domaine des photographies patrimoniales, avec et sans ré-entrainement. Nous utilisons l'information sémantique pour guider l'apprentissage de représentation des modèles.",
        link: "/pdfs/202508-internrep-goncalves.pdf",
        type: "techrep",
      },
      {
        title: "Comparaison entre les méthodes de modélisation de sujets et les LLM - Seconde version",
        authors: "Samuel Gonçalves, Fabrice Boissier",
        date: "Janvier 2025",
        journal: "LRE: Rapport Technique",
        description: "L'objectif principal de ce projet est d'évaluer l'impact des différentes techniques de prétraitement des données sur la pertinence et la précision des résultats de la modélisation thématique. Plus précisément, l'étude se concentre sur les effets du nettoyage de la ponctuation, de la lemmatisation et de la transformation des mots en concepts. En outre, le projet vise à évaluer comment différents types d'entrées utilisateur influencent les performances et les résultats des grands modèles de langage.",
        link: "/pdfs/202501-techrep-goncalves.pdf",
        type: "techrep",
      },
    ]
  },
  {
    year: 2024,
    list: [
      {
        title: "Comparaison entre les méthodes de modélisation de sujets et les LLM - Première version",
        authors: "Samuel Gonçalves, Fabrice Boissier",
        date: "Juin 2024",
        journal: "LRE: Rapport Technique",
        description: "L'objectif principal de ce projet est d'évaluer l'impact des différentes techniques de prétraitement des données sur la pertinence et la précision des résultats de la modélisation thématique. Plus précisément, l'étude se concentre sur les effets du nettoyage de la ponctuation, de la lemmatisation et de la transformation des mots en concepts. En outre, le projet vise à évaluer comment différents types d'entrées utilisateur influencent les performances et les résultats des grands modèles de langage.",
        link: "/pdfs/202406-techrep-goncalves.pdf",
        type: "techrep",
      },
    ]
  },
  {
    year: 2023,
    list: [
      {
        title: "Traitement automatique du langage appliqué à la militarisation de la littérature jeunesse de 1860 à 1919",
        authors: "Samuel Gonçalves, Fabrice Boissier, Marie Puren",
        date: "Juin 2023",
        journal: "LRE: Rapport Technique",
        description: "L'objectif du projet est d'extraire des textes sélectionnés le vocabulaire et le champ lexical qui indiquent la force de la tendance à la militarisation. Le rapport décrit le développement d'outils pour la recherche de documents, la tokenisation, la lemmatisation, l'application de la méthode CREA et la visualisation des résultats.",
        link: "/pdfs/202306-techrep-goncalves.pdf",
        type: "techrep",
      },
    ]
  },
];

const Publications = () => {
  return (
    <div className="section">
      <h2>Publications</h2>
      <div className="publications-list">
        {publications.map((yearpubs, index) => (
          <div key={index}>
            <h3 className="year">{yearpubs.year}</h3>
            <div>
              {yearpubs.list.map((pub, index2) => (
              <div className="publication-card" key={`${index}-${index2}`}>
                <h3>{pub.title}</h3>
                <p className="authors">{pub.authors}</p>
                <p className="journal">{pub.journal} ({pub.date})</p>
                <p className="description">{pub.description}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="read-more">
                  {pub.type === "techrep" ? "Lire le rapport" : "Lire l'article"}
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