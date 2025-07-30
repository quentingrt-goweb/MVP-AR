<template>
  <div class="simple-test">
    <h3>Test Simple Model Viewer</h3>
    <model-viewer
      src="/models/sofa.glb"
      alt="Canapé"
      camera-controls
      auto-rotate
      style="width: 400px; height: 400px; background: #f0f0f0; border: 2px solid #ccc;"
    ></model-viewer>
    <p>model-viewer enregistré: {{ hasModelViewer }}</p>
  </div>
</template>

<script>
export default {
  name: 'SimpleTest',
  computed: {
    hasModelViewer() {
      return !!window.customElements && !!window.customElements.get('model-viewer');
    }
  }
}
</script>

<style scoped>
.simple-test {
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style> 