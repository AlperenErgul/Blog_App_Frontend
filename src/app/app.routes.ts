import {Routes} from '@angular/router';
import {AuthGuard, NoAuthGuard} from './core/guards';

export const routes: Routes = [

  {
    path: '',
    canActivate: [NoAuthGuard], // todo: NoAuthGuard will add here
    canActivateChild: [NoAuthGuard], // todo: NoAuthGuard will add here
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
    canActivate: [AuthGuard], // todo: AuthGuard will add here
    canActivateChild: [AuthGuard], // todo: AuthGuard will add here
    children: [
      {
        path: 'sign-out',
        loadChildren: () => import('./modules/auth/features/sign-out/sign-out.routes')
      }
    ]
  },

  {
    path: 'app',
    canActivate: [AuthGuard], // todo: AuthGuard will add here
    canActivateChild: [AuthGuard], // todo: AuthGuard will add here
    children: [
      {
        path: '',
        loadChildren: async () => (await import('./modules/application/post/routes')).POST_ROUTES
      }
    ]
  },



];
