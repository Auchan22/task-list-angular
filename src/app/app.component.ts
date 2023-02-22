import { Component } from '@angular/core';
import { Task } from 'src/types/Task';
import { LocalStorageService } from './shared/services/localstorage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-list';
  tasks: Task[] = [];

  constructor(private LocalStorageSVC: LocalStorageService) {}
}
