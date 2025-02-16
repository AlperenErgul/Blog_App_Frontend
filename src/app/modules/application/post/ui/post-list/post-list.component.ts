import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ui-post-list',
  imports: [],
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  @Input() posts: any[] = [];


  public async deletePost(post: any) {

  }

  public async updatePost(post: any) {

  }
}
