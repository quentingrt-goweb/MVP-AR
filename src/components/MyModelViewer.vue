<template>
  <div class="model-viewer-container">
    <h3>Test Model Viewer (AR)</h3>
    <model-viewer
      src="/models/sofa.glb"
      alt="Canapé"
      camera-controls
      auto-rotate
      ar
      ar-modes="scene-viewer quick-look webxr"
      ar-scale="auto"
      scale="0.5 0.5 0.5"
      style="width: 400px; height: 400px; background: #f0f0f0; border: 2px solid #ccc;"
    ></model-viewer>
    <p style="margin-top:1em; color:#888; font-size:0.95em;">
      Sur mobile, un bouton AR apparaîtra si votre appareil est compatible.<br>
      Pour iOS, ajoutez un fichier .usdz pour une expérience optimale.<br>
      <b>Astuce :</b> L'attribut <code>scale="0.5 0.5 0.5"</code> réduit la taille du modèle en AR (WebXR uniquement).
    </p>
  </div>
</template>

<script>
export default {
  name: 'MyModelViewer'
}
</script>

<style scoped>
.model-viewer-container {
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style> 