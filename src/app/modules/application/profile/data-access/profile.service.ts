import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {UserProfileInterface} from '../models/profile.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {
  }


  getProfile(): Observable<UserProfileInterface> {
    const URL = `${this.apiUrl}/profile/me`;
    return this._http.get<UserProfileInterface>(URL);
  }

  async getUploadUrl() {

  }

  async confirmUpload() {

  }

  async deleteProfileImage() {

  }
}
