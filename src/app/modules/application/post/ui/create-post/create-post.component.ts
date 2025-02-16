import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

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

  @Output() postCreated = new EventEmitter<{ title: string; content: string }>();

  createPost() {
    if (!this.title.trim() || !this.content.trim()) return; // Boş içerik gönderme

    // Yeni post bilgisini EventEmitter ile yukarı gönder
    this.postCreated.emit({
      title: this.title,
      content: this.content
    });

    // Inputları temizle
    this.title = '';
    this.content = '';
  }

}
