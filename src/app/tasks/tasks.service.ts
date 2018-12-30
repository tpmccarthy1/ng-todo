import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';

export interface ITask {
  id: number;
  description: string;
  complete: boolean;
  dueDate: string;
  isOverdue: boolean;
}

@Injectable()
export class TasksService {

    // Remove, this is only to simulate a db
    private tasks: ITask[] = [];

    constructor(
    ) { }

    getTasks(): Observable<ITask[]> {
        return of(this.tasks);
    }

    save(task: ITask): Observable<ITask> {
        this.tasks.push(task);
        return of(task);
    }

    completeTask(taskId: number): Observable<ITask[]> {
        this.tasks.forEach( (task) => taskId === task.id ? (task.complete = true) : task.complete);
        return of(this.tasks);
    }


}
