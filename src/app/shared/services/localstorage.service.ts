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

  createTask(task: Task): void {
    try {
      const currentsTask = this.getTasks();
      localStorage.setItem(KEY, JSON.stringify([...currentsTask!, task]));
      this.tasksSubject.next([...currentsTask!, task]);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  deleteTask(id: number): void {
    try {
      const currentsTask = this.getTasks();
      const filteredArr = currentsTask?.filter((t: Task) => t.id !== id);
      localStorage.setItem(KEY, JSON.stringify([...filteredArr!]));
      this.tasksSubject.next([...filteredArr!]);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  getTasks(): any {
    try {
      const tasks = localStorage.getItem(KEY);
      const currentStorage = tasks !== null ? JSON.parse(tasks) : [];
      this.tasksSubject.next(currentStorage);
      return currentStorage as Task[];
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
    const taskStorage = localStorage.getItem(KEY) as any;
    const currentStorage = JSON.parse(taskStorage);

    if (!currentStorage) {
      localStorage.setItem(KEY, JSON.stringify([]));
    }

    this.getTasks();
  }
}
