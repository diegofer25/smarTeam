
export default [
  {
    path: '/',
    component: () => import('components/pages/index')
  },
  {
    path: '/smarteam',
    component: () => import('components/pages/smarteam'),
    children: [
      { path: '/', component: () => import('components/templates/home') },
      { path: '/criarequipe', component: () => import('components/templates/createteam') }
    ],
    meta: {
      requiresAuth: true
    }
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('components/pages/404')
  }
]
