/* =====================================================================
   DONNÉES DU PORTFOLIO — c'est le fichier à modifier le plus souvent.
   Les textes bilingues s'écrivent { fr: "...", en: "..." }.
   Un texte identique dans les deux langues peut s'écrire simplement "...".
   ===================================================================== */

const SITE = {
  name: "Mawel",
  email: "m4w3l.pro@gmail.com",
  github: "https://github.com/maelLEMAIR",
  linkedin: "https://www.linkedin.com/in/ma%C3%ABl-lemaire-08a863356/",
  available: true,                       // false = masque l'indicateur de disponibilité
  photo: "assets/img/photo.jpg",         // déposez votre photo à cet emplacement
  cv: { enabled: false, file: "assets/cv/CV.pdf" } // passez enabled à true quand le PDF est ajouté
};

const CATEGORIES = [
  { id: "all",      label: { fr: "Tous les projets", en: "All projects" } },
  { id: "engine",   label: { fr: "C++ / Moteur",     en: "C++ / Engine" } },
  { id: "network",  label: { fr: "Réseau",           en: "Networking" } },
  { id: "gameplay", label: { fr: "Gameplay",         en: "Gameplay" } },
  { id: "other",    label: { fr: "Autres projets",   en: "Other projects" } }
];

/* ---------------------------------------------------------------------
   PROJETS — pour en ajouter un : copiez un bloc { ... }, collez-le dans
   la liste, changez les champs. Rien d'autre à modifier.
   Champs : id (unique, sans espace), name, type, status, statusKind
   ("proto" ou "done"), categories, tech, short, long (liste de
   paragraphes), github, images [{src, alt}], video (fichier .mp4/.webm
   ou lien YouTube « embed »), videoSlot (affiche un emplacement vidéo),
   team, sections [{title, body, todo}], featured, art.
   --------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "moteur3d",
    featured: true,
    art: "archetypes",   // illustration schématique tant qu'il n'y a pas de capture
    name: { fr: "Moteur 3D réseau, ECS data-oriented", en: "Networked 3D engine, data-oriented ECS" },
    type: { fr: "Projet moteur réalisé dans le cadre d'un stage", en: "Engine project built during an internship" },
    status: { fr: "Prototype", en: "Prototype" }, statusKind: "proto",
    categories: ["engine", "network"],
    tech: ["C++", "ECS", "Data-oriented", "Archetypes", "UDP"],
    short: {
      fr: "Moteur 3D orienté données avec architecture ECS, Archetypes et communication réseau UDP. Réalisé en équipe pendant mon stage.",
      en: "Data-oriented 3D engine with an ECS architecture, Archetypes and UDP networking. Built as a team during my internship."
    },
    long: {
      fr: [
        "Développement d'un moteur 3D orienté données intégrant une architecture ECS et des mécanismes de communication réseau.",
        "Le projet utilise un système d'Archetypes pour organiser les entités en fonction de la composition de leurs composants.",
        "L'objectif est de développer une architecture moteur adaptée aux besoins techniques des jeux vidéo et de travailler sur des systèmes de bas niveau liés à la gestion des entités et au réseau."
      ],
      en: [
        "Development of a data-oriented 3D engine with an ECS architecture and networking mechanisms.",
        "The project uses an Archetype system to organize entities according to the composition of their components.",
        "The goal is to build an engine architecture suited to the technical needs of video games and to work on low-level systems for entity management and networking."
      ]
    },
    github: "https://github.com/maelLEMAIR/Moteur3D",
    images: [],          // ex. [{ src: "assets/img/moteur3d/capture-1.png", alt: { fr: "...", en: "..." } }]
    video: "",
    teamLabel: { fr: "Projet réalisé en équipe pendant un stage, avec", en: "Team project built during an internship, with" },
    team: [
      { name: "Léo PINGOT", role: { fr: "Maître de stage", en: "Internship supervisor" }, url: "https://www.linkedin.com/in/l%C3%A9o-pingot-7760402a9/" },
      { name: "Vivien Singier", url: "https://www.linkedin.com/in/vivien-singier-57764232b/" },
      { name: "Baptiste Combeau", url: "https://www.linkedin.com/in/baptiste-combeau/" }
    ],
    sections: [
      { title: { fr: "Contexte et objectifs", en: "Context and goals" },
        body: { fr: "Projet réalisé pendant un stage en développement moteur et réseau, en équipe. Il vise une architecture moteur adaptée aux jeux vidéo et un travail sur des systèmes de bas niveau (entités, réseau).",
                en: "Built during an engine and networking internship, as a team. It aims at an engine architecture suited to video games and work on low-level systems (entities, networking)." },
        todo: true },
      { title: { fr: "Architecture générale", en: "Overall architecture" }, todo: true },
      { title: { fr: "Fonctionnement du système ECS", en: "How the ECS works" },
        body: { fr: "Le moteur repose sur une architecture ECS orientée données.", en: "The engine is built on a data-oriented ECS architecture." }, todo: true },
      { title: { fr: "Organisation des entités et des composants par Archetypes", en: "Entities and components organized by Archetypes" },
        body: { fr: "Les entités sont organisées selon la composition de leurs composants, grâce à un système d'Archetypes.", en: "Entities are organized by the composition of their components, using an Archetype system." }, todo: true },
      { title: { fr: "Communication réseau UDP", en: "UDP networking" },
        body: { fr: "Le moteur intègre des mécanismes de communication réseau reposant sur UDP.", en: "The engine includes networking mechanisms built on UDP." }, todo: true },
      { title: { fr: "Problèmes techniques rencontrés et solutions apportées", en: "Technical problems and solutions" }, todo: true },
      { title: { fr: "Captures d'écran, schémas d'architecture et extraits de code", en: "Screenshots, architecture diagrams and code samples" }, todo: true },
      { title: { fr: "Bilan personnel et apprentissages", en: "Personal review and learnings" }, todo: true }
    ]
  },
  {
    id: "dossier-anomalie-double",
    name: "Dossier Anomalie Double",
    type: { fr: "Prototype de jeu en réseau", en: "Networked game prototype" },
    status: { fr: "Prototype", en: "Prototype" }, statusKind: "proto",
    categories: ["gameplay", "network"],
    tech: ["C++", "Blender", "Gameplay", { fr: "Développement d'outils", en: "Tool development" }],
    short: {
      fr: "Jeu multijoueur inspiré d'Exit 8 : deux joueurs comparent leurs observations pour repérer les anomalies.",
      en: "Multiplayer game inspired by Exit 8: two players compare what they see to spot anomalies."
    },
    long: {
      fr: [
        "Dossier Anomalie Double est un projet de jeu multijoueur inspiré du principe d'Exit 8. Les joueurs parcourent des salles et doivent repérer des anomalies.",
        "Le principe repose sur la comparaison de leurs observations : si un joueur remarque quelque chose d'étrange que l'autre ne perçoit pas, cela peut signaler une anomalie. Si les deux joueurs observent la même chose, elle n'est pas considérée comme une anomalie selon la règle du jeu.",
        "L'objectif est de retrouver les dimensions sans anomalie sans se perdre dans les autres espaces."
      ],
      en: [
        "Dossier Anomalie Double is a multiplayer game project inspired by Exit 8. Players walk through rooms and must spot anomalies.",
        "The idea relies on comparing what each player sees: if one player notices something odd that the other does not, it may signal an anomaly. If both players see the same thing, it is not an anomaly under the game's rule.",
        "The goal is to find the dimensions without anomalies without getting lost in the other spaces."
      ]
    },
    github: "https://github.com/maelLEMAIR/DossierAnomalieDouble",
    images: [{ src: "assets/img/dossierAnomalie/wallpaper.png"}],
    video: "assets/videos/dossierAnomalie/video.mp4",
    videoSlot: true,
    teamLabel: { fr: "Projet réalisé en collaboration avec", en: "Built in collaboration with" },
    team: [ { name: "Médérick LEPRINCE-GASSER" }, { name: "Romain BOONE" } ],
    sections: [
      { title: { fr: "Aspects techniques", en: "Technical aspects" },
        body: { fr: "Développé en C++, avec Blender pour les contenus 3D, autour du gameplay et du développement d'outils.",
                en: "Developed in C++, with Blender for 3D content, around gameplay and tool development." }, todo: true },
      { title: { fr: "Ma contribution", en: "My contribution" }, todo: true }
    ]
  },
  {
    id: "flappy-bird",
    name: "Flappy Bird",
    type: { fr: "Jeu vidéo", en: "Video game" },
    status: { fr: "Terminé", en: "Completed" }, statusKind: "done",
    categories: ["other"],
    tech: ["C#", "Unity"],
    short: {
      fr: "Reproduction simple de Flappy Bird, réalisée pour découvrir Unity et les bases de la création de jeux vidéo.",
      en: "Simple Flappy Bird remake, built to discover Unity and the basics of game creation."
    },
    long: {
      fr: ["Reproduction simple du jeu Flappy Bird, développée pour découvrir Unity et les bases de la création de jeux vidéo avec ce moteur. C'est un projet d'apprentissage."],
      en: ["Simple remake of Flappy Bird, developed to discover Unity and the basics of making video games with this engine. It is a learning project."]
    },
    github: "https://github.com/maelLEMAIR/FlappyBird",
    images: [{ src: "assets/img/flappybird/wallpaper.png"}],
    video: ""
  }
];

/* COMPÉTENCES — ajoutez/supprimez simplement des lignes dans "items". */
const SKILLS = [
  { title: { fr: "Programmation", en: "Programming" }, items: ["C++", "Git / GitHub"] },
  { title: { fr: "Architecture moteur", en: "Engine architecture" },
    items: [{ fr: "Architecture moteur", en: "Engine architecture" }, "ECS / Archetypes", { fr: "Structures et organisation des données", en: "Data structures and organization" }] },
  { title: { fr: "Graphismes et mathématiques", en: "Graphics and maths" },
    items: [{ fr: "Rendu graphique", en: "Graphics rendering" }, "Shaders", { fr: "Mathématiques 3D", en: "3D maths" }] },
  { title: { fr: "Systèmes et simulation", en: "Systems and simulation" },
    items: [{ fr: "Réseau multijoueur", en: "Multiplayer networking" }, { fr: "Réseau UDP", en: "UDP networking" }, { fr: "Physique", en: "Physics" }, { fr: "Optimisation", en: "Optimization" }] },
  { title: { fr: "Outils", en: "Tools" }, items: ["Visual Studio 2022", "JetBrains Rider", "Blender"] }
];
const INTERESTS = ["DirectX", "OpenGL", "Vulkan"];

