import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, catchError, interval, map, Observable, of, Subscription, switchMap} from 'rxjs';
import {LoginModel, LoginResponseModel, RegisterModel} from '../../models';
import {AuthHttpService} from './auth-http.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private readonly tokenKey = 'accessToken';
  private readonly userKey = 'user'
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  private sessionCheckInterval!: Subscription;

  constructor(
    private authHttpService: AuthHttpService,
    private router: Router
  ) {
    this.startSessionCheck();
  }

  private startSessionCheck() {
    this.sessionCheckInterval = interval(30000).pipe(
      switchMap(() => this.checkSession()),
      catchError(() => {
        this.logout();
        this.router.navigate(['/sign-out']);
        return of(false);
      })
    ).subscribe((isValid) => {
      if (!isValid) {
        this.handleInvalidSession();
      }
    });
  }

  private handleInvalidSession() {
    const currentUrl = this.router.url;

    const authPages = ['/sign-in', '/sign-up'];
    const isOnAuthPage = authPages.includes(currentUrl);

    if (!isOnAuthPage) {
      this.logout();
      this.router.navigate(['/sign-in']);
    }
  }

  private checkSession() {
    return this.authHttpService.checkSession().pipe(
      map((isValid: boolean) => {
        return isValid;
      }),
      catchError(() => {
        return of(false);
      })
    )
  }

  ngOnDestroy(): void {
    if (this.sessionCheckInterval) {
      this.sessionCheckInterval.unsubscribe();
    }
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
