<template>
  <div class="ar-viewer-wrapper">
    <h2 class="ar-title">Visualisation 3D & Réalité Augmentée</h2>
    <div class="ar-card">
      <model-viewer
        src="/models/Armoire_rescale_v2.glb"
        alt="Armoire 3D"
        camera-controls
        auto-rotate
        ar
        ar-modes="scene-viewer quick-look webxr"
        ar-scale="auto"
        scale="2 2 2"
        camera-orbit="15deg 75deg 200%"
        field-of-view="30deg"
        min-camera-orbit="auto auto 50%"
        max-camera-orbit="auto auto 500%"
        camera-target="0m 0m 0m"
        interaction-policy="always-allow"
        style="width: 100%; height: 400px; background: #f8f9fa; border-radius: 16px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); --model-transform: rotateX(90deg);"
        shadow-intensity="1"
        exposure="1"
        tone-mapping="neutral"
        environment-image="neutral"
      ></model-viewer>
      <div class="ar-instructions">
        <span class="ar-badge">Nouveau&nbsp;!</span>
        <p>
          <strong>Manipulez le modèle 3D</strong> : faites pivoter, zoomez, explorez.<br>
          <strong>Essayez la Réalité Augmentée</strong> :
          <span class="ar-mobile">Sur mobile, appuyez sur le bouton <b>AR</b> pour placer l'armoire dans votre environnement réel.</span>
        </p>
        <ul class="ar-tips">
          <li>Rotation : glisser/déposer</li>
          <li>Zoom : molette ou pincement</li>
          <li>AR : bouton <b>AR</b> (mobile compatible)</li>
        </ul>
        <div class="ar-note">
          <b>Astuce :</b> Contrôles avancés avec <code>field-of-view</code> pour la profondeur et limites de zoom configurables.<br>
          Pour iOS, ajoutez un fichier .usdz pour une expérience optimale.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyModelViewer',
  mounted() {
    this.optimizeForIOS();
  },
  methods: {
    optimizeForIOS() {
      // Détection iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      
      if (isIOS) {
        // Ajustement spécifique pour iOS
        const modelViewer = this.$el.querySelector('model-viewer');
        if (modelViewer) {
          // Force le rechargement du modèle avec les nouveaux paramètres
          modelViewer.addEventListener('load', () => {
            // Ajustement de la taille pour iOS
            modelViewer.style.transform = 'scale(1.2)';
            modelViewer.style.webkitTransform = 'scale(1.2)';
          });
        }
      }
    }
  }
}
</script>

<style scoped>
.ar-viewer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 0 0;
}
.ar-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
}
model-viewer {
  width: 400px;
  height: 400px;
  /* Optimisations spécifiques iOS */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.ar-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 32px rgba(103,126,234,0.10);
  padding: 32px 24px 24px 24px;
  max-width: 480px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ar-instructions {
  margin-top: 24px;
  text-align: center;
}
.ar-badge {
  display: inline-block;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-radius: 12px;
  padding: 2px 12px;
  font-size: 0.95em;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}
.ar-instructions p {
  margin: 12px 0 8px 0;
  font-size: 1.08em;
  color: #444;
}
.ar-tips {
  list-style: none;
  padding: 0;
  margin: 0 0 12px 0;
  display: flex;
  justify-content: center;
  gap: 18px;
  font-size: 0.98em;
  color: #667eea;
}
.ar-tips li {
  background: #f3f6fd;
  border-radius: 8px;
  padding: 4px 10px;
}
.ar-note {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.95em;
  color: #888;
  margin-top: 8px;
}
/* Styles spécifiques pour iOS */
@supports (-webkit-touch-callout: none) {
  model-viewer {
    /* Force l'accélération matérielle sur iOS */
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    /* Améliore le rendu 3D sur iOS */
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }
}

@media (max-width: 600px) {
  .ar-card {
    padding: 16px 4px 12px 4px;
    max-width: 98vw;
  }
  .ar-title {
    font-size: 1.3rem;
  }
  
  /* Optimisations mobiles pour iOS */
  model-viewer {
    width: 100%;
    max-width: 400px;
    height: 400px;
    /* Améliore l'affichage sur petits écrans iOS */
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

/* Media query spécifique pour iPhone */
@media only screen 
  and (device-width: 375px) 
  and (device-height: 667px) 
  and (-webkit-device-pixel-ratio: 2) {
  model-viewer {
    width: 100%;
    height: 450px;
    /* Compensation spécifique pour iPhone 6/7/8 */
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

@media only screen 
  and (device-width: 414px) 
  and (device-height: 896px) 
  and (-webkit-device-pixel-ratio: 2) {
  model-viewer {
    width: 100%;
    height: 450px;
    /* Compensation spécifique pour iPhone 11 */
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
  }
}
</style> 