/* PARCOURS — les champs « à compléter » sont à remplacer par vos vraies infos. */
const JOURNEY = [
  { period: { fr: "2027 (en cours)", en: "2027 (in progress)" },
    title: { fr: "Bachelor Informatique - Option Jeux Vidéos", en: "Bachelor’s Degree in Computer Science – Video Game Specialization" },
    place: { fr: "Gaming Campus", en: "Gaming Campus" },
    text: { fr: "Étudiant en développement option jeux vidéo.", en: "Student in development, specializing in video games." },
    todo: ["period", "place"] },
  { period: { fr: "Été 2026", en: "Summer 2026" },
    title: { fr: "Stage en développement moteur et réseau", en: "Engine and networking internship" },
    place: { fr: "Léo PINGOT", en: "Léo PINGOT" },
    text: { fr: "Développement en équipe d'un moteur 3D orienté données (ECS, Archetypes, réseau UDP).", en: "Team development of a data-oriented 3D engine (ECS, Archetypes, UDP networking)." },
    todo: ["period", "place"] },
  { period: { fr: "Année 2026", en: "Year 2026" },
    title: { fr: "Projets personnels et académiques", en: "Personal and academic projects" },
    place: "",
    text: { fr: "Dossier Anomalie Double, Flappy Bird.", en: "Dossier Anomalie Double, Flappy Bird." },
    todo: ["period"] }
];

