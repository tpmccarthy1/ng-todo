import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService, ITask } from '../tasks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})

export class AddTaskComponent implements OnInit {

    task: ITask;
    tasks: ITask[] = [];

    constructor(
        private tasksService: TasksService,
    ) { }

    @Output() mode: EventEmitter<boolean> = new EventEmitter<boolean>();
    addMode() {
      this.mode.emit(false);
    }

    ngOnInit() {

    this.tasksService.getTasks()
    .subscribe(
        (tasks) => {
        this.tasks = tasks;
        });

    this.task = {
        id: this.tasks.length + 1,
        description: '',
        complete: false,
        };
    }

    save(): void {
        if (!this.task.description) {
          console.log('error');
          return;
        }
        this.tasksService.save(this.task)
          .subscribe((task) => {
            this.mode.emit(false);
          });
      }

}

