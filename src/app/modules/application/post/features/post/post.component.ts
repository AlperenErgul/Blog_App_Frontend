import { Component } from '@angular/core';
import {HeaderComponent} from '../../ui/header/header.component';
import {FooterComponent} from '../../ui/footer/footer.component';
import {PostListComponent} from '../../ui/post-list/post-list.component';

@Component({
  selector: 'app-post',
  imports: [
    HeaderComponent,
    FooterComponent,
    PostListComponent
  ],
  templateUrl: './post.component.html',
  standalone: true,
  styleUrl: './post.component.css'
})
export class PostComponent {

}
