import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of} from 'rxjs';
import {LoginModel, LoginResponseModel, RegisterModel} from '../../models';
import {AuthHttpService} from './auth-http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly tokenKey = 'accessToken';
  private readonly userKey = 'user'
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private authHttpService: AuthHttpService
  ) {
  }

  public login(payload: LoginModel): Observable<boolean> {
    return this.authHttpService.login(payload).pipe(
      map((loggedInUserData: LoginResponseModel) => {
        if (loggedInUserData && loggedInUserData['access-token'] && loggedInUserData.user) {
          this.accessToken = loggedInUserData['access-token'];
          this.saveUser(loggedInUserData.user);
          this.isLoggedInSubject.next(true);

          return !!(loggedInUserData && loggedInUserData["access-token"]);
        } else {
          console.error('Yanıt yapısı hatalı:', loggedInUserData);
          return false;
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(false);
      })
    );
  }

  public register(payload: RegisterModel): Observable<boolean> {
    return this.authHttpService.register(payload).pipe(
      map((isRegistered: boolean) => {
        if (isRegistered) {
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => {
        return of(false);
      })
    );
  }



  private saveUser(user: { id: string, name: string, email: string }) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  set accessToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  get accessToken(): string {
    return localStorage.getItem(this.tokenKey) ?? '';
  }

  getUser(): { id: string; name: string; email: string } | null {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.isLoggedInSubject.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable()
  }

  private hasToken() {
    return !!localStorage.getItem(this.tokenKey);
  }


}
