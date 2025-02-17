import { Component } from '@angular/core';
import {HeaderComponent} from '../../ui/header/header.component';
import {FooterComponent} from '../../ui/footer/footer.component';
import {PostListComponent} from '../../ui/post-list/post-list.component';
import {CreatePostComponent} from '../../ui/create-post/create-post.component';
import {PostInterface} from '../../models';

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
export class PostComponent {

  posts: PostInterface[] = [
    {
      id: "bda61f62-e1a0-4aa7-969a-e2f615ac57ad",
      title: "Angular ve TypeScript",
      content: "Angular ile TypeScript kullanarak güçlü ve ölçeklenebilir uygulamalar geliştiriyoruz.",
      createdAt: "2025-02-17T10:30:00.000Z",
      updatedAt: "2025-02-17T12:45:00.000Z",
      user: {
        id: "e3829196-1df8-4ff4-8bd8-8eb4d7e0fb1d",
        name: "Alperen Ergül",
        email: "alperen@example.com"
      }
    },
    {
      id: "f2b7d7b1-c8e6-4c5b-9b3b-1f93c6c8f072",
      title: "RxJS ile Reactive Programlama",
      content: "Angular’da veri yönetimi için RxJS kullanarak reaktif programlama yapıyoruz.",
      createdAt: "2025-02-16T14:15:00.000Z",
      updatedAt: "2025-02-16T15:20:00.000Z",
      user: {
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        name: "John Doe",
        email: "john.doe@example.com"
      }
    },
    {
      id: "c3d4e5f6-7890-abcd-ef12-34567890abcd",
      title: "NestJS ile Backend Geliştirme",
      content: "NestJS kullanarak modüler, ölçeklenebilir ve güvenli backend API’leri oluşturuyoruz.",
      createdAt: "2025-02-15T09:30:00.000Z",
      updatedAt: "2025-02-15T11:00:00.000Z",
      user: {
        id: "b2c3d4e5-6789-0123-4567-890abcdef123",
        name: "Jane Smith",
        email: "jane.smith@example.com"
      }
    }
  ]

  constructor() {
  }

  onPostCreated(postData: { title: string; content: string }) {
    // const newPost = {
    //   username: 'Alperen Ergül', // Sabit bir kullanıcı adı örnek olarak
    //   createdAt: new Date().toLocaleDateString(),
    //   title: postData.title,
    //   content: postData.content
    // };
    //
    // this.posts.unshift(newPost); // En üstte yeni postu göstermek için
  }

}
