import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormData } from 'src/types/Task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formData: FormData = {
    title: '',
    reminder: false,
    date: '',
    description: '',
  };

  constructor(public dialogRef: MatDialogRef<FormComponent>) {}

  updateReminder(): void {
    this.formData.reminder = !this.formData.reminder;
  }
}
