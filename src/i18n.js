import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      navbar: {
        presentation: "Presentation",
        publications: "Publications",
        experiences: "Experiences",
        events: "Events"
      },
      presentation: {
        title: "Samuel Gonçalves",
        subtitle: "Research Student at Sorbonne University and EPITA",
        summary_title: "Summary",
        summary_text_1:
          "Passionate about mathematics, computer science and research. Double-degree student-researcher at EPITA (double major in Image Processing and Research) and Sorbonne University (Image Processing). DMHSS (Digital Methods for Humanities and Social Sciences) team in the EPITA research laboratory.",
        summary_text_2:
          "My main goal is to make computer science, and in particular artificial intelligence, available to the historical sciences. To achieve this, I work in the research community, where I meet people with both computer science and history backgrounds. Right from my first steps in the research field, at EPITA, I was attracted by the link between these two worlds, and thus joined a research team working on this interaction.",
        profiles: "Profiles",
        contact: "Contact",
      },
      experiences: {
        professional_name: "Professional experience",
        professional: [
          {
            title: "\"Identification of image circulation in large collections of historical photographs\"",
            company: "ANR HighVision Project / LIPADE Laboratory / Paris Cité University",
            date: "2025 (6 mois)",
            description: "Multimodality (Image and text processing) applied to historical photographs (Forbin Fund among others), Computer Vision, AI, Research, Use of the Jean Zay supercomputer. Collaboration with the ECHELLES and LIP6 laboratories, the French National Archives, the Historical Service of Defense (French Ministry of the Armed Forces), the Historical Library of the City of Paris and the IMC Toronto.",
          },
          {
            title: "\"Exploration et analyse de jeux de données patrimoniales visuelles et multimodales\"",
            company: "Hackathon PictorIA & BnF Datalab / Collaboration avec le projet ANR HighVision",
            date: "2024 (2 jours)",
            description: "Travail sur des images de la Commune, Utilisation des outils ArkIndex (Teklia), AIKON, Panoptic.",
          },
          {
            title: "Student researcher",
            company: "DMHSS team (Digital Methods for Humanities and Social Sciences) in the EPITA Research Laboratory (LRE)",
            date: "2023 - 2025",
            description: "Text processing (LDA, FCA), Digital Humanities, Research, AI (LLM (BERT, GPT, Transformers), RNN), Neural networks, Git, Docker, Technical report writing, Bibliography, Lightning Talks, Seminars.",
          },
          {
            title: "C++ / CUDA developer on Holovibes software",
            company: "CNRS / Quinze-Vingts Hospital",
            date: "2023 - 2024",
            description: "Teamwork, Holography, Ophthalmological medical imaging, Parallel / GPU programming.",
          },
          {
            title: "Web Developer (HTML, CSS, JavaScript)",
            company: "Tampere Flut Fest (Tampere, Finland)",
            date: "2022 (4 months)",
            description: "Teamwork, Agile Scrum Method, React JavaScript, Professional English.",
          },
          {
            title: "Unity / C# Developer",
            company: "Images 30",
            date: "2021 (2 months)",
            description: "Team management, Communication, Blender (3D Animation), Physics programming (gravity, trajectory).",
          },
        ],
        education_name: "Education",
        education: [
          {
            title: "Master's degree in computer science | Advanced Image and Vision Processing",
            company: "Sorbonne University",
            date: "2024 - 2025",
            description: "IMAges course",
          },
          {
            title: "Engineering diploma in computer science | Engineering cycle",
            company: "EPITA",
            date: "2022 - 2025",
            description: "IMAGE (Image Processing) and RDI (Research) courses",
          },
          {
            title: "Erasmus",
            company: "Tampere University, Finland",
            date: "2022",
            description: "International semester",
          },
          {
            title: "Integrated preparatory cycle",
            company: "EPITA",
            date: "2020 - 2022",
            description: "",
          },
          {
            title: "General scientific baccalaureate | Highest honour",
            company: "Frédéric Mistral High School",
            date: "2017 - 2020",
            description: "Mathematics Specialization",
          },
        ],
      },
      publications: {
        name: "Publications",
        more_article: "Read the article",
        more_techrep: "Read the report",
        list: [
          {
            year: 2025,
            list: [
              {
                title: "Topic modeling methods comparison against LLM",
                authors: "Samuel Gonçalves, Fabrice Boissier",
                date: "January 2025",
                journal: "LRE: Technical report",
                description: "The primary objective of this project is to assess how various data pre-processing techniques impact the relevance and accuracy of the topic modeling results. Specifically, the study focuses on the effects of punctuation cleaning, lemmatization and words to concepts transformation. Additionally, the project aims to evaluate how different types of prompts influence the performance and output of large language models.",
                link: "/pdfs/202501-techrep-goncalves.pdf",
                type: "techrep",
              },
            ]
          },
          {
            year: 2024,
            list: [
              {
                title: "Topic modeling methods comparison against LLM",
                authors: "Samuel Gonçalves, Fabrice Boissier",
                date: "June 2024",
                journal: "LRE: Technical report",
                description: "The primary objective of this project is to assess how various data pre-processing techniques impact the relevance and accuracy of the topic modeling results. Specifically, the study focuses on the effects of punctuation cleaning, lemmatization and words to concepts transformation. Additionally, the project aims to evaluate how different types of prompts influence the performance and output of large language models.",
                link: "/pdfs/202406-techrep-goncalves.pdf",
                type: "techrep",
              },
            ]
          },
          {
            year: 2023,
            list: [
              {
                title: "Automatic language processing applied to the militarization of children's literature from 1860 to 1919",
                authors: "Samuel Gonçalves, Fabrice Boissier, Marie Puren",
                date: "June 2023",
                journal: "LRE: Technical report",
                description: "The project's objective is to extract the vocabulary and lexical field that indicate the strength of the militarization trend from the selected texts. The report describes the development of tools for document retrieval, tokenization, lemmatization, application of the CREA method, and visualization of results.",
                link: "/pdfs/202306-techrep-goncalves.pdf",
                type: "techrep",
              }
            ]
          }
        ],
      },
      events: {
        name: "Key events",
        types: {
          research: {
            name: "Research",
            color: "#fdfd96",
          },
          highschool: {
            name: "Highschool",
            color: "#ffb6c1",
          },
          postBac: {
            name: "Post bac",
            color: "#87cefa",
          },
          international: {
            name: "International",
            color: "#98fb98",
          },
          other: {
            name: "Other",
            color: "#ffffff",
          }
        },
        list: [
          {
            date: "27/11/2024",
            description: "Visit to the National Archives of France",
            type: "other"
          },
          {
            date: "26/11/2024",
            description: "Second Lightning Talk of my third year",
            type: "research"
          },
          {
            date: "25/11/2024",
            description: "Accepted to participate in the ANR HighVision project",
            type: "research"
          },
          {
            date: "23/11/2024",
            description: "Ambassador for EPITA at my high school",
            type: "highschool"
          },
          {
            date: "22/10/2024",
            description: "First Lightning Talk of my third year",
            type: "research"
          },
          {
            date: "11/2023",
            description: "Ambassador for EPITA at my high school",
            type: "highschool"
          },
          {
            date: "11/2022",
            description: "Ambassador for EPITA at my high school",
            type: "highschool"
          },
          {
            date: "02/01/2022",
            description: "Departure for Finland",
            type: "international"
          },
          {
            date: "11/2021",
            description: "Ambassador for EPITA at my high school",
            type: "highschool"
          },
          {
            date: "11/2020",
            description: "Ambassador for EPITA at my high school",
            type: "highschool"
          },
          {
            date: "14/09/2020",
            description: "First year at EPITA",
            type: "postBac"
          },
          {
            date: "29/04/2020",
            description: "Highly ranked, accepted at EPITA",
            type: "postBac"
          },
          {
            date: "11/01/2020",
            description: "Discovery of EPITA by their ambassadors in my high school",
            type: "highschool"
          },
        ]
      }
    },
  },
  fr: {
    translation: {
      navbar: {
        presentation: "Présentation",
        publications: "Publications",
        experiences: "Expériences",
        events: "Événements"
      },
      presentation: {
        title: "Samuel Gonçalves",
        subtitle: "Étudiant-Chercheur à Sorbonne Université et EPITA",
        summary_title: "Résumé",
        summary_text_1:
          "Passionné de mathématiques, d'informatique et de recherche. Étudiant-chercheur en double-diplôme à EPITA (double majeure Traitement d'image et Recherche) et Sorbonne Université (Traitement d'Image). Equipe MNSHS (Méthodes Numériques pour les Sciences Humaines et Sociales) dans le laboratoire de recherche de l'EPITA.",
        summary_text_2:
          "Mon objectif principal est de contribuer à mettre l'informatique, et en particulier l'intelligence artificielle, au service des sciences historiques. Pour y parvenir, je travaille dans le monde de la recherche, où je rencontre aussi bien des profils orientés informatique qu'orientés histoire. Dès mes premiers pas dans le domaine de la recherche, au sein de l'EPITA, j'ai été attiré par la liaison entre ces deux mondes, et j'ai donc rejoint une équipe de recherche travaillant sur cette interaction.",
          profiles: "Mes profils",
          contact: "Me contacter",
      },
      experiences: {
        professional_name: "Expérience professionnelle",
        professional: [
          {
            title: "\"Identification de circulation d'images dans de larges collections de photographies historiques\"",
            company: "Projet ANR HighVision / Laboratoire LIPADE / Université Paris Cité",
            date: "2025 (6 mois)",
            description: "Multimodalité (Traitement d'image et de textes) appliquée à des photographies historiques (Fonds Forbin entre autres), Vision par ordinateur, IA, Recherche, Utilisation du supercalculateur Jean Zay. Collaboration avec les laboratoires ECHELLES et LIP6, les Archives Nationales, le Service Historique de la Défense (Ministère des Armées), la Bibliothèque Historique de la Ville de Paris et l'IMC Toronto.",
          },
          {
            title: "\"Exploration et analyse de jeux de données patrimoniales visuelles et multimodales\"",
            company: "Hackathon PictorIA & BnF Datalab / Collaboration avec le projet ANR HighVision",
            date: "2024 (2 jours)",
            description: "Travail sur des images de la Commune, Utilisation des outils ArkIndex (Teklia), AIKON, Panoptic.",
          },
          {
            title: "Étudiant-chercheur",
            company: "Équipe MNSHS (Méthodes Numériques pour les Sciences Humaines et Sociales) des Laboratoire de Recherche de l'EPITA (LRE)",
            date: "2023 - 2025",
            description: "Traitement de textes (LDA, FCA), Humanités numériques, Recherche, IA (LLM (BERT, GPT, Transformers), RNN), Réseaux de neurones, Git, Docker, Rédaction de rapports techniques, Bibliographie, Lightning Talks, Séminaires.",
          },
          {
            title: "Développeur C++ / CUDA sur le logiciel Holovibes",
            company: "CNRS / Hôpital des Quinze-Vingts",
            date: "2023 - 2024",
            description: "Travail d'équipe, Holographie, Imagerie médicale ophtalmologique, Programmation parallèle / GPU.",
          },
          {
            title: "Développeur web (HTML, CSS, JavaScript)",
            company: "Tampere Flut Fest (Tampere, Finlande)",
            date: "2022 (4 mois)",
            description: "Travail d'équipe, Méthode Agile Scrum, JavaScript React, Anglais professionnel.",
          },
          {
            title: "Développeur Unity / C#",
            company: "Images 30",
            date: "2021 (2 mois)",
            description: "Gestion d'équipe, Communication, Blender (Animation 3D), Programmation physique (gravité, trajectoire).",
          },
        ],
        education_name: "Diplômes et formation",
        education: [
          {
            title: "Master informatique | Traitement Avancé des Images et Vision",
            company: "Sorbonne Université",
            date: "2024 - 2025",
            description: "Parcours IMAges",
          },
          {
            title: "Diplôme d'ingénieur en informatique | Cycle ingénieur",
            company: "EPITA",
            date: "2022 - 2025",
            description: "Parcours IMAGE (Traitement d'Image) et RDI (Recherche)",
          },
          {
            title: "Erasmus",
            company: "Université de Tampere, Finlande",
            date: "2022",
            description: "Semestre à l'international",
          },
          {
            title: "Cycle préparatoire intégré",
            company: "EPITA",
            date: "2020 - 2022",
            description: "",
          },
          {
            title: "Baccalauréat général scientifique | Mention très bien",
            company: "Lycée Frédéric Mistral",
            date: "2017 - 2020",
            description: "Spécialité Mathématiques",
          },
        ],
      },
      publications: {
        name: "Publications",
        more_article: "Lire l'article",
        more_techrep: "Lire le rapport",
        list: [
          {
            year: 2025,
            list: [
              {
                title: "Comparaison entre les méthodes de modélisation de sujets et les LLM",
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
                title: "Comparaison entre les méthodes de modélisation de sujets et les LLM",
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
        ],
      },
      events: {
        name: "Événements marquants",
        types: {
          research: {
            name: "Recherche",
            color: "#fdfd96",
          },
          highschool: {
            name: "Lycée",
            color: "#ffb6c1",
          },
          postBac: {
            name: "Post bac",
            color: "#87cefa",
          },
          international: {
            name: "International",
            color: "#98fb98",
          },
          other: {
            name: "Divers",
            color: "#ffffff",
          }
        },
        list: [
          {
            date: "27/11/2024",
            description: "Visite des Archives nationales de France",
            type: "other"
          },
          {
            date: "26/11/2024",
            description: "Lightning Talk de 3ème année n°2",
            type: "research"
          },
          {
            date: "25/11/2024",
            description: "Accepté pour participer au projet ANR HighVision",
            type: "research"
          },
          {
            date: "23/11/2024",
            description: "Salon des ambassadeurs, représentant EPITA",
            type: "highschool"
          },
          {
            date: "22/10/2024",
            description: "Lightning Talk de 3ème année n°1",
            type: "research"
          },
          {
            date: "11/2023",
            description: "Salon des ambassadeurs, représentant EPITA",
            type: "highschool"
          },
          {
            date: "11/2022",
            description: "Salon des ambassadeurs, représentant EPITA",
            type: "highschool"
          },
          {
            date: "02/01/2022",
            description: "Départ pour la Finlande",
            type: "international"
          },
          {
            date: "11/2021",
            description: "Salon des ambassadeurs, représentant EPITA",
            type: "highschool"
          },
          {
            date: "11/2020",
            description: "Salon des ambassadeurs, représentant EPITA",
            type: "highschool"
          },
          {
            date: "14/09/2020",
            description: "Rentrée à l'EPITA",
            type: "postBac"
          },
          {
            date: "29/04/2020",
            description: "Grand classé, accepté à l'EPITA",
            type: "postBac"
          },
          {
            date: "11/01/2020",
            description: "Salon des ambassadeurs où je découvre EPITA",
            type: "highschool"
          },
        ]
      }
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
