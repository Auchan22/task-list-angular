import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-add-task-btn',
  templateUrl: './add-task-btn.component.html',
  styleUrls: ['./add-task-btn.component.css'],
})
export class AddTaskBtnComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('Dialog cerrado');
    });
  }
}
