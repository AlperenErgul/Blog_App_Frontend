import {Component} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-ui-delete-confirmation',
  imports: [

  ],
  standalone: true,
  templateUrl: './delete-confirmation.component.html',
  styleUrl: './delete-confirmation.component.css'
})
export class DeleteConfirmationComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationComponent>
  ) {
  }

  public confirmDelete(): void {
    this.dialogRef.close(true);
  }

  public cancel(): void {
    this.dialogRef.close(false);
  }

}
