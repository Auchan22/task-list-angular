import { Component, Input } from '@angular/core';
import { Task } from 'src/types/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  borderColor: string = '5px solid yellow';
  @Input() Tasks: Task[] = [];

  constructor() {}
}
