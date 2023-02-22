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

  private createTask(task: Task): void {
    try {
      const currentsTask = this.getTasks();
      localStorage.setItem(KEY, JSON.stringify([...currentsTask!, task]));
      this.tasksSubject.next([...currentsTask!, task]);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  private deleteTask(id: number): void {
    try {
      const currentsTask = this.getTasks();
      const filteredArr = currentsTask?.filter((t) => t.id !== id);
      localStorage.setItem(KEY, JSON.stringify([...filteredArr!]));
      this.tasksSubject.next([...filteredArr!]);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  createOrDeleteTask(task: Task): void {
    const { id } = task;

    const currentTasks = this.getTasks();
    const foundTask = !!currentTasks?.find((t: Task) => t.id === id);

    foundTask ? this.deleteTask(id) : this.createTask(task);
  }

  getTasks(): Task[] | undefined {
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
