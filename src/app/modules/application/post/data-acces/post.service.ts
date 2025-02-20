import {Injectable} from '@angular/core';
import {PostHttpService} from './post-http.service';
import {
  CreatePostModel,
  CreatePostResponseModel,
  getOnePostInterface,
  PostInterface,
  UpdatePostModel,
  UpdatePostResponseModel
} from '../models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private postHttpService: PostHttpService
  ) {
  }

  findAll(page: number, limit: number, search?: string): Observable<PostInterface[]> {
    return this.postHttpService.findAll(page, limit, search);
  }

  findOne(postId: string): Observable<getOnePostInterface> {
    return this.postHttpService.findOne(postId);
  }

  create(payload: CreatePostModel): Observable<CreatePostResponseModel> {
    return this.postHttpService.create(payload);
  }

  update(postId: string, payload: UpdatePostModel): Observable<UpdatePostResponseModel> {
    return this.postHttpService.update(payload, postId);
  }

  delete(postId: string): Observable<boolean> {
    return this.postHttpService.delete(postId);
  }

}
