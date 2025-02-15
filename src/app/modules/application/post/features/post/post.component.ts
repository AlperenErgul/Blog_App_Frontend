import { Component } from '@angular/core';
import {HeaderComponent} from '../../ui/header/header.component';
import {FooterComponent} from '../../ui/footer/footer.component';

@Component({
  selector: 'app-post',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './post.component.html',
  standalone: true,
  styleUrl: './post.component.css'
})
export class PostComponent {

}
