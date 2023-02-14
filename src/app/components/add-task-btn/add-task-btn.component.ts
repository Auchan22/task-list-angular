import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task-btn',
  templateUrl: './add-task-btn.component.html',
  styleUrls: ['./add-task-btn.component.css'],
})
export class AddTaskBtnComponent {
  onClick(): void {
    alert('Hola Mundo');
  }
}
