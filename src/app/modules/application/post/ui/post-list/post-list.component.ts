import {Component, Input} from '@angular/core';
import {DeleteConfirmationComponent} from '../delete-confirmation/delete-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {UpdatePostDialogComponent} from '../update-post-dialog/update-post-dialog.component';

@Component({
  selector: 'app-ui-post-list',
  imports: [],
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  @Input() posts: any[] = [];

  constructor(public dialog: MatDialog) {
  }

  public async deletePost(postTitle: any) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        console.log(`Post ${postTitle} deleted!`);
        // Burada silme işlemini gerçekleştir
      }
    });
  }

  public async updatePost(post: any) {
    const dialogRef = this.dialog.open(UpdatePostDialogComponent, {
      data:{
        title: post.title,
        content: post.content
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
