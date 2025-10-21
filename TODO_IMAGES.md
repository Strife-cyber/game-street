# 📋 TODO - Liste des Images à Ajouter

Ce fichier liste tous les emplacements où vous devez ajouter des images dans le code.

## 🖼️ Emplacements des TODOs dans index.astro

### 1. Hero Image (Ligne ~84-92)
```html
<!-- TODO: Ajouter une image de hero gaming ici -->
<!-- Recommandé: Image de gamers en action, résolution 1920x1080 -->
```
**Action:** Remplacer `.hero-image-placeholder` par `<img src="/images/hero.jpg" />`

---

### 2. Event Image 1 - Tournoi (Ligne ~106-110)
```html
<!-- TODO: Ajouter une image d'événement de tournoi -->
<!-- Recommandé: Image de tournoi esports, 800x600px -->
```
**Fichier:** `public/images/event-tournament.jpg`

---

### 3. Event Image 2 - LAN Party (Ligne ~128-132)
```html
<!-- TODO: Ajouter une image de LAN party -->
<!-- Recommandé: Image de gaming setup, 800x600px -->
```
**Fichier:** `public/images/event-lan.jpg`

---

### 4. Event Image 3 - Cosplay (Ligne ~150-154)
```html
<!-- TODO: Ajouter une image de cosplay gaming -->
<!-- Recommandé: Image de cosplay, 800x600px -->
```
**Fichier:** `public/images/event-cosplay.jpg`

---

### 5. Community Image 1 (Ligne ~228-231)
```html
<!-- TODO: Ajouter image de la communauté 1 -->
<!-- Recommandé: Photo de groupe de gamers, 600x400px -->
```
**Fichier:** `public/images/community-1.jpg`
**Description:** Rencontres hebdomadaires

---

### 6. Community Image 2 (Ligne ~240-243)
```html
<!-- TODO: Ajouter image de la communauté 2 -->
<!-- Recommandé: Setup gaming, 600x400px -->
```
**Fichier:** `public/images/community-2.jpg`
**Description:** Setups incroyables

---

### 7. Community Image 3 (Ligne ~252-255)
```html
<!-- TODO: Ajouter image de la communauté 3 -->
<!-- Recommandé: Événement gaming, 600x400px -->
```
**Fichier:** `public/images/community-3.jpg`
**Description:** Événements épiques

---

### 8. Community Image 4 (Ligne ~264-267)
```html
<!-- TODO: Ajouter image de la communauté 4 -->
<!-- Recommandé: Streamers/joueurs, 600x400px -->
```
**Fichier:** `public/images/community-4.jpg`
**Description:** Streamers partenaires

---

### 9. Gallery Images (Lignes ~293-318)
```html
<!-- TODO: Ajouter 6 images de galerie -->
<!-- Recommandé: Images de moments gaming épiques, 800x600px -->
```
**Fichiers:**
- `public/images/gallery-1.jpg`
- `public/images/gallery-2.jpg`
- `public/images/gallery-3.jpg`
- `public/images/gallery-4.jpg`
- `public/images/gallery-5.jpg`
- `public/images/gallery-6.jpg`

---

## 📊 Résumé Total

| Type | Quantité | Résolution | Taille Estimée |
|------|----------|------------|----------------|
| Hero | 1 | 1920x1080 | ~500-800KB |
| Événements | 3 | 800x600 | ~200-300KB chacune |
| Communauté | 4 | 600x400 | ~150-200KB chacune |
| Galerie | 6 | 800x600 | ~200-300KB chacune |
| **TOTAL** | **14 images** | - | **~4-6MB** |

## 🔄 Processus de Remplacement

### Pour chaque image placeholder:

**Avant:**
```html
<div class="event-image-placeholder">
  <span> Image Tournoi</span>
</div>
```

**Après:**
```html
<img src="/images/event-tournament.jpg" alt="Tournoi Esports Championship" />
```

## 🎨 Styles d'Images Recommandés

