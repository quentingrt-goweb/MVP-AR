<template>
  <div class="ar-viewer-wrapper">
    <h2 class="ar-title">Visualisation 3D & Réalité Augmentée</h2>
    <div class="ar-card">
      <model-viewer
        src="/models/MR_Model.glb"
        alt="Locker MR"
        camera-controls
        auto-rotate
        ar
        ar-modes="scene-viewer quick-look webxr"
        ar-scale="auto"
        scale="0.5 0.5 0.5"
        style="width: 100%; height: 400px; background: #f8f9fa; border-radius: 16px; box-shadow: 0 2px 16px rgba(0,0,0,0.08);"
        shadow-intensity="1"
        exposure="1"
      ></model-viewer>
      <div class="ar-instructions">
        <span class="ar-badge">Nouveau&nbsp;!</span>
        <p>
          <strong>Manipulez le modèle 3D</strong> : faites pivoter, zoomez, explorez.<br>
          <strong>Essayez la Réalité Augmentée</strong> :
          <span class="ar-mobile">Sur mobile, appuyez sur le bouton <b>AR</b> pour placer le locker dans votre environnement réel.</span>
        </p>
        <ul class="ar-tips">
          <li>Rotation : glisser/déposer</li>
          <li>Zoom : molette ou pincement</li>
          <li>AR : bouton <b>AR</b> (mobile compatible)</li>
        </ul>
        <div class="ar-note">
          <b>Astuce :</b> L'attribut <code>scale="0.5 0.5 0.5"</code> réduit la taille du modèle en AR (WebXR).<br>
          Pour iOS, ajoutez un fichier .usdz pour une expérience optimale.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyModelViewer'
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
@media (max-width: 600px) {
  .ar-card {
    padding: 16px 4px 12px 4px;
    max-width: 98vw;
  }
  .ar-title {
    font-size: 1.3rem;
  }
}
</style> 