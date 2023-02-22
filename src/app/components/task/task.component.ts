import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/types/Task';

import { faX, faBell } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() data!: Task;

  faX = faX;
  faBell = faBell;

  faXColor: string = 'red';
  faBellColor!: string;

  constructor(
    private LocalStorageSVC: LocalStorageService,
    public _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.faBellColor = this.data.reminder ? 'black' : 'gray';
  }

  handleDelete(id: number) {
    try {
      this.LocalStorageSVC.deleteTask(id);
      // alert('Tarea eliminada');
      this._snackBar.open('Tarea Eliminada', 'X', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        duration: 3000,
      });
    } catch (error) {
      console.log('Error', error);
    }
  }

  handleReminder(id: number) {
    try {
      this.LocalStorageSVC.changeReminder(id);
      this.faBellColor = this.data.reminder ? 'black' : 'gray';
    } catch (error) {
      console.log('Error', error);
    }
  }

  goToDetailPage(id: number) {
    this.router.navigate(['task/', this.data.id]);
  }
}
