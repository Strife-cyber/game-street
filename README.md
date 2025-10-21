#  Game Street - Gaming Event & Community Dashboard

Un site web moderne et épique pour la communauté gaming **Game Street**, avec des animations 3D spectaculaires et un design futuriste néon.

![Astro](https://img.shields.io/badge/Astro-5.14-ff5d01?style=for-the-badge&logo=astro)
![Built with](https://img.shields.io/badge/Built%20with-3D%20Animations-00f0ff?style=for-the-badge)
![Gaming](https://img.shields.io/badge/Gaming-Community-ff00ff?style=for-the-badge)

## ✨ Fonctionnalités

- 🎨 **Design Futuriste** - Thème néon gaming avec gradients cyan/magenta
- 🌟 **Animations 3D** - Effets de profondeur, rotations, et transformations
- 📱 **Responsive** - Optimisé mobile, tablette et desktop
-  **Performance** - Construit avec Astro pour une vitesse maximale
-  **Sections Complètes**:
  - Hero section avec grille animée 3D
  - Événements à venir avec cartes 3D
  - Fonctionnalités avec animations de flottement
  - Galerie communauté avec effets hover
  - Newsletter avec gradients animés
  - Footer complet avec liens sociaux

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:4321 dans votre navigateur
```

##  Ajouter vos Images

Consultez le fichier **[IMAGE_GUIDE.md](IMAGE_GUIDE.md)** pour un guide complet sur:
- Les images à ajouter (résolutions, formats, emplacements)
- Comment remplacer les placeholders
- Personnaliser les textes et informations
- Conseils d'optimisation

**Résumé rapide:**
1. Créez le dossier `/public/images/`
2. Ajoutez vos images (hero, événements, communauté, galerie)
3. Remplacez les placeholders dans `index.astro`
4. Personnalisez les textes et informations

## 🎨 Palette de Couleurs

```css
--primary: #00f0ff     /* Cyan néon */
--secondary: #ff00ff   /* Magenta */
--accent: #ffff00      /* Jaune */
--dark: #0a0a0f        /* Background */
```

## 🛠️ Structure du Projet

```text
/
├── public/
│   ├── favicon.svg
│   └── images/          # À créer - Vos images ici
├── src/
│   └── pages/
│       └── index.astro  # Page principale
├── IMAGE_GUIDE.md       # Guide détaillé des images
├── package.json
└── README.md
```

## 🧞 Commandes

| Commande              | Action                                         |
| :-------------------- | :--------------------------------------------- |
| `npm install`         | Installe les dépendances                       |
| `npm run dev`         | Lance le serveur local à `localhost:4321`      |
| `npm run build`       | Build de production vers `./dist/`             |
| `npm run preview`     | Prévisualise le build en local                 |

## 📦 Technologies

- **[Astro](https://astro.build)** - Framework web ultra-rapide
- **CSS3** - Animations et transformations 3D natives
- **JavaScript** - Interactions et scroll animations
- **Google Fonts** - Orbitron & Exo 2

##  Personnalisation

### Changer les statistiques:
Éditez les lignes 68-81 dans `src/pages/index.astro`

### Modifier les événements:
Éditez la section "Événements" lignes 95-169

### Ajouter votre logo:
Remplacez l'emoji  ligne 25 par votre logo

### Changer les couleurs:
Modifiez les variables CSS lignes 352-384

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploader le dossier 'dist/' sur Netlify
```

### Autres plateformes
Consultez la [documentation Astro](https://docs.astro.build/en/guides/deploy/)

## 📱 Responsive Breakpoints

- **Mobile:** < 480px
- **Tablet:** < 768px
- **Desktop:** > 768px

##  Animations Incluses

- Grille 3D animée avec perspective
- Particules flottantes
- Titre avec rotation 3D subtile
- Cartes avec effet de profondeur au hover
- Icônes avec animation de spin et bounce
- Scroll animations avec Intersection Observer
- Bouton scroll-to-top animé
- Smooth scroll sur toute la page

## 📄 License

Ce projet est open source et disponible pour usage personnel et commercial.

## 💬 Support

Besoin d'aide? Consultez:
- [Documentation Astro](https://docs.astro.build)
- [Guide des Images](IMAGE_GUIDE.md)

---

**Créé avec ❤️ pour la communauté Game Street**

Bon gaming! 🚀
