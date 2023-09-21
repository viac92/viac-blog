import { createRouter, createWebHistory  } from 'vue-router'
import Home from '@/views/HomePage.vue'
import Blog from '@/views/BlogPage.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/blog', name: 'Blog', component: Blog }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router