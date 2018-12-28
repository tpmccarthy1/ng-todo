import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { TasksService } from './tasks.service';
import { TasksListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      TasksComponent,
      TasksListComponent,
      AddTaskComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
  ],
  providers: [
      TasksService,
  ],
  bootstrap: [
  ],
})
export class TasksModule { }
