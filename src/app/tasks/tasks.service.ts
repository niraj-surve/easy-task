import { Injectable } from "@angular/core";
import FormData from "./newtask/formdata.model";
import { dummyTasks } from "../task-data";
import Task from "./task/task.model";

@Injectable({providedIn: "root"})
export class TasksService{
    private tasks = dummyTasks;

    constructor(){
        const tasks = localStorage.getItem('tasks')

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId);
    }

    sortTasks(tasks: Task[]): Task[]{
        return tasks.slice().sort((a, b) => a.id.localeCompare(b.id));
    }

    addTask(userId:string, data: FormData){
        this.tasks.unshift({
            id: Date.now().toString(),
            userId,
            ...data,
          });
          this.saveTasks();
    }

    completeTask(taskId: string){
        this.tasks =  this.tasks.filter(task => task.id !== taskId)
        this.saveTasks();
    }

    saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}