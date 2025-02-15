import {Route} from '@angular/router';


export const POST_ROUTES: Route[] = [
  {
    path: 'posts',
    children: [
      {
        path: '',
        loadComponent: async () => (await import('../features')).PostComponent
      },
      {
        path: ':id',
        loadComponent: async () => (await import('../features')).PostDetailComponent
      }
    ]
  }

]
