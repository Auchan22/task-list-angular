import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/types/Task';

const KEY: string = 'taskList';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private tasksSubject = new BehaviorSubject<Task[] | null>(null);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {
    this.initialStorage();
  }

  private createTask(task: Task): void {}
  private deleteTask(id: number): void {}

  createOrDeleteTask(task: Task): void {
    const { id } = task;

    const currentTasks = this.getTasks();
    const foundTask = !!currentTasks?.find((t: Task) => t.id === id);

    foundTask ? this.deleteTask(id) : this.createTask(task);
  }

  getTasks(): any {
    try {
      const tasks = localStorage.getItem(KEY);
      const currentStorage = tasks !== null ? JSON.parse(tasks) : [];
      this.tasksSubject.next(currentStorage);
      return currentStorage;
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  clearStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  private initialStorage(): void {
    const taskStorage = localStorage.getItem(KEY);
    const currentStorage =
      taskStorage !== null ? JSON.parse(taskStorage) : null;

    if (!currentStorage) {
      localStorage.setItem(KEY, JSON.stringify([]));
    }

    this.getTasks;
  }
}
