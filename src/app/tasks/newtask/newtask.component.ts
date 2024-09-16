import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Input({required: true}) userId!: string;

  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  title: string = '';
  summary: string = '';
  dueDate: string = '';

  onCancel() {
    this.close.emit();
  }

  onAddTaskSubmit() {
    this.tasksService.addTask(this.userId, 
      { 
        title: this.title,
        summary: this.summary,
        dueDate: this.dueDate
      }
    )
    this.close.emit(); 
  }
}
