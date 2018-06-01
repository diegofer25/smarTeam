
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
        component: () => import('components/templates/teammanager'),
        children: [
          {
            path: '/',
            component: () => import('components/organism/teampanel')
          },
          {
            path: '/adicionarmembro',
            component: () => import('components/organism/pushmember')
          },
          {
            path: '/removermembro/:userId',
            component: () => import('components/organism/removemember'),
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
