const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // Configuration pour le développement
  devServer: {
    port: 8080,
    host: '0.0.0.0', // Permet l'accès depuis d'autres appareils
    https: false, // Désactivé par défaut, activé via ngrok
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  
  // Configuration pour la production
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  
  // Optimisations
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  },
  
  // Configuration des assets
  chainWebpack: config => {
    // Optimisation des images
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options || {}, { limit: 10240 }))
  }
}) 