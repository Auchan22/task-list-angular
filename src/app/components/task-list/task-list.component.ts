import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';
import { Task } from 'src/types/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  borderColor: string = '5px solid yellow';
  Tasks: Task[] = [];

  constructor(private LocalStorageSVC: LocalStorageService) {}

  ngOnInit(): void {
    this.LocalStorageSVC.tasks$.subscribe(() => {
      this.Tasks = this.LocalStorageSVC.getTasks();
    });
    // this.LocalStorageSVC.clearStorage();
  }
}
