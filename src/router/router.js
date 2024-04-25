// src/router/router.js
import { createRouter, createWebHashHistory } from 'vue-router'
import AddData from '../components/AddData.vue'
import ViewData from '../components/ViewData.vue'
import EditData from '../components/EditData.vue'

const routes = [
  { path: '/', redirect: '/view' }, // Redirect default ke /view atau bisa juga ke halaman lain
  { path: '/add', component: AddData },
  { path: '/view', component: ViewData },
  { path: '/edit/:id', component: EditData }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
