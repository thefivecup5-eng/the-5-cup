# 🏆 The 5 Cup - Guide d'administration

Bienvenue dans le guide d'administration du site **The 5 Cup** ! Ce document vous explique comment mettre à jour le contenu du site, même sans connaissances techniques.

---

## 📋 Table des matières

1. [Installation et démarrage](#-installation-et-démarrage)
2. [Modifier les textes du site](#-modifier-les-textes-du-site)
3. [Changer les images](#-changer-les-images)
4. [Mettre à jour les informations pratiques](#-mettre-à-jour-les-informations-pratiques)
5. [Modifier les équipes et les poules](#-modifier-les-équipes-et-les-poules)
6. [Publier les modifications](#-publier-les-modifications)
7. [Aide et dépannage](#-aide-et-dépannage)

---

## 🚀 Installation et démarrage

### Première fois seulement

1. **Installer Node.js** (si pas déjà installé)
   - Téléchargez sur : https://nodejs.org/
   - Prenez la version "LTS" (recommandée)
   - Suivez l'installation par défaut

2. **Ouvrir le projet**
   - Ouvrez le dossier `the-5-cup` dans votre explorateur de fichiers
   - Faites **clic droit** dans le dossier → **Ouvrir dans le terminal** (ou PowerShell/Command Prompt)

3. **Installer les dépendances** (première fois uniquement)
   ```bash
   npm install
   ```
   ⏱️ Cela prend 1-2 minutes. Attendez que ça termine.

### Démarrer le site en mode développement

Pour voir vos modifications en temps réel :

```bash
npm run dev
```

✅ Le site s'ouvre automatiquement dans votre navigateur à l'adresse : `http://localhost:4321`

**💡 Conseil** : Laissez cette fenêtre ouverte pendant que vous modifiez les fichiers. Le site se mettra à jour automatiquement !

---

## ✏️ Modifier les textes du site

### 1. Page d'accueil

**Fichier à modifier** : `src/pages/index.astro`

Ce fichier contient uniquement l'assemblage des composants. Pour modifier le contenu, allez dans les composants ci-dessous.

### 2. Section Hero (bannière principale)

**Fichier** : `src/components/HeroSection.astro`

**Ce que vous pouvez modifier** :

```astro
<!-- TITRE PRINCIPAL -->
<h1>The 5 Cup</h1>

<!-- SOUS-TITRE -->
<p>Une compétition universitaire de football exceptionnelle</p>

<!-- DESCRIPTION -->
<p>Rejoignez-nous le 25 avril 2026 pour une journée...</p>

<!-- BOUTONS -->
<a href="https://helloasso.com/...">S'inscrire maintenant - 12€</a>
<a href="/competition">En savoir plus</a>
```

**Comment faire** :
1. Ouvrez le fichier dans un éditeur de texte (Notepad++, VSCode, Sublime Text...)
2. Modifiez le texte entre les balises `<h1>`, `<p>`, `<a>`
3. **NE TOUCHEZ PAS** aux balises elles-mêmes (les `<` et `>`)
4. Sauvegardez (Ctrl+S)
5. Le site se met à jour automatiquement !

### 3. Compte à rebours

**Fichier** : `src/components/CountdownTimer.astro`

**Changer la date cible** :

```javascript
const targetDate = new Date('2026-04-25T09:00:00');
```

Remplacez par votre nouvelle date au format `ANNÉE-MOIS-JOUR` :
- Exemple : `'2026-06-15T14:00:00'` pour le 15 juin 2026 à 14h

### 4. Section Poules

**Fichier** : `src/components/PoulesSection.astro`

**Modifier les informations des poules** :

```javascript
const poules = [
  {
    name: "Poule Terre",           // Nom de la poule
    element: "Terre",               // Élément
    traits: "Force • Résilience • Détermination",  // Traits
    teams: 5,                       // Nombre d'équipes
    players: 30                     // Nombre de joueurs
  },
  // ... autres poules
]
```

**Modifier les statistiques** :

```javascript
const totalTeams = 15;    // Nombre total d'équipes
const totalPlayers = 90;  // Nombre total de joueurs
const totalPoules = 3;    // Nombre de poules
```

### 5. En-tête (Header)

**Fichier** : `src/components/Header.astro`

**Modifier les liens de navigation** :

```astro
<a href="/">Accueil</a>
<a href="/competition">Compétition</a>
<a href="#reseaux">Réseaux sociaux</a>
```

**Modifier le lien du bouton billetterie** :

```astro
<a href="https://helloasso.com/votre-lien">
  Billets
</a>
```

### 6. Pied de page (Footer)

**Fichier** : `src/components/Footer.astro`

**Modifier les informations de contact** :

```javascript
const contactInfo = {
  email: 'contact@the5cup.fr',      // Email de contact
  phone: '+33 1 23 45 67 89',       // Téléphone
  address: '123 Rue...'             // Adresse
}
```

**Modifier les réseaux sociaux** :

```javascript
const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/the5cup', icon: Instagram },
  { name: 'Twitter', url: 'https://twitter.com/the5cup', icon: Twitter },
  // ... ajoutez ou supprimez des liens
]
```

---

## 🖼️ Changer les images

### Où placer vos nouvelles images

Toutes les images doivent être placées dans le dossier : **`public/assets/`**

### 1. Changer le logo

**Étapes** :
1. Préparez votre nouveau logo (format PNG recommandé, fond transparent)
2. **Important** : Optimisez votre logo ! Un logo ne devrait PAS faire plus de 50 Ko
   - Utilisez un outil comme [TinyPNG](https://tinypng.com/) pour réduire la taille
3. Placez-le dans `public/assets/logos-sans-fond/`
4. Nommez-le `Lgo-T5C-blanc.png` (ou changez le nom dans le code)

**Modifier le nom dans le code** :

**Fichier** : `src/components/Header.astro`

```astro
<img
  src="/assets/logos-sans-fond/VOTRE-NOUVEAU-LOGO.png"
  alt="Logo The 5 Cup"
/>
```

### 2. Changer l'image de fond (Hero)

**Étapes** :
1. Préparez votre image (résolution recommandée : 1920x1080 pixels)
2. **Important** : Compressez votre image (max 200 Ko idéalement)
3. Placez-la dans `public/assets/`
4. Modifiez le fichier `src/components/HeroSection.astro` :

```astro
<img
  src="/assets/VOTRE-NOUVELLE-IMAGE.jpg"
  alt="Image de fond"
/>
```

### 3. Optimiser les images automatiquement

Pour de meilleures performances, le site peut automatiquement optimiser vos images.

**Formats recommandés** :
- ✅ **WebP** : Meilleur format pour le web (petite taille, bonne qualité)
- ✅ **AVIF** : Encore plus optimisé que WebP
- ⚠️ **JPG/PNG** : OK mais plus lourds

**Outils gratuits pour convertir vos images** :
- [Squoosh](https://squoosh.app/) (en ligne, gratuit)
- [TinyPNG](https://tinypng.com/) (compression PNG/JPG)
- [Convertio](https://convertio.co/) (conversion WebP)

---

## 📅 Mettre à jour les informations pratiques

### Page Compétition

**Fichier** : `src/pages/competition.astro`

### 1. Modifier la date et le lieu

```astro
<div>
  <Calendar />
  <p>25 avril 2026</p>  <!-- Changez la date ici -->
</div>

<div>
  <MapPin />
  <p>UrbanSoccer - Toulouse Sept Deniers</p>  <!-- Changez le lieu ici -->
  <p>2 Rue de l'Égalité, 31200 Toulouse</p>  <!-- Changez l'adresse ici -->
</div>
```

### 2. Modifier les équipes

**Trouver la section équipes** (vers la ligne 80) :

```javascript
const teamsByPoule = {
  terre: [
    { name: "Guerriers Verts", icon: Users },
    { name: "Aigles de la Forêt", icon: Zap },
    // ... ajoutez, supprimez ou modifiez les équipes
  ],
  air: [
    // ... équipes de la poule Air
  ],
  eau: [
    // ... équipes de la poule Eau
  ]
}
```

**Pour ajouter une équipe** :
```javascript
{ name: "Nom de la nouvelle équipe", icon: Users },
```

**Pour supprimer une équipe** : Supprimez toute la ligne `{ name: "...", icon: ... },`

### 3. Modifier le calendrier des matchs

```javascript
const matches = [
  {
    date: '15 décembre 2025',    // Date du match
    time: '14h00',               // Heure du match
    team1: 'Guerriers Verts',    // Équipe 1
    team2: 'Lions des Montagnes', // Équipe 2
    type: 'terre'                // Type de poule (terre/air/eau)
  },
  // ... autres matchs
]
```

**Pour ajouter un match** : Copiez-collez un bloc existant et modifiez les valeurs

**Pour supprimer un match** : Supprimez tout le bloc entre `{` et `},`

### 4. Modifier les règles

```javascript
const rules = [
  {
    title: "Composition des équipes",  // Titre de la règle
    rules: [
      "6 joueurs par équipe sur le terrain",  // Règle 1
      "Maximum de 10 joueurs par équipe",     // Règle 2
      // ... ajoutez ou modifiez les règles
    ]
  },
  // ... autres catégories de règles
]
```

---

## 🚀 Publier les modifications

### Tester vos modifications localement

Avant de publier, vérifiez que tout fonctionne :

```bash
npm run build
npm run preview
```

Le site s'ouvre à `http://localhost:4322` (ou un autre port).

**⚠️ Important** : Ce mode "preview" montre le site tel qu'il sera en production. C'est ici que vous devez tester les performances !

---

## 🆘 Aide et dépannage

### Problèmes courants

#### "npm n'est pas reconnu"
**Solution** : Installez Node.js (voir section Installation)

#### Le site ne se met pas à jour
**Solution** :
1. Arrêtez le serveur (Ctrl+C dans le terminal)
2. Relancez `npm run dev`

#### J'ai cassé quelque chose !
**Solution** :
1. Annulez vos modifications avec Git :
   ```bash
   git checkout .
   ```
2. Ou restaurez une sauvegarde précédente

#### Les images ne s'affichent pas
**Solutions** :
- Vérifiez que l'image est bien dans `public/assets/`
- Vérifiez le chemin : `/assets/nom-image.jpg` (commencez toujours par `/`)
- Vérifiez l'extension : `.jpg`, `.png`, `.webp` (minuscules)

#### Le site est lent
**Solutions** :
- Testez en mode production (`npm run preview`)
- Optimisez vos images (voir section Images)
- Le logo de 575 Ko doit être réduit à ~50 Ko max

---