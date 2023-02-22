import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';
import { Task } from 'src/types/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  borderColor: string = '5px solid yellow';
  tasks: Task[] = [];

  constructor(private localStorageSVC: LocalStorageService) {
    this.tasks = localStorageSVC.getTasks();
  }
}
