import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';
import { FormData, Task } from 'src/types/Task';

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

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    private LocalStorageSVC: LocalStorageService
  ) {}

  updateReminder(): void {
    this.formData.reminder = !this.formData.reminder;
  }

  handleClick(): void {
    if (!this.formData.title) {
      alert('El input Title es obligatorio');
      return;
    }

    const newTask: Task = {
      ...this.formData,
      id: new Date().getUTCMilliseconds(),
    };
    this.LocalStorageSVC.createTask(newTask);
  }
}
