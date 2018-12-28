import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';

export interface ITask {
  id: number;
  description: string;
  complete: boolean;
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


}
