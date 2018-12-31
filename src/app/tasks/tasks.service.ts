import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
        private http: HttpClient,
    ) { }

    getTasks(): Observable<ITask[]> {
        return this.http.get<ITask[]>('http://localhost:3000/tasks');
    }

    save(task: ITask): Observable<ITask> {
        return this.http.post<ITask>('http://localhost:3000/tasks', task);
    }

    completeTask(task: ITask): Observable<ITask> {
        return this.http.put<ITask>('http://localhost:3000/tasks', task);
    }


}
