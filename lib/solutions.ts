export type Solution = {
    title: string;
    icon: string | null;
    image: string;
    description: string;
    infoUrl: string;
    siteUrl: string;
    extraLinks?: {
        label: string;
        url: string;
    }[];
};

export const solutions: Solution[] = [
    {
        title: "Resaneo",
        icon: null,
        image:"/images/resaneo-placeholder.jpg",
        description: `Resaneo est une plateforme B2B de réservation de vols dédiée aux professionnels du tourisme, qui se distingue par sa robustesse, sa rapidité et la richesse de ses fonctionnalités. Grâce à une interface fluide et réactive, les agents de voyage peuvent accéder en temps réel à un vaste catalogue de compagnies aériennes régulières, low-cost et charters, comparer instantanément les tarifs, les disponibilités.`
        , infoUrl: "#",
        siteUrl: "https://www.resaneo.com",
        extraLinks: [
            { label: "Site Grand Public", url: "https://www.resaneo.fr" },
            { label: "Espace recrutement", url: "https://www.resaneo.com/espace-recrutement" }
        ]
    },
    {
        title: "Quartier Libre",
        icon: null,
        image: "/images/quartier-libre-placeholder.jpg",
        description: `Quartier Libre est une marque de voyages culturels haut de gamme qui conçoit, développe et propose des circuits accompagnés en Europe et dans le monde, pensés pour les voyageurs curieux, exigeants et passionnés par le patrimoine, l’histoire et la culture. Chaque voyage est minutieusement élaboré par une équipe de passionnés, qui sélectionne des guides experts, des hébergements de charme et des itinéraires équilibrés, alliant découvertes incontournables et expériences hors des sentiers battus.`

        , infoUrl: "#",
        siteUrl: "https://www.quartier-libre.pro",
        extraLinks: [
            { label: "Site Grand Public", url: "https://www.quartier-libre.fr" },
            { label: "Espace recrutement", url: "https://www.quartier-libre.fr/espace-recrutement" }
        ]
    },
    {
        title: "SpeedMedia",
        icon: null,
        image: "/images/speedmedia-placeholder.jpg",
        description: `SpeedMedia est une solution technologique innovante pensée pour accompagner la digitalisation des agences de voyages et des tour-opérateurs. Grâce à un écosystème complet de services, elle permet de créer, gérer et diffuser des contenus touristiques sur des sites web dynamiques, performants et optimisés pour le référencement naturel. L’un de ses atouts majeurs est son moteur de recherche ultra-rapide, capable de traiter et d’afficher en quelques millisecondes des milliers d’offres, filtrables par date, budget, destination ou thématique.`

        , infoUrl: "#",
        siteUrl: "https://www.speedmedia.fr",
        extraLinks: [
            { label: "Espace recrutement", url: "https://www.speedmedia.fr/espace-recrutement" }
        ]
    },
    {
        title: "Bourse des Vols",
        icon: null,
        image: "/images/bdv-vols-placeholder.jpg",
        description: `La Bourse des Vols est un comparateur aérien puissant et reconnu, conçu pour aider les voyageurs à trouver les meilleurs prix sur des centaines de compagnies, tout en offrant une navigation intuitive et un parcours de réservation sécurisé. Grâce à son moteur de recherche intelligent, la plateforme agrège et trie en temps réel des milliers de tarifs issus de compagnies régulières, low-cost et partenaires GDS, permettant une vision claire et instantanée des options disponibles.`

        , infoUrl: "#",
        siteUrl: "https://www.bourse-des-vols.com"
    },
    {
        title: "Bourse de Voyages",
        icon: null,
        image: "/images/bdv-voyages-placeholder.jpg",
        description: `La Bourse de Voyages est une plateforme spécialisée dans les séjours organisés, les circuits à thème et les offres tout compris, destinée à un large public en quête de vacances faciles à réserver, sécurisées et qualitatives. En centralisant une vaste sélection de produits touristiques – du séjour balnéaire au circuit culturel, en passant par les escapades en famille ou les croisières – la plateforme facilite l’accès à une multitude d’options.`

        , infoUrl: "#",
        siteUrl: "https://www.bourse-des-voyages.com"
    },
    {
        title: "Promovols",
        icon: null,
        image: "/images/promovols-placeholder.jpg",
        description: `Promovols se positionne comme un acteur clé dans la réservation de billets d’avion à petits prix, en offrant une interface épurée, rapide et efficace, conçue pour aller droit au but. Grâce à son algorithme d’optimisation tarifaire, la plateforme détecte en temps réel les meilleures opportunités du marché, qu’il s’agisse de vols directs ou avec escale, sur des compagnies traditionnelles ou low-cost. L’utilisateur bénéficie d’une expérience fluide, avec un tunnel de réservation raccourci, des options claires et un service après-vente réactif.`

        , infoUrl: "#",
        siteUrl: "https://www.promovols.com"
    }
];
