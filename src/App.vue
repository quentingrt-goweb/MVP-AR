<template>
  <div id="app">
    <header class="app-header">
      <h1>Vue AR Model Viewer</h1>
      <p>Visualiseur de modèles 3D avec réalité augmentée</p>
    </header>
    
    <main class="app-main">
      <router-view/>
    </main>
    
    <footer class="app-footer">
      <p>Développé avec Vue 2 et Google Model Viewer</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Reset et styles de base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.app-header p {
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* Main content */
.app-main {
  flex: 1;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Footer */
.app-footer {
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  text-align: center;
  color: #7f8c8d;
  font-size: 0.8rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .app-header h1 {
    font-size: 1.5rem;
  }
  
  .app-main {
    padding: 0.5rem;
  }
}
</style> 