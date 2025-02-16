import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-ui-update-post-dialog',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './update-post-dialog.component.html',
  styleUrl: './update-post-dialog.component.css'
})
export class UpdatePostDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdatePostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, content: string }
  ) {
  }

  public updatePost(): void {
    this.dialogRef.close({
      title: this.data.title,
      content: this.data.content
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }

}
