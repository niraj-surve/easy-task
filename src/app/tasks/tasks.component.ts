import { Component, Input } from '@angular/core';
import Task from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  isOpen: boolean = false;

  constructor(private tasksService: TasksService){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  sortTasksById(tasks: Task[]): Task[] {
    return this.tasksService.sortTasks(tasks);
  }

  onAddTaskClick(){
    this.isOpen = true;
  }

  onClose(){
    this.isOpen = false;
  }
}