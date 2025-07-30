<template>
  <div class="home">
    <div class="container">
      <div class="info-section">
        <h2>Visualiseur de Modèle 3D</h2>
        <p>
          Utilisez les contrôles pour manipuler le modèle 3D. 
          Sur mobile, utilisez le bouton AR pour voir le modèle en réalité augmentée.
        </p>
        
        <div class="controls-info">
          <h3>Contrôles :</h3>
          <ul>
            <li>🖱️ <strong>Desktop :</strong> Clic + glisser pour faire pivoter, molette pour zoomer</li>
            <li>📱 <strong>Mobile :</strong> Toucher + glisser pour faire pivoter, pincer pour zoomer</li>
            <li>🔄 <strong>Auto-rotation :</strong> Le modèle tourne automatiquement</li>
            <li>👁️ <strong>AR :</strong> Bouton AR pour voir en réalité augmentée (mobile uniquement)</li>
          </ul>
        </div>
      </div>
      
      <div class="model-section">
        <MyModelViewer />
      </div>
      
    </div>
  </div>
</template>

<script>
import MyModelViewer from '@/components/MyModelViewer.vue'

export default {
  name: 'HomePage',
  components: {
    MyModelViewer
  }
}
</script>

<style scoped>
.home {
  width: 100%;
}

.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: start;
}

.info-section {
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.info-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.info-section p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.controls-info h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.controls-info ul {
  list-style: none;
  padding: 0;
}

.controls-info li {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: rgba(103, 126, 234, 0.1);
  border-radius: 6px;
  font-size: 0.9rem;
  line-height: 1.4;
}

.model-section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

/* Responsive design */
@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .info-section {
    order: 2;
  }
  
  .model-section {
    order: 1;
  }
}

@media (max-width: 768px) {
  .info-section {
    padding: 1rem;
  }
  
  .info-section h2 {
    font-size: 1.3rem;
  }
  
  .controls-info li {
    font-size: 0.85rem;
  }
}
</style> 