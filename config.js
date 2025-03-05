window.appConfig = {
  // Options de rôle/expertise
// Rôles
roles: [
  { value: "", label: "Sélectionnez un rôle..." },
  { value: "Agis en tant qu'expert en géomatique, capable d'analyser et de résoudre des problématiques complexes en SIG.", label: "Expert en géomatique" },
  { value: "Agis en tant que spécialiste en base de données géospatiales, expert dans la gestion et l'optimisation des données spatiales.", label: "Spécialiste en base de données géospatiales" },
  { value: "Agis en tant qu'expert SIG, maîtrisant les outils et méthodes des systèmes d'information géographique.", label: "Expert SIG" },
  { value: "Agis en tant que spécialiste en analyse spatiale, capable d'extraire des insights pertinents à partir de données géographiques.", label: "Spécialiste en analyse spatiale" },
  { value: "Agis en tant qu'expert en modélisation géospatiale, concevant des modèles numériques précis pour représenter des phénomènes spatiaux.", label: "Expert en modélisation géospatiale" },
  { value: "Agis en tant que géomaticien programmeur, combinant compétences en développement et expertise en systèmes d'information géographique.", label: "Géomaticien programmeur" },
  { value: "Agis en tant que spécialiste ETL géospatial, expert dans l'extraction, la transformation et le chargement de données spatiales.", label: "Spécialiste ETL géospatial" },
  { value: "Agis en tant qu'expert en automatisation SIG, optimisant et rationalisant les processus liés aux systèmes d'information géographique.", label: "Expert en automatisation SIG" },
  { value: "Agis en tant que spécialiste PostGIS, maîtrisant l'optimisation et la gestion des bases de données spatiales sous PostGIS.", label: "Spécialiste PostGIS" },
  { value: "Agis en tant qu'expert en bases de données spatiales, spécialisé dans la structuration et l'interrogation de grandes volumétries de données géographiques.", label: "Expert en base de données spatiales" },
  { value: "Agis en tant que géomaticien SQL, expert dans l'écriture et l'optimisation de requêtes SQL adaptées à la géomatique.", label: "Géomaticien SQL" },
  { value: "Agis en tant qu'expert en cartographie thématique, capable de concevoir des cartes informatives et esthétiques.", label: "Expert en cartographie thématique" },
  { value: "Agis en tant que spécialiste en géovisualisation, expert dans la représentation graphique et interactive des données spatiales.", label: "Spécialiste en géovisualisation" },
  { value: "Agis en tant qu'expert SIG web, intégrant les technologies web pour créer des solutions SIG interactives.", label: "Expert SIG web" },
  { value: "Agis en tant que géostatisticien, spécialisé dans l'analyse statistique et spatiale pour extraire des tendances et des patterns.", label: "Géostatisticien" },
  { value: "Agis en tant qu'analyste géospatial, capable d'interpréter et d'exploiter des données spatiales complexes.", label: "Analyste géospatial" },
  { value: "Agis en tant qu'expert en prospective territoriale, anticipant les évolutions à partir d'analyses géospatiales approfondies.", label: "Expert en prospective territoriale" },
  { value: "Agis en tant que spécialiste en réseaux intelligents, optimisant et gérant des infrastructures connectées et intelligentes.", label: "Spécialiste en réseaux intelligents" },
  { value: "Agis en tant qu'expert en géomatique énergétique, spécialisé dans l'analyse et l'optimisation des systèmes énergétiques via des outils SIG.", label: "Expert en géomatique énergétique" },
  { value: "Agis en tant qu'expert en modélisation des smart grids, capable de concevoir et d'optimiser des réseaux électriques intelligents.", label: "Expert en modélisation des smart grids" },
  { value: "Agis en tant qu'expert en intégration BIM-SIG, spécialisé dans la fusion des données BIM et SIG pour des projets multidisciplinaires.", label: "Expert en intégration BIM-SIG" },
  { value: "Agis en tant que spécialiste en analyse spatiale des transports, optimisant les flux et infrastructures de mobilité.", label: "Spécialiste en analyse spatiale des transports" },
  { value: "Agis en tant que développeur Python spécialisé en géomatique, alliant compétences en programmation et expertise SIG.", label: "Développeur Python spécialisé en géomatique" },
  { value: "Agis en tant qu'expert FME, spécialisé dans l'automatisation et la transformation des flux de données géospatiales.", label: "Expert FME" },
  { value: "Agis en tant que spécialiste PowerBI pour l'analyse géospatiale, capable de créer des dashboards interactifs et informatifs.", label: "Spécialiste PowerBI pour l'analyse géospatiale" },
  { value: "Agis en tant que rôle personnalisé défini selon les exigences spécifiques.", label: "Personnalisé..." }
],
  
// Types de tâches
taskTypes: [
  { value: "", label: "Sélectionnez un type de tâche..." },
  { value: "Réaliser une analyse approfondie des données spatiales", label: "Analyse de données spatiales" },
  { value: "Optimiser le réseau géospatial pour une meilleure performance", label: "Optimisation de réseau" },
  { value: "Développer un script d'automatisation pour le traitement des données", label: "Script d'automatisation" },
  { value: "Construire une requête spatiale complexe pour extraire des insights précis", label: "Requête spatiale complexe" },
  { value: "Créer des visualisations interactives et des cartographies détaillées", label: "Visualisation et cartographie" },
  { value: "Effectuer une modélisation avancée et une analyse technique poussée", label: "Modélisation et analyse avancée" },
  { value: "Rédiger une documentation technique complète et structurée", label: "Documentation technique" },
  { value: "Assurer la vérification de la conformité des systèmes et des données", label: "Vérification de conformité" },
  { value: "Intégrer des solutions technologiques innovantes dans l'environnement géospatial", label: "Intégration technologique" },
  { value: "Élaborer une planification stratégique à long terme", label: "Planification stratégique" },
  { value: "Mettre en place une transition énergétique efficace et durable", label: "Transition énergétique" },
  { value: "Réaliser une analyse rigoureuse des risques associés", label: "Analyse de risque" },
  { value: "Implémenter une maintenance prédictive basée sur l'analyse des données", label: "Maintenance prédictive" },
  { value: "Analyser la qualité de service et optimiser les performances", label: "Analyse de qualité de service" },
  { value: "Assurer une intégration harmonieuse entre BIM et SIG", label: "Intégration BIM-SIG" },
  { value: "Optimiser les systèmes de mobilité électrique", label: "Mobilité électrique" },
  { value: "Produire du code de haute qualité pour des applications géospatiales", label: "Production de code" },
  { value: "Identifier et corriger les bugs dans le code existant", label: "Débogage de code" },
  { value: "Optimiser les performances et le traitement des données géospatiales", label: "Optimisation de performance" },
  { value: "Définir une tâche personnalisée selon les besoins spécifiques", label: "Personnalisé..." }
],
  
  // Catégories d'instructions méta
  metaCategories: [
    {
      id: "reflection",
      label: "Réflexion",
      options: [
        { id: "meta1", label: "Respirer profondément", value: "Respire profondément avant de répondre à cette question technique." },
        { id: "meta2", label: "Générer un plan structuré", value: "Génère d'abord un plan structuré de ta réponse avant de développer." },
        { id: "meta3", label: "Poser des questions clarificatrices", value: "Si ma demande manque de précision ou de contexte, pose-moi des questions clarificatrices avant de répondre." },
        { id: "meta4", label: "Réfléchir étape par étape", value: "Réfléchis étape par étape avant de formuler ta réponse finale." },
        { id: "meta5", label: "Identifier les hypothèses implicites", value: "Prends le temps d'identifier les hypothèses implicites dans ma question avant d'y répondre." }
      ]
    },
    {
      id: "rigor", 
      label: "Rigueur",
      options: [
        { id: "meta6", label: "Analyser les contraintes", value: "Analyse d'abord les contraintes du problème, puis propose une solution." },
        { id: "meta7", label: "Expliquer le raisonnement", value: "Explique ton raisonnement en détaillant chaque étape de ta réflexion." },
        { id: "meta8", label: "Comparer les approches", value: "Si plusieurs approches sont possibles, présente d'abord les avantages et inconvénients de chacune avant de recommander la meilleure." },
        { id: "meta9", label: "Vérifier la complétude", value: "Après avoir formulé ta réponse, vérifie si elle répond bien à tous les aspects de ma question." },
        { id: "meta10", label: "Proposer une validation", value: "Propose une méthode de validation pour que je puisse tester la solution recommandée." }
      ]
    },
    {
      id: "quality",
      label: "Qualité",
      options: [
        { id: "meta11", label: "Citer des références", value: "Cite les références techniques ou scientifiques qui appuient tes recommandations." },
        { id: "meta12", label: "Indiquer les limites", value: "Indique les limites potentielles de la solution que tu proposes et comment les mitiger." },
        { id: "meta13", label: "Préciser les prérequis", value: "Précise les prérequis techniques nécessaires pour implémenter ta solution." },
        { id: "meta14", label: "Quantifier les ressources", value: "Quantifie les ressources nécessaires (temps, compétences, logiciels) pour mettre en œuvre ta recommandation." },
        { id: "meta15", label: "Proposer des indicateurs", value: "Propose des indicateurs mesurables pour évaluer le succès de la solution proposée." }
      ]
    },
    {
      id: "context",
      label: "Contexte",
      options: [
        { id: "meta16", label: "Contexte réglementaire", value: "Prends en compte le contexte réglementaire spécifique au secteur de l'énergie en france dans ta réponse." },
        { id: "meta17", label: "Niveau technique adapté", value: "Adapte ta réponse au niveau technique d'une équipe de géomaticiens expérimentés." },
        { id: "meta18", label: "Compatibilité technique", value: "Assure-toi que ta solution est compatible avec notre environnement technique PostgreSQL/PostGIS, QGIS, ArcGIS, FME et Python." },
        { id: "meta19", label: "Contraintes métier", value: "Considère les contraintes d'un distributeur d'énergie public en france soumis à des obligations de service." },
        { id: "meta20", label: "Enjeux de cybersécurité", value: "Intègre dans ta réponse les enjeux de cybersécurité spécifiques aux infrastructures critiques." }
      ]
    }
  ],
  
  // Outils techniques
  tools: [
    { id: "tool1", label: "PostgreSQL/PostGIS", value: "PostgreSQL/PostGIS" },
    { id: "tool2", label: "QGIS", value: "QGIS" },
    { id: "tool3", label: "ArcGIS Pro", value: "EsRI ArcGIS Pro" },
    { id: "tool4", label: "ArcGIS Enterprise", value: "EsRI ArcGIS Enterprise" },
    { id: "tool5", label: "FME", value: "FME" },
    { id: "tool6", label: "FME Server", value: "FME Server" },
    { id: "tool7", label: "PowerBI", value: "PowerBI" },
    { id: "tool8", label: "Python", value: "Python" },
    { id: "tool9", label: "GDAL", value: "GDAL" },
    { id: "tool10", label: "GeoPandas", value: "GeoPandas" },
    { id: "tool11", label: "NetworkX", value: "NetworkX" },
    { id: "tool12", label: "Pandas", value: "Pandas" },
    { id: "tool13", label: "PgAdmin", value: "PgAdmin" },
    { id: "tool14", label: "DBeaver", value: "DBeaver" },
    { id: "tool15", label: "VS Code", value: "VS Code" },
    { id: "tool16", label: "Jupyter", value: "Jupyter" },
    { id: "tool17", label: "Anaconda", value: "Anaconda" }
  ],
  
  // Niveaux de détail
  detailLevels: [
    { value: "", label: "Sélectionnez un niveau de détail..." },
    { value: "Je souhaite une réponse extrêmement détaillée. Développe chaque aspect technique en profondeur.", label: "Très détaillé" },
    { value: "Je souhaite une réponse avec un niveau de détail intermédiaire, équilibrant profondeur technique et concision.", label: "Intermédiaire" },
    { value: "Je souhaite une vue d'ensemble concise. Limite ta réponse à 500 mots maximum.", label: "Concis" },
    { value: "Structure ta réponse en trois niveaux de lecture : un résumé exécutif, une analyse intermédiaire et des détails techniques approfondis.", label: "Multiniveau" }
  ],
  
  // Formats de réponse
  responseFormats: [
    { value: "", label: "Sélectionnez un format..." },
    { value: "Présente ta réponse sous forme d'un rapport technique formel avec sections numérotées.", label: "Rapport technique" },
    { value: "Structure ta réponse comme un guide méthodologique étape par étape que mon équipe pourra suivre.", label: "Guide méthodologique" },
    { value: "Organise ta réponse sous forme de questions-réponses, en anticipant les interrogations que pourrait avoir mon équipe.", label: "Questions-réponses" },
    { value: "Présente d'abord ta recommandation finale, puis développe ton raisonnement et tes justifications.", label: "Recommandation prioritaire" },
    { value: "Présente ta reponse dans le language de dev ou script demandé et ajoute les commentaires et gestion d'erruer pour faciliter la MCO.", label: "Code informatique" }
  ],
  
  // Audiences cibles
  audiences: [
    { value: "", label: "Sélectionnez une audience..." },
    { value: "Ta réponse sera présentée à notre direction technique, adapte le niveau de détail en conséquence.", label: "Direction technique" },
    { value: "Ta réponse servira à former des nouveaux techniciens SIG, assure-toi qu'elle soit pédagogique.", label: "Nouveaux techniciens" },
    { value: "Ta réponse sera utilisée pour justifier un investissement auprès de décideurs non techniques , ajoute des analogies et des exemples.", label: "Décideurs non techniques" },
    { value: "Ta réponse doit être compréhensible par mon équipe pluridisciplinaire (géomaticiens, ingénieurs réseau, urbanistes).", label: "Équipe pluridisciplinaire" },
    { value: "Ta réponse doit être compréhensible par un expert géomaticiens.", label: "Expert" },
    { value: "Ta réponse doit être compréhensible par un enfant , ajoute des analogies et des exemples.", label: "Enfant" },
    { value: "Ta réponse doit être fun , utilise des réference de la pop culture", label: "Fun" }
  ],
  
  // Techniques avancées
  advancedTechniques: [
    { id: "advanced1", label: "Pseudo-code avant implémentation", value: "Commence par développer un pseudo-code détaillé qui explique clairement l'algorithme, puis traduis-le en code réel." },
    { id: "advanced2", label: "Approches alternatives", value: "Propose trois approches méthodologiques différentes pour résoudre ce problème, puis recommande la plus adaptée avec justification." },
    { id: "advanced3", label: "Auto-critique méthodologique", value: "Inclus une section 'Critique méthodologique' où tu analyses les limites de l'approche proposée." },
    { id: "advanced4", label: "Prioriser robustesse vs performance", value: "Pour cette solution, la robustesse face aux données aberrantes et la gestion des erreurs sont plus importantes que les performances brutes." },
    { id: "advanced5", label: "Documentation exhaustive", value: "Accompagne ta solution d'une documentation exhaustive incluant des exemples d'utilisation, des cas de test et des scénarios d'erreur potentiels." }
  ],
  
  // Types de fichiers associés
  fileTypes: [
    { value: "", label: "Pas de fichier associé" },
    { value: "CSV", label: "Fichier CSV" },
    { value: "Shapefile", label: "Shapefile" },
    { value: "GeoJSON", label: "GeoJSON" },
    { value: "GeoTIFF", label: "GeoTIFF/Raster" },
    { value: "SQL", label: "Script SQL" },
    { value: "Python", label: "Script Python" },
    { value: "FMW", label: "Workflow FME" },
    { value: "Excel", label: "Fichier Excel" },
    { value: "GPKG", label: "GeoPackage" },
    { value: "DWG", label: "Fichier CAD/DWG" },
    { value: "XML", label: "XML/GML" },
    { value: "DB", label: "Base de données" },
    { value: "API", label: "API/Service Web" },
    { value: "custom", label: "Autre (préciser)" }
  ],
  
  // Modèles de prompt prédéfinis
  promptTemplates: [
    {
      name: "Analyse de données spatiales",
      description: "Modèle pour demander une analyse de données spatiales complexe",
      role: "expert en analyse spatiale",
      taskDescription: "J'ai besoin d'analyser la corrélation spatiale entre [données1] et [données2] pour identifier des patterns géographiques significatifs.",
      metaInstructions: ["meta2", "meta3", "meta7", "meta9"],
      tools: ["tool1", "tool8", "tool10"],
      detailLevel: "Je souhaite une réponse avec un niveau de détail intermédiaire, équilibrant profondeur technique et concision.",
      responseFormat: "Structure ta réponse comme un guide méthodologique étape par étape que mon équipe pourra suivre.",
      audience: "Ta réponse doit être compréhensible par mon équipe pluridisciplinaire (géomaticiens, ingénieurs réseau, urbanistes)."
    },
    {
      name: "Optimisation de requête SQL",
      description: "Modèle pour optimiser une requête SQL complexe",
      role: "spécialiste PostGIS",
      taskDescription: "J'ai besoin d'optimiser cette requête PostGIS [requête] qui s'exécute trop lentement sur ma base de données contenant plusieurs millions d'entités.",
      metaInstructions: ["meta6", "meta7", "meta12"],
      tools: ["tool1", "tool13", "tool14"],
      detailLevel: "Je souhaite une réponse extrêmement détaillée. Développe chaque aspect technique en profondeur.",
      responseFormat: "",
      audience: "Ta réponse sera présentée à notre direction technique, adapte le niveau de détail en conséquence."
    }
  ]
};
