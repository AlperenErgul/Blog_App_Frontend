import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from '../../modules/auth/data-acces/services';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  if (req.url.includes('auth/login') || req.url.includes('auth/register')) {
    return next(req);
  }

  const token = authService.accessToken;

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next(clonedRequest);
  }


  return next(req);
};
