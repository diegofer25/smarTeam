
export default [
  {
    path: '/',
    component: () => import('components/pages/index')
  },
  {
    path: '/home',
    component: () => import('components/pages/smarteam'),
    children: [
      { path: '/', component: () => import('components/templates/home') },
      { path: '/criarequipe', component: () => import('components/templates/createteam') }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    component: () => import('components/pages/404')
  }
]
