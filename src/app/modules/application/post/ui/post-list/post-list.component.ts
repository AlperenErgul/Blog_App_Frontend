import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeleteConfirmationComponent} from '../delete-confirmation/delete-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {UpdatePostDialogComponent} from '../update-post-dialog/update-post-dialog.component';
import {PostInterface, UpdatePostDialogModel, UpdatePostModel} from '../../models';
import {AuthService} from '../../../../auth/data-acces/services';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-ui-post-list',
  imports: [
    DatePipe
  ],
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  @Input() posts: PostInterface[] = [];
  public userId: string | undefined = '';

  @Output() postDeleted = new EventEmitter<string>()
  @Output() postUpdated = new EventEmitter<UpdatePostDialogModel>();

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

    dialogRef.afterClosed().subscribe((result: UpdatePostModel) => {
      const payload: UpdatePostDialogModel = {
        id: post.id,
        title: result.title,
        content: result.content
      }
      this.postUpdated.emit(payload);
    })
  }


}
