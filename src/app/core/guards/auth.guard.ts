import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../modules/auth/data-acces/services';

export const AuthGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);
  const authService = inject(AuthService);

  if (!authService.isAuthenticated()){
    return router.parseUrl('sign-out');
  }

  return true;

};
