import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../ui/header/header.component';
import {FooterComponent} from '../../ui/footer/footer.component';
import {PostListComponent} from '../../ui/post-list/post-list.component';
import {CreatePostComponent} from '../../ui/create-post/create-post.component';
import {CreatePostModel, CreatePostResponseModel, PostInterface} from '../../models';
import {PostService} from '../../data-acces/post.service';

@Component({
  selector: 'app-post',
  imports: [
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    CreatePostComponent
  ],
  templateUrl: './post.component.html',
  standalone: true,
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  posts: PostInterface[] = [];

  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.findAll(1, 10, '').subscribe({
      next: (result: PostInterface[]) => {
        this.posts = result;
      },
      error: (error) => {
        console.log('Something went wrong!')
      }
    });
  }

  onPostCreated(payload: CreatePostModel) {
    this.postService.create(payload).subscribe({
      next: (result: CreatePostResponseModel) => {
        this.loadPosts();
      },
      error: (error) => {
        console.log('Something went wrong!')

      }
    })
  }


}
