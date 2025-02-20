import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {
  CreatePostModel,
  CreatePostResponseModel,
  findAllPostApiResponse,
  getOnePostInterface,
  PostInterface,
  UpdatePostModel,
  UpdatePostResponseModel
} from '../models';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostHttpService {

  private apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient
  ) {
  }

  findOne(postId: string): Observable<getOnePostInterface> {
    const URL = `${this.apiUrl}/post/${postId}`;
    return this._http.get<getOnePostInterface>(URL);
  }

  findAll(page: number, limit: number, search?: string): Observable<PostInterface[]> {
    const URL = `${this.apiUrl}/post`;

    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())

    if (search) {
      params = params.set('search', search);
    }

    return this._http.get<findAllPostApiResponse>(URL, {params}).pipe(
      map(response => response.data)
    )

  }

  create(payload: CreatePostModel): Observable<CreatePostResponseModel> {
    const URL = `${this.apiUrl}/post`;
    return this._http.post<CreatePostResponseModel>(URL, payload);
  }

  update(payload: UpdatePostModel, postId: string): Observable<UpdatePostResponseModel> {
    const URL = `${this.apiUrl}/post${postId}`;
    return this._http.patch<UpdatePostResponseModel>(URL, payload);
  }

  delete(postId: string): Observable<boolean> {
    const URL = `${this.apiUrl}/post/${postId}`;
    return this._http.delete<boolean>(URL);
  }


}