### Pour les Événements:
- ✅ Action shots (joueurs concentrés)
- ✅ Compétitions en cours
- ✅ Foules enthousiastes
- ✅ Lighting dramatique
- ❌ Images floues
- ❌ Mauvais éclairage

### Pour la Communauté:
- ✅ Photos de groupe souriantes
- ✅ Setups RGB colorés
- ✅ Moments de célébration
- ✅ Ambiance conviviale
- ❌ Photos posées artificielles
- ❌ Mauvaise qualité

### Pour la Galerie:
- ✅ Highlights d'événements
- ✅ Moments mémorables
- ✅ Gaming gear
- ✅ Atmosphère gaming
- ❌ Images stock génériques
- ❌ Hors contexte gaming

## 🛠️ Script de Remplacement Rapide

Créez ce script bash pour accélérer:

```bash
#!/bin/bash
# replace-placeholders.sh

# Créer le dossier images
mkdir -p public/images

# Liste des images à remplacer
echo "Images nécessaires:"
echo "1. hero.jpg (1920x1080)"
echo "2. event-tournament.jpg (800x600)"
echo "3. event-lan.jpg (800x600)"
echo "4. event-cosplay.jpg (800x600)"
echo "5. community-1.jpg (600x400)"
echo "6. community-2.jpg (600x400)"
echo "7. community-3.jpg (600x400)"
echo "8. community-4.jpg (600x400)"
echo "9-14. gallery-1.jpg à gallery-6.jpg (800x600)"
```

## 📥 Téléchargement d'Images Suggérées

### Unsplash (Haute Qualité, Gratuit)
```
https://unsplash.com/s/photos/esports-tournament
https://unsplash.com/s/photos/gaming-setup
https://unsplash.com/s/photos/lan-party
https://unsplash.com/s/photos/gaming-community
```

### Pexels (Gratuit, Commercial OK)
```
https://www.pexels.com/search/esports/
https://www.pexels.com/search/gaming%20pc/
https://www.pexels.com/search/gamer/
```

##  Optimisation des Images

### Avant d'ajouter les images:

1. **Compresser** avec [TinyPNG](https://tinypng.com)
2. **Convertir** en WebP avec [Squoosh](https://squoosh.app)
3. **Vérifier** la taille (< 500KB par image idéalement)
4. **Tester** le chargement

### Commande d'optimisation (optionnel):
```bash
# Installer sharp-cli
npm install -g sharp-cli

# Optimiser toutes les images
sharp -i "public/images/*.jpg" -o "public/images/optimized/" --webp
```

## ✅ Checklist Finale

Une fois toutes les images ajoutées:

- [ ] 1 image hero ajoutée
- [ ] 3 images événements ajoutées
- [ ] 4 images communauté ajoutées
- [ ] 6 images galerie ajoutées
- [ ] Toutes les images < 500KB
- [ ] Alt text ajouté sur chaque `<img>`
- [ ] Placeholders supprimés
- [ ] Test sur mobile/desktop
- [ ] Images optimisées (WebP)
- [ ] Backup du dossier images

##  Priorité des Images

Si vous n'avez pas le temps d'ajouter toutes les images immédiatement:

### Priorité 1 (Essentiel):
1. Hero image
2. 3 images événements

### Priorité 2 (Important):
3. 4 images communauté

### Priorité 3 (Nice to have):
4. 6 images galerie

## 💡 Alternative: Images Temporaires

En attendant vos vraies images, vous pouvez utiliser:
- [Placeholder.com](https://placeholder.com/)
- [Lorem Picsum](https://picsum.photos/)
- [Unsplash Source](https://source.unsplash.com/)

Exemple:
```html
<img src="https://source.unsplash.com/1920x1080/?gaming,esports" alt="Hero" />
```

---

**Besoin d'aide?** Consultez **[IMAGE_GUIDE.md](IMAGE_GUIDE.md)** pour plus de détails!

Bon courage! 

