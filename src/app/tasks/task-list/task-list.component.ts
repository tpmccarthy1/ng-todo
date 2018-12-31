import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TasksService, ITask } from '../tasks.service';


@Component({
  selector: 'app-tasks-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
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
            this.tasks.forEach( (task) =>
            new Date(task.dueDate).getTime() < new Date().getTime() ? task.isOverdue = true : task.isOverdue = false);
          });
    }

    completeTask(task) {
      this.tasksService.completeTask(task).subscribe();
      this.tasksService.getTasks().subscribe((tasks) => this.tasks = tasks);
    }



}

