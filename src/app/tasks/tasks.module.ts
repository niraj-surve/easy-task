import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/Shared.module";
import { NewtaskComponent } from "./newtask/newtask.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewtaskComponent],
    imports: [CommonModule, SharedModule, FormsModule],
    exports: [TasksComponent, TaskComponent],
})
export class TasksModule{}