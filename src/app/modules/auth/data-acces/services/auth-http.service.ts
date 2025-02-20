import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginModel, LoginResponseModel, RegisterModel} from '../../models';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  private apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient
  ) {
  }


  public login(payload: LoginModel): Observable<LoginResponseModel> {
    const URL = `${this.apiUrl}/auth/login`;
    return this._http.post<LoginResponseModel>(URL, payload);
  }

  public register(payload: RegisterModel): Observable<boolean> {
    const URL = `${this.apiUrl}/auth/register`;
    return this._http.post<boolean>(URL, payload);
  }

  checkSession(): Observable<boolean> {
    const URL = `${this.apiUrl}/auth/session`;
    return this._http.get<boolean>(URL);
  }

}
