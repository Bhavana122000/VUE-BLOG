import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '../views/BlogList.vue'
import BlogDetail from '../views/BlogDetail.vue'
import AddBlog from '../views/AddBlog.vue'

const routes = [
    { path: '/', component: BlogList },
    { path: '/blog/:id', component: BlogDetail, props: true },
    { path: '/add', component: AddBlog }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
