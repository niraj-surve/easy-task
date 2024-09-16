import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TasksService } from '../tasks.service';
import Task from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  
  constructor(private tasksService: TasksService){};

  onCompleteTask(taskId: string){
    this.tasksService.completeTask(taskId);
  }
}
