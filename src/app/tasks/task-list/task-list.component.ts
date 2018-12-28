import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TasksService, ITask } from '../tasks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './task-list.component.html',
})

export class TasksListComponent implements OnInit {
    tasks: ITask[] = [];

    constructor(
        private tasksService: TasksService,
    ) { }

    @Output() mode: EventEmitter<boolean> = new EventEmitter<boolean>();
    addMode() {
      this.mode.emit(true);
    }

    ngOnInit() {
        this.tasksService.getTasks()
        .subscribe(
          (tasks) => {
            this.tasks = tasks;
          });
    }



}

