import { createRouter, createWebHistory  } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Post from '@/views/PostView.vue'
import Layout from '@/layouts/LayoutView.vue'

const routes = [
    { path: '/', name: 'Home', component: Layout, 
        children: [
            { path: '', name: 'Home', component: Home },
            { path: '/post/:name', name: ':name', component: Post }
        ]},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router