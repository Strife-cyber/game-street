#  Game Street - Guide des Images et Informations

Bienvenue dans le projet Game Street ! Ce guide vous aidera à ajouter vos propres images et informations personnalisées.

##  Images à Ajouter

### 1. Hero Section (Section Principale)
**Emplacement dans le code:** Ligne ~86-92
- **Type:** Image de hero principale
- **Résolution recommandée:** 1920x1080px
- **Description:** Image de gamers en action, setup gaming professionnel, ou événement esports
- **Format:** JPG, PNG, WebP
- **Comment l'ajouter:** Placez l'image dans `/public/images/hero.jpg` et remplacez la div `.hero-image-placeholder`

```html
<!-- Remplacer ceci: -->
<div class="hero-image-placeholder">
  <!-- ... -->
</div>

<!-- Par ceci: -->
<img src="/images/hero.jpg" alt="Game Street Hero" class="hero-image" />
```

### 2. Événements (3 images)
**Emplacement dans le code:** Lignes ~104-167

#### Événement 1 - Tournoi Esports
- **Résolution:** 800x600px
- **Description:** Image de tournoi esports, compétition, joueurs concentrés
- **Chemin suggéré:** `/public/images/event-tournament.jpg`

#### Événement 2 - LAN Party
- **Résolution:** 800x600px
- **Description:** Setup gaming, LAN party, plusieurs ordinateurs
- **Chemin suggéré:** `/public/images/event-lan.jpg`

#### Événement 3 - Cosplay Convention
- **Résolution:** 800x600px
- **Description:** Cosplays de jeux vidéo, convention gaming
- **Chemin suggéré:** `/public/images/event-cosplay.jpg`

### 3. Section Communauté (4 images)
**Emplacement dans le code:** Lignes ~226-275

#### Image Communauté 1 - Rencontres
- **Résolution:** 600x400px
- **Description:** Photo de groupe de gamers, rencontre communautaire
- **Chemin suggéré:** `/public/images/community-1.jpg`

#### Image Communauté 2 - Setups
- **Résolution:** 600x400px
- **Description:** Battle stations, setups gaming impressionnants
- **Chemin suggéré:** `/public/images/community-2.jpg`

#### Image Communauté 3 - Événements
- **Résolution:** 600x400px
- **Description:** Moments d'événements gaming
- **Chemin suggéré:** `/public/images/community-3.jpg`

#### Image Communauté 4 - Streamers
- **Résolution:** 600x400px
- **Description:** Streamers, créateurs de contenu
- **Chemin suggéré:** `/public/images/community-4.jpg`

### 4. Galerie (6 images)
**Emplacement dans le code:** Lignes ~284-318
- **Résolution:** 800x600px chacune
- **Description:** Moments épiques, highlights, événements passés
- **Chemins suggérés:** `/public/images/gallery-1.jpg` à `/public/images/gallery-6.jpg`

## 🎨 Comment Ajouter les Images

### Étape 1: Créer le dossier images
```bash
mkdir public/images
```

### Étape 2: Ajouter vos images
Placez toutes vos images dans le dossier `public/images/`

### Étape 3: Modifier le code
Remplacez les divs `.event-image-placeholder`, `.community-image-placeholder`, et `.gallery-placeholder` par des balises `<img>` :

```html
<!-- Au lieu de: -->
<div class="event-image-placeholder">
  <span> Image Tournoi</span>
</div>

<!-- Utilisez: -->
<img src="/images/event-tournament.jpg" alt="Tournoi Esports" />
```

## ✏️ Informations à Personnaliser

### 1. Titre et Description (Ligne 3-4)
```javascript
const title = "Game Street - Gaming Event & Community";
const description = "Votre description personnalisée";
```

### 2. Statistiques Hero (Lignes 68-81)
Modifiez les chiffres selon vos données:
- Nombre de gamers
- Nombre d'événements
- Support disponible

### 3. Événements (Section Events)
- **Dates:** Lignes 113, 135, 157
- **Titres:** Lignes 114, 136, 158
- **Descriptions:** Lignes 115, 137, 159
- **Tags:** Lignes 116-119, 138-141, 160-163

### 4. Contact Footer (Lignes 396-402)
```html
<li>📧 votre-email@example.com</li>
<li>📱 +33 X XX XX XX XX</li>
<li>📍 Votre Ville, Pays</li>
```

### 5. Liens Sociaux (Lignes 365-368)
Remplacez les `#` par vos vrais liens:
```html
<a href="https://discord.gg/votre-serveur" class="social-icon" title="Discord">💬</a>
<a href="https://twitter.com/votre-compte" class="social-icon" title="Twitter">🐦</a>
<a href="https://twitch.tv/votre-chaine" class="social-icon" title="Twitch">📺</a>
<a href="https://youtube.com/@votre-chaine" class="social-icon" title="YouTube">▶️</a>
```

## 🚀 Fonctionnalités Incluses

### Animations 3D
- ✅ Grille animée en arrière-plan avec perspective 3D
- ✅ Particules flottantes avec effet de profondeur
- ✅ Titre 3D avec rotation subtile
- ✅ Cartes d'événements avec rotation au hover
- ✅ Cartes de fonctionnalités flottantes
- ✅ Cartes communauté avec pulse 3D
- ✅ Boutons avec effet de glow et transformation 3D

### Effets Visuels
- ✅ Dégradés néon (cyan/magenta)
- ✅ Ombres avec effet neon glow
- ✅ Animations de flottement
- ✅ Transitions fluides
- ✅ Effet parallaxe sur les sections
- ✅ Scroll animations

### Responsive Design
- ✅ Mobile-friendly
- ✅ Tablette optimisée
- ✅ Desktop haute résolution

### Fonctionnalités JavaScript
- ✅ Bouton scroll to top
- ✅ Navigation smooth scroll
- ✅ Animations au scroll (intersection observer)
- ✅ Navigation sticky

## 🎨 Palette de Couleurs

- **Primary (Cyan):** `#00f0ff`
- **Secondary (Magenta):** `#ff00ff`
- **Accent (Jaune):** `#ffff00`
- **Dark Background:** `#0a0a0f`
- **Dark Card:** `#1a1a2e`
- **Text Gray:** `#8892b0`

## 📚 Polices Utilisées

- **Orbitron:** Titres et éléments gaming
- **Exo 2:** Corps de texte

## 🛠️ Commandes de Développement

```bash
# Démarrer le serveur de développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## 💡 Conseils pour les Images

### Sources d'images gratuites:
- [Unsplash](https://unsplash.com) - Recherchez "gaming", "esports", "gamer"
- [Pexels](https://pexels.com) - Photos gaming de haute qualité
- [Pixabay](https://pixabay.com) - Images libres de droits

### Optimisation:
- Utilisez WebP pour de meilleures performances
- Compressez vos images avec [TinyPNG](https://tinypng.com)
- Maintenez les résolutions recommandées pour éviter les problèmes de chargement

##  Prochaines Étapes

1. ✅ Ajouter toutes vos images
2. ✅ Personnaliser les textes et informations
3. ✅ Ajouter vos vrais liens sociaux
4. ✅ Tester sur mobile et desktop
5. ✅ Déployer (Vercel, Netlify, ou autre)

## 📱 Déploiement Suggéré

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploader le dossier 'dist' sur Netlify
```

---

**Besoin d'aide?** N'hésitez pas à consulter la [documentation Astro](https://docs.astro.build)

Bon gaming! 🚀

