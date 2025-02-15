import {Routes} from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    canActivate: [], // todo: NoAuthGuard will add here
    canActivateChild: [], // todo: NoAuthGuard will add here
    children: [
      {
        path: 'sign-in',
        loadChildren: () => import('./modules/auth/features/sign-in/sign-in.routes')
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./modules/auth/features/sign-up/sign-up.routes')
      }
    ]
  },
  {
    path: '',
    canActivate: [], // todo: AuthGuard will add here
    canActivateChild: [], // todo: AuthGuard will add here
    children: [
      {
        path: 'sign-out',
        loadChildren: () => import('./modules/auth/features/sign-out/sign-out.routes')
      }
    ]
  },

  {
    path: 'app',
    canActivate: [], // todo: AuthGuard will add here
    canActivateChild: [], // todo: AuthGuard will add here
    children: [
      {
        path: '',
        loadChildren: async () => (await import('./modules/application/post/routes')).POST_ROUTES
      }
    ]
  },



];
