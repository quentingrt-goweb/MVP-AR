<template>
  <div class="test-viewer">
    <h2>Test de Diagnostic (compatibilité model-viewer moderne)</h2>
    <div class="test-section">
      <h3>Test Model Viewer direct</h3>
      <model-viewer
        src="/models/sofa.glb"
        alt="Test Model - Canapé"
        camera-controls
        auto-rotate
        style="width: 300px; height: 300px; background: #f0f0f0; border: 2px solid #ccc;"
      ></model-viewer>
      <p style="margin-top:1em; color:#888; font-size:0.95em;">
        Si le modèle ne s'affiche pas ici mais fonctionne dans le test HTML direct, c'est un problème d'environnement ou de cache.<br>
        Ce composant ne fait plus de détection JS, il affiche simplement le web component.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestViewer'
}
</script>

<style scoped>
.test-viewer {
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.test-section {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style> 