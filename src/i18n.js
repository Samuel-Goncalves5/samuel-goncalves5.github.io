import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      navbar: {
        presentation: "Presentation",
        experiences: "Experiences",
        publications: "Publications",
        projects: "Projects",
        contact: "Contact",
      },
      presentation: {
        title: "Samuel Gonçalves",
        subtitle: "Research Student at Sorbonne University and EPITA (Computer engineering school)",
        description:
          "Maths and computer science enthusiast, young researcher. Great interest in politics, philosophy and History.",
        summary_title: "Summary",
        summary_text:
          "Passionate about mathematics, computer science and research. Double-degree student-researcher at EPITA (double major in Image Processing and Research) and Sorbonne University (Image Processing). DMHSS (Digital Methods for Humanities and Social Sciences) team in the EPITA research laboratory.",
        skills: {
          title: "Key Skills",
          fields: {
            name: "Fields",
            list: [
              ["Computer vision", ""],
              ["Neural networks", ""],
              ["CNN", ""],
              ["Pattern recognition", ""],
              ["Data processing", ""],
            ]
          },
          computer_lang: {
            name: "Computer languages",
            list: [
              ["Python", "(Pytorch, Scikit-Learn)"],
              ["Shell-Bash", "(GNU/Linux)"],
              ["C++", ""],
              ["C", ""],
              ["Java", ""],
              ["Lisp", ""],
              ["OcamL", ""],
              ["C#", ""],
            ]
          },
          lang: {
            name: "Languages",
            list: [
              ["French", "- Mother tongue"],
              ["English", "- TOEIC 920"],
              ["Spanish", "- Notions"],
            ]
          },
        },
        also: {
          name: "And also...",
          hobbies: {
            name: "Hobbies",
            list: [
              ["Aikido", ""],
              ["Role-playing", "- associations ANTRE and Dés'n'Dés"]
            ]
          },
          interests: {
            name: "Other interests",
            list: [
              ["History", ""],
              ["Politics", ""],
              ["Music", "(classical and metal)"],
              ["Video games", ""]
            ]
          },
        },
        contact_title: "Contact",
        email: "Email (EPITA)",
        email2: "Email (Sorbonne)",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      experiences: {
        professional_name: "Professional experience",
        professional: [
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
      contact: {
        title: "Contact Me",
        email: "Email",
        message: "Message",
        send: "Send",
      },
    },
  },
  fr: {
    translation: {
      navbar: {
        presentation: "Présentation",
        experiences: "Expériences",
        publications: "Publications",
        projects: "Projets",
        contact: "Contact",
      },
      presentation: {
        title: "Samuel Gonçalves",
        subtitle: "Étudiant-Chercheur à Sorbonne Université et EPITA",
        description:
          "Passionné de mathématiques, d'informatique, chercheur en herbe. Grand intérêt pour la politique, la philosophie et l'Histoire.",
        summary_title: "Résumé",
        summary_text:
          "Passionné de mathématiques, d'informatique et de recherche. Étudiant-chercheur en double-diplôme à EPITA (double majeure Traitement d'image et Recherche) et Sorbonne Université (Traitement d'Image). Equipe MNSHS (Méthodes Numériques pour les Sciences Humaines et Sociales) dans le laboratoire de recherche de l'EPITA.",
        skills: {
          title: "Compétences principales",
          fields: {
            name: "Domaines",
            list: [
              ["Vision par ordinateur", ""],
              ["Réseaux de neurones", ""],
              ["CNN", ""],
              ["Reconnaissance de formes", ""],
              ["Traitement de données", ""],
            ]
          },
          computer_lang: {
            name: "Langages informatiques",
            list: [
              ["Python", "(Pytorch, Scikit-Learn)"],
              ["Shell-Bash", "(GNU/Linux)"],
              ["C++", ""],
              ["C", ""],
              ["Java", ""],
              ["Lisp", ""],
              ["OcamL", ""],
              ["C#", ""],
            ]
          },
          lang: {
            name: "Langues",
            list: [
              ["Français", "- Langue maternelle"],
              ["Anglais", "- TOEIC 920"],
              ["Espagnol", "- Notions"],
            ]
          },
        },
        also: {
          name: "Et aussi...",
          hobbies: {
            name: "Activités",
            list: [
              ["Aikido", ""],
              ["Jeu de rôle", "- associations ANTRE et Dés'n'Dés"]
            ]
          },
          interests: {
            name: "Autres intérêts",
            list: [
              ["Histoire", ""],
              ["Politique", ""],
              ["Musique", "(classique et métal)"],
              ["Jeu-vidéo", ""]
            ]
          },
        },
        contact_title: "Contact",
        email: "Email (EPITA)",
        email2: "Email (Sorbonne)",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      experiences: {
        professional_name: "Expérience professionnelle",
        professional: [
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
      contact: {
        title: "Contactez-moi",
        email: "Email",
        message: "Message",
        send: "Envoyer",
      },
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
