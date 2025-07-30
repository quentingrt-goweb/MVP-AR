# Vue AR Model Viewer

Un projet MVP Vue 2 pour afficher des modèles 3D avec support de réalité augmentée sur mobile.

## 🚀 Fonctionnalités

- **Visualisation 3D** : Affichage de modèles GLB avec contrôles de caméra
- **Réalité Augmentée** : Support AR pour Android (Scene Viewer) et iOS (Quick Look)
- **Interface Responsive** : Optimisé pour desktop et mobile
- **Contrôles Interactifs** : Rotation automatique, révélation progressive, réinitialisation caméra
- **Design Moderne** : Interface utilisateur élégante avec animations

## 📋 Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn
- Un modèle 3D au format GLB
- ngrok (pour tester sur mobile)

## 🛠️ Installation

1. **Cloner ou télécharger le projet**
   ```bash
   # Si vous avez cloné le projet
   cd vue-ar-model-viewer
   
   # Ou si vous avez téléchargé les fichiers
   # Placez-vous dans le dossier du projet
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Ajouter un modèle 3D**
   - Remplacez le fichier `public/models/sample.glb` par votre modèle GLB
   - Ou modifiez le chemin dans `src/components/ModelViewer.vue` (ligne 89)

4. **Lancer le serveur de développement**
   ```bash
   npm run serve
   ```

5. **Accéder à l'application**
   - Ouvrez votre navigateur sur `http://localhost:8080`

## 📱 Test sur Mobile avec ngrok

Pour tester la réalité augmentée sur mobile, vous devez exposer votre serveur local via HTTPS :

### Installation de ngrok

1. **Télécharger ngrok** depuis [ngrok.com](https://ngrok.com/)
2. **Créer un compte gratuit** et obtenir votre authtoken
3. **Configurer ngrok**
   ```bash
   ngrok config add-authtoken YOUR_AUTH_TOKEN
   ```

### Exposer le serveur

1. **Lancer l'application Vue** (dans un terminal)
   ```bash
   npm run serve
   ```

2. **Exposer via ngrok** (dans un autre terminal)
   ```bash
   ngrok http 8080
   ```

3. **Utiliser l'URL HTTPS** fournie par ngrok
   - Exemple : `https://abc123.ngrok.io`
   - Cette URL sera accessible depuis n'importe quel appareil

### Test sur Mobile

1. **Ouvrir l'URL ngrok** sur votre téléphone mobile
2. **Autoriser l'accès à la caméra** si demandé
3. **Tester la réalité augmentée** :
   - **Android** : Utilisez Scene Viewer (Google Play Services)
   - **iOS** : Utilisez Quick Look (ARKit)

## 🎮 Utilisation

### Contrôles Desktop
- **Clic + glisser** : Faire pivoter le modèle
- **Molette de souris** : Zoom avant/arrière
- **Bouton AR** : Lancer la réalité augmentée (si supporté)

### Contrôles Mobile
- **Toucher + glisser** : Faire pivoter le modèle
- **Pincer** : Zoom avant/arrière
- **Bouton AR** : Lancer la réalité augmentée

### Fonctionnalités
- **Auto-rotation** : Le modèle tourne automatiquement
- **Révélation** : Afficher le modèle progressivement
- **Réinitialisation** : Remettre la caméra en position initiale

## 📁 Structure du Projet

```
vue-ar-model-viewer/
├── public/
│   ├── index.html          # Page HTML principale
│   └── models/
│       └── sample.glb      # Modèle 3D (à remplacer)
├── src/
│   ├── components/
│   │   └── ModelViewer.vue # Composant principal AR/3D
│   ├── views/
│   │   └── Home.vue        # Page d'accueil
│   ├── router/
│   │   └── index.js        # Configuration des routes
│   ├── App.vue             # Composant racine
│   └── main.js             # Point d'entrée
├── package.json            # Dépendances et scripts
└── README.md              # Ce fichier
```

## 🔧 Configuration

### Modifier le modèle 3D

Dans `src/components/ModelViewer.vue`, ligne 89 :
```javascript
modelSrc: '/models/votre-modele.glb'
```

### Personnaliser les paramètres AR

Dans `src/components/ModelViewer.vue` :
```javascript
// Modes AR supportés
arModes: 'scene-viewer quick-look'

// Échelle AR
arScale: 'auto' // ou 'fixed'

// Placement AR
arPlacement: 'floor' // ou 'wall'
```

### Ajuster la caméra

```javascript
// Position initiale de la caméra
cameraOrbit: '0deg 75deg 105%'

// Limites de la caméra
minCameraOrbit: 'auto auto 50%'
maxCameraOrbit: 'auto auto 150%'
```

## 🌐 Compatibilité

### Navigateurs Supportés
- **Chrome** : 79+ (WebXR AR)
- **Safari** : 13+ (Quick Look AR)
- **Firefox** : 79+ (WebXR AR)
- **Edge** : 79+ (WebXR AR)

### Plateformes AR
- **Android** : Scene Viewer (Google Play Services)
- **iOS** : Quick Look (ARKit)
- **WebXR** : Navigateurs compatibles

## 🐛 Dépannage

### Le modèle ne se charge pas
- Vérifiez que le fichier GLB existe dans `public/models/`
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que le fichier n'est pas corrompu

### La réalité augmentée ne fonctionne pas
- Vérifiez que vous utilisez HTTPS (obligatoire pour AR)
- Assurez-vous que votre appareil supporte AR
- Vérifiez les permissions de caméra

### Problèmes de performance
- Optimisez votre modèle 3D (< 10MB recommandé)
- Réduisez la complexité géométrique
- Utilisez des textures compressées

## 📚 Ressources

- [Google Model Viewer Documentation](https://modelviewer.dev/)
- [WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)
- [AR.js](https://ar-js-org.github.io/AR.js/)
- [Three.js](https://threejs.org/)

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation pour des projets personnels et commerciaux.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouvelles fonctionnalités

---

**Note** : Ce projet est un MVP (Minimum Viable Product) conçu pour démontrer l'intégration de la réalité augmentée avec Vue 2 et Google Model Viewer. 