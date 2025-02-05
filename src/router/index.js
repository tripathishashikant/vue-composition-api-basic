import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'
import PostDetailsView from '../views/PostDetailsView.vue'
import ModalsView from '../views/ModalsView.vue'
import KeyboardEventsView from '@/views/KeyboardEventsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView,
    },
    {
      path: '/postDetails/:id',
      name: 'postDetails',
      component: PostDetailsView,
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
    {
      path: '/keyboardEvents',
      name: 'keyboardEvents',
      component: KeyboardEventsView
    }
  ],
})

export default router
