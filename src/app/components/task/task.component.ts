import { Component, Input } from '@angular/core';
import { Task } from 'src/types/Task';

import { faX, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() data!: Task;

  faX = faX;
  faBell = faBell;

  faXColor: string = 'red';
  faBellColor: string = 'gray';

  constructor() {}
}
