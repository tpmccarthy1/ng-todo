import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit {

    addView: boolean;

    constructor(
        private tasksService: TasksService,
        private router: Router,
    ) { }

    ngOnInit() {
     this.addView = false;

    }

    addMode(e: boolean) {
       this.addView = e;
    }


}

