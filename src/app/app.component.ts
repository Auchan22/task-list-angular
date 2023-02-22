import { Component, OnInit } from '@angular/core';
import { Task } from 'src/types/Task';
import { LocalStorageService } from './shared/services/localstorage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'task-list';
  tasks: Task[] = [];

  constructor(private LocalStorageSVC: LocalStorageService) {}

  ngOnInit(): void {
    this.LocalStorageSVC.tasks$.subscribe(() => {
      this.tasks = this.LocalStorageSVC.getTasks();
    });
    // this.LocalStorageSVC.clearStorage();
  }
}
