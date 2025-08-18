import {Route} from '@angular/router';


export const PROFILE_ROUTES: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: async () => (await import('../features')).ProfileComponent
      }
    ]
  }

]
