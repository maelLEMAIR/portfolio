/* =====================================================================
   DONNÉES DU PORTFOLIO — c'est le fichier à modifier le plus souvent.
   Les textes bilingues s'écrivent { fr: "...", en: "..." }.
   Un texte identique dans les deux langues peut s'écrire simplement "...".
   ===================================================================== */

const MODES = {
  light: "light-pink",
  dark: "pink",
  default: "auto"
};

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
  { id: "rendu",    label: { fr: "Rendu",            en: "Render" } },
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
    status: { fr: "Prototype", en: "Prototype" }, statusKind: "done",
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
        body: { fr: 
              "Un moteur 3D from scratch en C++ avec un renderer D3D12, un ECS à archétypes et une couche réseau client/serveur." + 
              "Le serveur est autoritaire et headless (sans fenêtre ni rendu). Le client est un exécutable avec rendu.",
                en: 
              "A 3D engine built from scratch in C++ with a D3D12 renderer, an archetype-based ECS, and a client/server network layer." +
              "The server is authoritative and headless (with no window or rendering). The client is an executable with rendering capabilities" }, todo: false},
      { title: { fr: "Architecture générale", en: "Overall architecture" },
        body: { fr:
              "Core : utilitaires de base." +
              "Engine : ECS et boucle moteur." +
              "Render : D3D12." +
              "Network : transport UDP et sérialisation." +
              "NetworkBridge : réplication ECS ↔ réseau." +
              "Sample : tests et démos.",
          en:
              "Core: Basic utilities." +
              "Engine: ECS and engine loop." +
              "Render: D3D12." +
              "Network: UDP transport and serialization." +
              "NetworkBridge: ECS ↔ network replication." +
              "Sample: Tests and demos." },
        images: [
            { src: "assets/img/MoteurECS/archi.png",
              alt: { fr: "Architecture générale", en: "Overall architecture" },
              caption: { fr: "Architecture générale", en: "Overall architecture" } }
          ] , todo: false},
      { title: { fr: "Fonctionnement du système ECS", en: "How the ECS works" },
        body: { fr: 
              "EntityId sur 64 bits : index + version. Un ancien handle est détecté comme invalide, même si l'index est recyclé." +
              "World sert de façade et expose AddComponent, Query, les systèmes et les observers." +
              "Les systèmes ont des priorités et un tri stable." +
              "Les Script, façon MonoBehaviour, existent à côté des systèmes." +
              "Les composants doivent être trivially_copyable (vérifié par static_assert).",
                en: 
              "64-bit EntityId: index + version. An old handle is detected as invalid, even if the index is reused." +
              "World acts as a facade and exposes AddComponent, Query, systems, and observers." +
              "Systems have priorities and are sorted in a stable order." +
              "Scripts, similar to MonoBehaviour, exist alongside systems." +
              "Components must be trivially_copyable (verified by static_assert)." }},
      { title: { fr: "Organisation des entités et des composants par Archetypes", en: "Entities and components organized by Archetypes" },
        body: { fr:
              "Chaque archétype est une signature (bitset) avec une Column par composant. C'est du Structure of Arrays, donc compatible avec le cache." +
              "Le graphe d'archétypes (arêtes add/remove) évite de recalculer une signature à chaque ajout ou retrait de composant." +
              "MoveEntity copie les colonnes communes, et SwapRemove supprime en O(1).",
          en:
              "Each archetype is a signature (bitset) with one column per component. This is a Structure of Arrays, so it's cache-friendly." +
              "The archetype graph (add/remove edges) avoids having to recalculate a signature every time a component is added or removed." +
              "MoveEntity copies the shared columns, and SwapRemove deletes them in O(1)." }},
      { title: { fr: "Communication réseau UDP", en: "UDP networking" },
        body: { fr:
              "Un thread réseau dédié communique avec le thread logique via des files thread-safe." +
              "La sérialisation binaire est faite maison, en big-endian." +
              "Le protocole a 9 types de paquets : Connect, Snapshot, ComponentUpdate, Input, Ping, etc."+
              "Les dirty flags donnent une réplication delta à 20 Hz, découplée de la simulation à 60 Hz."+
              "Le client fait de l'interpolation d'entités avec Slerp, et le délai est adapté au ping mesuré.",
          en:
              "A dedicated network thread communicates with the logical thread via thread-safe queues." +
              "Binary serialization is custom-built, in big-endian format." +
              "The protocol has 9 packet types: Connect, Snapshot, ComponentUpdate, Input, Ping, etc." +
              "Dirty flags enable delta replication at 20 Hz, decoupled from the 60 Hz simulation." +
              "The client performs entity interpolation using Slerp, and the delay is adjusted based on the measured ping." }},
      { title: { fr: "Problèmes techniques rencontrés et solutions apportées", en: "Technical problems and solutions" },
        body: { fr:
              "Détruire ou ajouter des entités pendant une Query : la solution est un snapshot des EntityId avec revalidation à chaque callback." +
              "Handles périmés : versioning des entités." +
              "Déplacements d'entités après un swap-remove : mise à jour de l'EntityRecord."+
              "UDP non fiable : snapshot complet à la connexion, deltas périodiques et interpolation."+
              "Saccades côté client : buffer de snapshots datés et affichage volontairement en retard."+
              "Serveur léger : aucun système de rendu n'est enregistré côté serveur.",
          en:
              "Deleting or adding entities during a query: the solution is a snapshot of the EntityIDs with revalidation at each callback." +
              "Expired handles: entity versioning." +
              "Entity movements after a swap-remove: updating the EntityRecord." +
              "Unreliable UDP: full snapshot on connection, periodic deltas, and interpolation." +
              "Client-side stuttering: buffer of dated snapshots and intentionally delayed display." +
              "Lightweight server: no rendering system is stored on the server side." }},
      { title: { fr: "Bilan personnel et apprentissages", en: "Personal review and learnings"},
        body: { fr:
              "Première fois en solo sur la création d'un moteur type ECS en réseau." +
              "J'ai adoré concevoir ce moteur et à comprendre plus en détail le fonctionnement data-oriented." +
              "Ce projet m'a donnée envie de créer ma propre librairy graphique pour faire mon moteure de A à Z.",
          en:
              "My first time working solo on the development of a networked ECS-style engine." +
              "I loved designing this engine and gaining a deeper understanding of how data-oriented systems work." +
              "This project inspired me to create my own graphics library so I could build my engine from scratch." }},
    ],
    gallery: [
      { src: "assets/img/MoteurECS/network.png", alt: { fr: "Fenêtre affichant 2 joueurs", en: "Window displaying 2 players" } },
      { src: "assets/img/MoteurECS/xwing.png", alt: { fr: "Fenêtre affichant un obj importer", en: "Window displaying an imported object" } }
    ]
  },
  {
    id: "CPURender",
    name: "CPURender",
    type: { fr: "Moteur de rendu côté CPU", en: "CPU-based rendering engine" },
    status: { fr: "Acédémique", en: "Prototype" }, statusKind: "done",
    categories: ["engine", "rendu"],
    tech: ["C++", "Rendu", "SDL", "OpenGL", { fr: "Développement d'outils", en: "Tool development" }],
    short: {
      fr: "Moteur de rendu côté CPU. Faire ce que la carte graphique fait mais avec seulement le CPU",
      en: "CPU-based rendering engine. Does what a graphics card does, but using only the CPU."
    },
    long: {
      fr: [
        "CPURender est un projet académique fait sur 3 semaine en équipe de trois. Nous devions recréer les actions faites par la carte graphique mais avec seulement le CPU.",
        "Pour l'affichage window nous avions le droit d'utiliser SDL une lib donnant accès de bas niveau au matériel graphique via OpenGL.",
        "L'objectif est de retrouver les dimensions sans anomalie sans se perdre dans les autres espaces."
      ],
      en: [
        "Dossier Anomalie Double is a multiplayer game project inspired by Exit 8. Players walk through rooms and must spot anomalies.",
        "The idea relies on comparing what each player sees: if one player notices something odd that the other does not, it may signal an anomaly. If both players see the same thing, it is not an anomaly under the game's rule.",
        "The goal is to find the dimensions without anomalies without getting lost in the other spaces."
      ]
    },
    github: "https://github.com/maelLEMAIR/CPURender/releases/tag/v1.0",
    images: [{ src: "assets/img/CPURender/cpu-render.png"}, { src: "assets/img/CPURender/cpu-render.png"}],
    video: "assets/videos/CPURender/cpu-render.mp4",
    videoSlot: true,
    teamLabel: { fr: "Projet réalisé en collaboration avec", en: "Built in collaboration with" },
    team: [ 
        { name: "Hugo PONTHIEU", url: "https://www.linkedin.com/in/hugo-ponthieu-1b286b339/" }, 
        { name: "Baptiste COMBEAU", url: "https://www.linkedin.com/in/baptiste-combeau/" } ],
    sections: [
      { title: { fr: "Aspects techniques", en: "Technical aspects" },
        body: { fr: "Développé en C++, avec OpenGL pour les maths, SDL pour la window et du développement d'outils.",
                en: "Developed in C++, using OpenGL for the math, SDL for the window, and tool development." }, todo: false },
      { title: { fr: "Ma contribution", en: "My contribution" },
        body: { fr: 
            "Mise en place des textures. L'utilisateur peut utiliser la normal map, l'ARM texture (Ambient Occlusion, Roughness, Metalness) et la displacement Map." +
            "Création de la shadow Map. Affichage des ombres avec une light. On affiche seulement les objets vu par la light.\n" + 
            "Possibilité d'importer une animation et de la jouer dans le moteur. Utilisation de la lib Assimp pour l'import de fbx et de dae.\n" +
            "Ajout de la transparence. Un objet peut être transparent, il affichera l'objet derrière lui et si il a de la refraction, il déformera la scène vu par l'objet.",
                en:
            "Setting up textures. The user can use the normal map, the ARM texture (Ambient Occlusion, Roughness, Metalness), and the displacement map.\n" +
            "Creating the shadow map. Rendering shadows with a light. Only objects visible to the light are rendered.\n" +
            "Ability to import an animation and play it in the engine. Use of the Assimp library to import FBX and DAE files.\n" +
            "Adding transparency. An object can be transparent; it will display the object behind it, and if it has refraction, it will distort the scene as seen through the object." ,todo: false }}
    ],
    gallery: [
      { src: "assets/img/CPURender/cpu-render.png", alt: { fr: "Rendu avec shadow map", en: "Rendering with a shadow map" } },
      { src: "assets/img/CPURender/refraction.png", alt: { fr: "Objet transparent avec réfraction", en: "Transparent object with refraction" } },
      { src: "assets/img/CPURender/shadow.png", alt: { fr: "Objet texturé avec réfraction", en: "Textured object with refraction" } }
    ]
  },
  {
    id: "NeighBarHood",
    name: "NeighBarHood",
    type: { fr: "Jeu de gestion sur Unity", en: "Management game on Unity" },
    status: { fr: "Projet personnel", en: "Personal project" },
    categories: ["Gameplay"],
    tech: ["Unity", "C#", "URP", "NavMesh", "ScriptableObjects", "Input System"],
    short: {
      fr: "Jeu de simulation et de gestion à la première personne : le joueur tient un petit bar, prend les commandes de clients autonomes et les sert. Projet solo, conçu avec un GDD complet, actuellement en pause.",
      en: "First-person simulation and management game: the player runs a small bar, takes orders from autonomous customers and serves them. Solo project designed with a full GDD, currently on hold."
    },
    long: {
      fr: [
        "NeighBarHood est un jeu de simulation et de gestion développé sous Unity (C#) en vue à la première personne. Le joueur incarne le propriétaire d'un petit bar qu'il fait grandir pour en faire le meilleur de la ville.",
        "J'ai rédigé un GDD complet (vision, boucle de jeu, boissons, clientèle, satisfaction, stock, progression, économie, direction artistique, audio, monétisation, roadmap) et développé un prototype de la boucle de service : clients autonomes, prise de commande, inventaire et service.",
        "Le projet est en pause : je me concentre sur mes études et sur un autre projet, une bibliothèque de rendu DirectX."
      ],
      en: [
        "NeighBarHood is a simulation and management game built in Unity (C#) in first person. The player owns a small bar and grows it into the best one in town.",
        "I wrote a full GDD (vision, game loop, drinks, customers, satisfaction, stock, progression, economy, art direction, audio, monetization, roadmap) and built a prototype of the service loop: autonomous customers, order taking, inventory and serving.",
        "The project is on hold: I am focusing on my studies and on another project, a DirectX rendering library."
      ]
    },
    github: "https://github.com/maelLEMAIR/NeighBarHood",
    images: [],
    video: "",
    videoSlot: false,
    sections: [
      { title: { fr: "Contexte et objectifs", en: "Context and goals" },
        body: { 
          fr: "Projet personnel pensé comme un vrai produit : cible 16-30 ans et joueurs casual, sortie envisagée sur Steam.\n" + 
              "Inspirations : Fast Food Simulator, Bronzebeard's Tavern, Supermarket Simulator, Overcooked (gestion du stress) et Cooking Fever.\n " +
              "L'objectif était de construire une boucle de gameplay complète et de travailler l'IA de PNJ et l'architecture de gameplay.",
          en: "Personal project designed as a real product: aimed at 16-30 year olds and casual players, with a possible Steam release. \n " + "" +
              "Inspirations: Fast Food Simulator, Bronzebeard's Tavern, Supermarket Simulator, Overcooked (stress management) and Cooking Fever.\n " + "" +
              "The goal was to build a complete gameplay loop and to work on NPC AI and gameplay architecture." } },
      { title: { fr: "Game design : boucle de jeu et systèmes", en: "Game design: game loop and systems" },
        body: { 
          fr: "Boucle prévue : \n" +
              "1. ouvrir le bar \n" +
              "2. accueillir les clients \n" +
              "3. prendre la commande \n" +
              "4. servir, encaisser \n" +
              "5. évaluation du service \n" +
              "6. puis achats (équipements, boissons, déco, publicité) \n" +
              "7. nouvelle journée, avec le nettoyage des tables en parallèle. \n" +
              "Le GDD détaille aussi 5 profils de clients (étudiant, habitué, cadre, touriste, VIP), une jauge de satisfaction (rapidité, boisson correcte, décoration, attente, propreté), la gestion du stock, la progression par niveaux, une économie à deux monnaies et la personnalisation du bar.",
          en: "Planned loop: \n" +
              "1. open the bar \n" +
              "2. welcome customers \n" +
              "3. take orders \n" +
              "4. serve, cash in \n" +
              "5. service rating \n" +
              "6. then purchases (equipment, drinks, decor, advertising) \n" +
              "7. a new day, with table cleaning running in parallel. \n" +
              "The GDD also details 5 customer profiles (student, regular, executive, tourist, VIP), a satisfaction gauge (speed, correct drink, decor, waiting time, cleanliness), stock management, level-based progression, a two-currency economy and bar customization." } },
      { title: { fr: "Ce qui est développé (prototype)", en: "What is built (prototype)" },
        body: { 
          fr: "Le prototype couvre la boucle de service : les clients se promènent, cherchent une chaise, s'assoient, choisissent leur commande, le joueur la prend, puis sert via un inventaire en roue ; le client part ensuite par la sortie. \n" +
              "S'y ajoutent un calepin de tickets, un plateau et un système d'interaction par raycast avec outline.",
          en: "The prototype covers the service loop: customers wander, look for a chair, sit down and pick their order; the player takes it, then serves through a radial inventory, and the customer leaves through the exit. \n" +
              "It also includes an order notebook, a tray and a raycast interaction system with outlines." } },
      { title: { fr: "Intelligence artificielle des clients", en: "Customer AI" },
        body: { 
          fr: "Chaque client suit une machine à états (balade, marche vers une chaise, assis, attend qu'on prenne sa commande, attend sa commande, évaluation, départ). La navigation repose sur le NavMesh, avec une zone interdite à la balade et un NavMeshObstacle activé une fois assis.\n" +
              " Un gestionnaire de chaises réserve la place avant le déplacement pour éviter que deux clients visent la même.",
          en: "Each customer follows a state machine (wandering, walking to a chair, sitting, waiting for the order to be taken, waiting for the order, evaluation, leaving). Navigation relies on the NavMesh, with a no-wander zone and a NavMeshObstacle enabled once seated. \n" +
              "A chair manager reserves the seat before the customer moves so two customers never target the same one." } },
      { title: { fr: "Architecture et outils", en: "Architecture and tooling" },
        body: { 
          fr: "Les données (items, recettes, commandes) sont des ScriptableObjects, ce qui permet d'ajouter une boisson sans toucher au code. \n" +
              "Les objets interactifs partagent une interface commune (IInteractable). \n" +
              "L'inventaire est piloté par événements (OnSlotChanged) et l'interface est découplée de la logique. Entrées gérées avec l'Input System. Outline : asset QuickOutline.",
          en: "Data (items, recipes, orders) are ScriptableObjects, so a new drink can be added without touching code. \n" +
              "Interactive objects share a common interface (IInteractable). \n" +
              "The inventory is event-driven (OnSlotChanged) and the UI is decoupled from the logic. Input handled with the Input System. Outline: QuickOutline asset." } },
      { title: { fr: "Problèmes techniques rencontrés et solutions apportées", en: "Technical problems and solutions" },
        body: { 
          fr: "Deux clients visant la même chaise : réservation immédiate. Client assis qui bloque la navigation : obstacle en carving activé à l'assise.\n" +
              "Retrait de plusieurs slots d'inventaire : suppression par indices décroissants pour éviter le décalage. \n" +
              "Aucune chaise libre : nouvel essai toutes les 3 secondes pendant que le client continue de se promener.",
          en: "Two customers targeting the same chair: immediate reservation. A seated customer blocking navigation: carving obstacle enabled when seated. \n" +
              "Removing several inventory slots: deletion by descending index to avoid shifting.\n" +
              "No free chair: retry every 3 seconds while the customer keeps wandering." } },
      { title: { fr: "Captures d'écran et vidéo", en: "Screenshots and video" }, todo: true },
      { title: { fr: "Bilan personnel et suite du projet", en: "Personal review and next steps" },
        body: { 
          fr: "J'ai appris à structurer un gameplay complet, de la conception (GDD) à la réalisation, et à construire une IA de PNJ avec NavMesh et machines à états.\n" +
              "Il reste à faire, selon ma roadmap : satisfaction, argent, tutoriel, audio, stock, publicité, personnalisation.\n" +
              "Le projet est en pause, car je suis en cours et sur un projet de bibliothèque de rendu DirectX.",
          en: "I learned to structure a complete gameplay from design (GDD) to implementation, and to build NPC AI with NavMesh and state machines.\n" +
              "Remaining work, per my roadmap: satisfaction, money, tutorial, audio, stock, advertising, customization.\n" +
              "The project is on hold because I am in school and working on a DirectX rendering library." } }
    ]
  },
  {
    id: "dossier-anomalie-double",
    name: "Dossier Anomalie Double",
    type: { fr: "Prototype de jeu en réseau", en: "Networked game prototype" },
    status: { fr: "Prototype", en: "Prototype" }, statusKind: "done",
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
    items: [{ fr: "Rendu graphique", en: "Graphics rendering" }, "Shaders", "Dx123D", { fr: "Mathématiques 3D", en: "3D maths" }] },
  { title: { fr: "Systèmes et simulation", en: "Systems and simulation" },
    items: [{ fr: "Réseau multijoueur", en: "Multiplayer networking" }, { fr: "Réseau UDP", en: "UDP networking" }, { fr: "Physique", en: "Physics" }, { fr: "Optimisation", en: "Optimization" }] },
  { title: { fr: "Outils", en: "Tools" }, items: ["Visual Studio 2022", "JetBrains Rider", "Blender"] }
];
const INTERESTS = ["DirectX", "OpenGL", "Vulkan", "Parser"];

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
  { period: { fr: "Été 2025", en: "Summer 2025" },
    title: { fr: "Stage en développement moteur", en: "Engine internship" },
    place: "Gaming Campus",
    text: { fr: "Réalisation d'un moteur dans une équipe de 30.", en: "Developing an engine as part of a team of 30." },
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
    footerNav: "Pied de page", footerRole: "Développeur C++ — Moteur de jeu & Rendu", rights: "Tous droits réservés.",
    themeLabel: "Thème", modeLight: "Thème clair", modeDark: "Thème sombre",
    galleryTitle: "Galerie", enlarge: "Agrandir l'image", prev: "Image précédente", next: "Image suivante"
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
    footerNav: "Footer", footerRole: "C++ Developer — Game Engine & Rendering", rights: "All rights reserved.",
    themeLabel: "Theme", modeLight: "Light theme", modeDark: "Dark theme",
    galleryTitle: "Gallery", enlarge: "Enlarge image", prev: "Previous image", next: "Next image"
  }
};
