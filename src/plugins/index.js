import vuetify from './vuetify'
import router from '../router'

/**
 * Registra todos os plugins usados globalmente
 * @param {import('vue').App} app 
 */
export default function registerPlugins(app) {
  app.use(vuetify)
  app.use(router)
 
}



