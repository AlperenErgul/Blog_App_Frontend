import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../modules/auth/data-acces/services';
import {of, switchMap} from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAuthenticated().pipe(
    switchMap((authenticated) => {
      if (!authenticated) {
        return of(router.parseUrl('/sign-in')); // Giriş yapmamışsa yönlendir
      }
      return of(true); // Giriş yapmışsa erişime izin ver
    })
  );
};
