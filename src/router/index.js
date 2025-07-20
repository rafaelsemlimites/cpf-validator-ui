// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Validador de CPF'
    }
  },
  // Rota amigável alternativa:
  {
    path: '/validador',
    name: 'cpf-validator',
    component: HomeView
  },
  // Fallback para rotas inexistentes
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Se necessario: mudar o título da aba dinamicamente com base na rota
router.afterEach((to) => {
  const title = to.meta.title || 'App'
  document.title = title
})

export default router
