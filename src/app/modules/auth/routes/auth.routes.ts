import {Route} from '@angular/router';


export const AUTH_ROUTES: Route[] = [
  {
    path: 'sign-in',
    loadComponent: async () => (await import('../features')).SignInComponent
  },
  {
    path: 'sign-up',
    loadComponent: async () => (await import('../features')).SignUpComponent
  },
  {
    path: 'sign-out',
    loadComponent: async () => (await import('../features')).SignOutComponent
  }

]
