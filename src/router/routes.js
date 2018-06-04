
export default [
  {
    path: '/',
    component: () => import('components/pages/index')
  },
  {
    path: '/home',
    component: () => import('components/pages/smarteam'),
    children: [
      {
        path: '/',
        component: () => import('components/templates/home')
      },
      {
        path: '/gerenciarequipe',
        component: () => import('components/templates/team-manager'),
        children: [
          {
            path: '/',
            component: () => import('components/organism/team-overview')
          },
          {
            path: '/adicionarmembro',
            component: () => import('components/organism/push-member')
          },
          {
            path: '/removermembro/:userId',
            component: () => import('components/organism/remove-member'),
            props: true
          }
        ]
      }
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
