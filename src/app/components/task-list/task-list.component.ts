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
  tasks: Task[] = [
    {
      id: 1,
      title: 'Titulo 1',
      date: 'Hoy',
      reminder: false,
    },
    {
      id: 2,
      title: 'Titulo 2',
      date: 'Mañana',
      reminder: true,
    },
    {
      id: 3,
      title: 'Titulo 3',
      date: 'En un mes',
      reminder: false,
    },
    {
      id: 2,
      title: 'Titulo 2',
      date: 'Mañana',
      reminder: true,
    },
    {
      id: 3,
      title: 'Titulo 3',
      date: 'En un mes',
      reminder: false,
    },
    {
      id: 2,
      title: 'Titulo 2',
      date: 'Mañana',
      reminder: true,
    },
    {
      id: 3,
      title: 'Titulo 3',
      date: 'En un mes',
      reminder: false,
    },
  ];

  constructor(private localStorageSVC: LocalStorageService) {}
}
