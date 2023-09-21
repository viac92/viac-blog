import { createRouter, createWebHistory  } from 'vue-router'
import Home from '@/views/MultiPostsView.vue'
import Post from '@/views/PostView.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/post/:name', name: ':name', component: Post }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router