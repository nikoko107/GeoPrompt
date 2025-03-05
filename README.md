# Générateur de Prompts pour Géomatique Énergétique

Un outil web permettant de construire des prompts optimisés pour les modèles de langage (LLM) dans le domaine de la géomatique et la cartographie pour le secteur de l'énergie.

![image](https://github.com/user-attachments/assets/44bf2787-eca9-4e77-bdb7-baf5479c89c3)



## 📋 Présentation

Ce générateur de prompts offre une interface intuitive pour concevoir des instructions précises et structurées destinées aux grands modèles de langage. Il est spécialement conçu pour les professionnels travaillant dans la géomatique, les SIG et la cartographie dans le secteur de l'énergie.

L'application permet de combiner différentes "briques" d'instructions pour obtenir des réponses plus pertinentes, plus structurées et mieux adaptées aux besoins techniques spécifiques du domaine.

## ✨ Fonctionnalités

- **Structure modulaire** : Interface, configuration et logique séparées pour faciliter la personnalisation
- **Structure de base** : Sélection de rôles/expertises et types de tâches spécifiques au domaine
- **Instructions méta** : Options organisées en catégories (réflexion, rigueur, qualité, contexte)
- **Outils techniques** : Spécification des technologies à utiliser (PostgreSQL/PostGIS, QGIS, ArcGIS, FME, etc.)
- **Fichiers associés** : Possibilité d'indiquer si la tâche concerne un type de fichier spécifique (Shapefile, CSV, etc.)
- **Exemples intégrés** : Ajout d'exemples pour guider les réponses du modèle
- **Modulation de réponse** : Contrôle du niveau de détail, format et audience cible
- **Techniques avancées** : Options pour pseudo-code, approches alternatives, validation, etc.
- **Copie facile** : Bouton pour copier le prompt généré vers le presse-papier

## 🚀 Installation et utilisation

### Installation simple

1. Téléchargez ou clonez ce dépôt
2. Placez les quatre fichiers (`index.html`, `config.js`, `app.js` , geoprompt-logo.png ) dans un même dossier
3. Ouvrez le fichier `index.html` dans votre navigateur

Aucune installation de serveur n'est nécessaire, l'application fonctionne entièrement côté client.

### Utilisation

1. **Sélection des options** : 
   - Choisissez un rôle/expertise et un type de tâche
   - Décrivez précisément la tâche à accomplir
   - Indiquez si vous travaillez avec un fichier particulier

2. **Personnalisation du prompt** :
   - Sélectionnez les instructions méta souhaitées dans les différents onglets
   - Cochez les outils techniques spécifiques à utiliser
   - Configurez le niveau de détail et le format de réponse souhaités
   - Ajoutez des exemples si nécessaire

3. **Génération et utilisation** :
   - Cliquez sur "Générer le prompt"
   - Copiez le prompt généré avec le bouton "Copier le prompt"
   - Collez le prompt dans votre interface préférée de modèle de langage

## ⚙️ Personnalisation et paramétrage

L'application est conçue pour être facilement personnalisable grâce à son architecture modulaire :

### Personnalisation de la configuration

Vous pouvez modifier le fichier `config.js` pour :

- Ajouter de nouveaux rôles/expertises spécifiques à votre domaine
- Créer de nouveaux types de tâches
- Modifier les instructions méta disponibles
- Ajouter des outils techniques propres à votre environnement
- Définir vos propres modèles de prompts

Exemple d'ajout d'un nouveau rôle :
```javascript
// Dans config.js, dans la section roles
{ value: "expert en hydrogéologie", label: "Expert en hydrogéologie" },
```

Exemple d'ajout d'un nouvel outil :
```javascript
// Dans config.js, dans la section tools
{ id: "tool18", label: "R Studio", value: "R Studio" },
```

### Développement avancé

Pour les développeurs souhaitant étendre les fonctionnalités :

- `index.html` contient la structure et le style de l'interface
- `app.js` contient la logique de l'application
- Vous pouvez ajouter de nouvelles sections, fonctionnalités ou intégrations en modifiant ces fichiers

## 🔧 Structure technique

- Interface utilisateur en HTML/CSS pur, sans dépendances
- Logique en JavaScript vanilla, sans frameworks
- Configuration via un objet JSON dans `config.js`
- Design responsive pour une utilisation sur différents appareils

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

- Signaler des bugs
- Proposer des améliorations
- Soumettre des pull requests
- Partager vos configurations personnalisées

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

Créé avec ❤️ pour la communauté des experts en géomatique .
