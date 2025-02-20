import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeleteConfirmationComponent} from '../delete-confirmation/delete-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {UpdatePostDialogComponent} from '../update-post-dialog/update-post-dialog.component';
import {PostInterface} from '../../models';
import {AuthService} from '../../../../auth/data-acces/services';

@Component({
  selector: 'app-ui-post-list',
  imports: [],
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  @Input() posts: PostInterface[] = [];
  public userId: string | undefined = '';

  @Output() postDeleted = new EventEmitter<string>()

  constructor(
    public dialog: MatDialog,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.userId = this.authService.getUser()?.id;
  }

  public async deletePost(postId: string) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.postDeleted.emit(postId);
      }
    });
  }

  public async updatePost(post: any) {
    const dialogRef = this.dialog.open(UpdatePostDialogComponent, {
      data: {
        title: post.title,
        content: post.content
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }


}
