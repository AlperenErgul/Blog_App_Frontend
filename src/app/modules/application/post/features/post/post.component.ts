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

  posts = [
    {
      username: 'Alperen Ergül',
      createdAt: '07.11.2022',
      title: 'Tailwind & Angular',
      content: 'Tailwind CSS ve Angular kullanarak harika arayüzler oluşturuyorum. 🚀'
    },
    {
      username: 'John Doe',
      createdAt: '12.05.2023',
      title: 'Frontend Geliştirme',
      content: 'Component tabanlı geliştirme yaparak modüler bir yapı oluşturuyoruz.' +
        'Component tabanlı geliştirme yaparak modüler bir yapı oluşturuyoruz.' +
        'Component tabanlı geliştirme yaparak modüler bir yapı oluşturuyoruz.' +
        'Component tabanlı geliştirme yaparak modüler bir yapı oluşturuyoruz.' +
        'Component tabanlı geliştirme yaparak modüler bir yapı oluşturuyoruz.'
    },
    {
      username: 'Jane Smith',
      createdAt: '28.09.2023',
      title: 'TypeScript ve Angular',
      content: 'TypeScript’in sağladığı tip güvenliği ile Angular uygulamalarını daha sağlam hale getiriyoruz.'
    },
    {
      username: 'Alperen Ergül',
      createdAt: '07.11.2022',
      title: 'Tailwind & Angular',
      content: 'Tailwind CSS ve Angular kullanarak harika arayüzler oluşturuyorum. 🚀'
    },
    {
      username: 'John Doe',
      createdAt: '12.05.2023',
      title: 'Frontend Geliştirme',
      content: 'Component tabanlı geliştirme yaparak modüler bir yapı oluşturuyoruz.'
    },
    {
      username: 'Jane Smith',
      createdAt: '28.09.2023',
      title: 'TypeScript ve Angular',
      content: 'TypeScript’in sağladığı tip güvenliği ile Angular uygulamalarını daha sağlam hale getiriyoruz.'
    },
    {
      username: 'Alperen Ergül',
      createdAt: '07.11.2022',
      title: 'Tailwind & Angular',
      content: 'Tailwind CSS ve Angular kullanarak harika arayüzler oluşturuyorum. 🚀'
    },
    {
      username: 'John Doe',
      createdAt: '12.05.2023',
      title: 'Frontend Geliştirme',
      content: 'Component tabanlı geliştirme yaparak modüler bir yapı oluşturuyoruz.'
    },
    {
      username: 'Jane Smith',
      createdAt: '28.09.2023',
      title: 'TypeScript ve Angular',
      content: 'TypeScript’in sağladığı tip güvenliği ile Angular uygulamalarını daha sağlam hale getiriyoruz.'
    },
    {
      username: 'Alperen Ergül',
      createdAt: '07.11.2022',
      title: 'Tailwind & Angular',
      content: 'Tailwind CSS ve Angular kullanarak harika arayüzler oluşturuyorum. 🚀'
    },
    {
      username: 'John Doe',
      createdAt: '12.05.2023',
      title: 'Frontend Geliştirme',
      content: 'Component tabanlı geliştirme yaparak modüler bir yapı oluşturuyoruz.'
    },
    {
      username: 'Jane Smith',
      createdAt: '28.09.2023',
      title: 'TypeScript ve Angular',
      content: 'TypeScript’in sağladığı tip güvenliği ile Angular uygulamalarını daha sağlam hale getiriyoruz.'
    }
  ];

}
