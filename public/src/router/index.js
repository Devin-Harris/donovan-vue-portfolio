import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import Contact from "../views/Contact"
import Project from "../views/Project"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Home",
    redirect: '/'
  },
  {
    path: "/Contact",
    name: 'Contact',
    component: Contact
  },
  {
    path: "/Store",
    name: 'Store',
    component: Contact //TODO
  },
  {
    path: "/Design",
    name: 'Design',
    component: Project
  },
  {
    path: "/Photo",
    name: 'Photo',
    component: Project
  },
  {
    path: "/Film",
    name: 'Film',
    component: Project
  }
]

const router = new VueRouter({
  routes
})

export default router
