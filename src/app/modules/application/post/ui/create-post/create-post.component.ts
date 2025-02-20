import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CreatePostModel} from '../../models';

@Component({
  selector: 'app-ui-create-post',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  title: string = '';
  content: string = '';

  @Output() postCreated = new EventEmitter<CreatePostModel>();

  createPost() {
    if (!this.title.trim() || !this.content.trim()) return;

    const payload: CreatePostModel = {
      title: this.title,
      content: this.content
    }

    this.postCreated.emit(payload);

    this.title = '';
    this.content = '';
  }

}