/* TEXTES DU SITE */
const I18N = {
  fr: {
    title: "Mawel – Développeur C++, moteur de jeu et rendu",
    desc: "Portfolio de Mawel, étudiant en développement informatique option jeux vidéo : C++, moteur 3D, architecture ECS et réseau UDP.",
    skip: "Aller au contenu", railRole: "Moteur de jeu & Rendu", details: "Voir la fiche", navLabel: "Navigation principale", langLabel: "Langue", menu: "Menu",
    nHome: "Accueil", nProjects: "Projets", nSkills: "Compétences", nJourney: "Parcours", nContact: "Contact",
    availText: "Disponible pour un stage ou une alternance",
    heroTitle: "Je développe les systèmes qui font tourner les jeux.",
    heroRole: "Développeur C++ — Moteur de jeu & Rendu",
    heroIntro: "Étudiant en développement informatique option jeux vidéo, je m'intéresse à ce qui se passe sous la surface d'un jeu : l'architecture du moteur, l'organisation des données et le réseau. Curieux et investi, j'aime apprendre en construisant.",
    ctaProjects: "Découvrir mes projets", ctaContact: "Me contacter",
    photoSlot: "Photo à ajouter", photoAlt: "Portrait de Mawel",
    aboutTitle: "À propos",
    aboutP1: "Je suis quelqu'un de souriant et passionné. Je m'investis à fond dans mes projets et je reste curieux face à n'importe quelle tâche.",
    aboutP2: "Le C++ et la programmation moteur sont ce qui m'attire le plus. J'aime comprendre comment un jeu fonctionne de l'intérieur, résoudre des problèmes techniques en équipe et progresser à chaque projet.",
    f1l: "Localisation", f1v: "France",
    f2l: "Formation", f2v: "Étudiant en développement informatique option jeux vidéo",
    f3l: "Expérience", f3v: "Stage en développement moteur et réseau",
    f4l: "C++", f4v: "Niveau intermédiaire",
    f5l: "Objectif", f5v: "Stage ou alternance en développement de jeux vidéo : moteur, architecture logicielle, systèmes techniques",
    projectsTitle: "Projets",
    projectsIntro: "Du moteur 3D en réseau au prototype multijoueur, chaque projet renvoie vers son dépôt GitHub.",
    filtersLabel: "Filtrer les projets", featured: "Projet principal",
    teamFallback: "Équipe", techLabel: "Technologies", repo: "Voir le dépôt GitHub", close: "Fermer",
    noProjects: "Aucun projet dans cette catégorie.",
    shot: "Capture d'écran à ajouter", videoSlot: "Vidéo de gameplay à ajouter", imgMissing: "Image introuvable",
    artAlt: "Illustration schématique : des entités regroupées par archetype selon leurs composants",
    todo: "Partie en travaux.",
    skillsTitle: "Compétences", skillsIntro: "Regroupées par domaine.",
    interestsTitle: "Domaines d'intérêt à approfondir", interestsNote: "Des technologies qui m'intéressent et que je souhaite approfondir.",
    journeyTitle: "Parcours",
    contactTitle: "Un stage ou une alternance en développement moteur ?",
    contactText: "Si votre studio recrute, ou si vous voulez échanger sur le développement moteur, écrivez-moi.",
    mail: "Envoyer un email", copy: "Copier mon email", cv: "Télécharger mon CV",
    copied: "Adresse copiée dans le presse-papiers.", copyFail: "Copie impossible. Adresse :",
    mailSubject: "Stage / alternance – prise de contact",
    footerNav: "Pied de page", footerRole: "Développeur C++ — Moteur de jeu & Rendu", rights: "Tous droits réservés."
  },
  en: {
    title: "Mawel – C++ Developer, Game Engine & Rendering",
    desc: "Portfolio of Mawel, student in software development, specializing in video games: C++, 3D engine, ECS architecture and UDP networking.",
    skip: "Skip to content", railRole: "Game engine & Rendering", details: "View details", navLabel: "Main navigation", langLabel: "Language", menu: "Menu",
    nHome: "Home", nProjects: "Projects", nSkills: "Skills", nJourney: "Journey", nContact: "Contact",
    availText: "Available for an internship or apprenticeship",
    heroTitle: "I build the systems that make games run.",
    heroRole: "C++ Developer — Game Engine & Rendering",
    heroIntro: "I'm a student in software development, specializing in video games interested in what happens under the surface of a game: engine architecture, data layout and networking. Curious and committed, I like to learn by building.",
    ctaProjects: "See my projects", ctaContact: "Get in touch",
    photoSlot: "Photo to add", photoAlt: "Portrait of Mawel",
    aboutTitle: "About",
    aboutP1: "I'm a smiling, passionate person. I put everything into my projects and stay curious about whatever task comes up.",
    aboutP2: "C++ and engine programming are what attract me most. I like understanding how a game works from the inside, solving technical problems as a team and growing with every project.",
    f1l: "Location", f1v: "France",
    f2l: "Studies", f2v: "Student in software development, specializing in video games",
    f3l: "Experience", f3v: "Engine and networking internship",
    f4l: "C++", f4v: "Intermediate level",
    f5l: "Goal", f5v: "Internship or apprenticeship in video game development: engine, software architecture, technical systems",
    projectsTitle: "Projects",
    projectsIntro: "From a networked 3D engine to a multiplayer prototype, each project links to its GitHub repository.",
    filtersLabel: "Filter projects", featured: "Main project",
    teamFallback: "Team", techLabel: "Technologies", repo: "View the GitHub repository", close: "Close",
    noProjects: "No project in this category.",
    shot: "Screenshot to add", videoSlot: "Gameplay video to add", imgMissing: "Image not found",
    artAlt: "Schematic illustration: entities grouped by archetype according to their components",
    todo: "Work in progress.",
    skillsTitle: "Skills", skillsIntro: "Grouped by area.",
    interestsTitle: "Areas of interest to deepen", interestsNote: "Technologies I'm interested in and want to learn more about.",
    journeyTitle: "Journey",
    contactTitle: "An internship or apprenticeship in engine development?",
    contactText: "If your studio is hiring, or if you'd like to talk about engine development, write to me.",
    mail: "Send an email", copy: "Copy my email", cv: "Download my résumé",
    copied: "Address copied to the clipboard.", copyFail: "Copy failed. Address:",
    mailSubject: "Internship / apprenticeship – getting in touch",
    footerNav: "Footer", footerRole: "C++ Developer — Game Engine & Rendering", rights: "All rights reserved."
  }
};
