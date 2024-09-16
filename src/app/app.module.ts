import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "./shared/Shared.module";
import { TasksModule } from "./tasks/tasks.module";
import { UserComponent } from "./user/user.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent, HeaderComponent, UserComponent],
    imports: [BrowserModule, SharedModule, TasksModule]
})
export class AppModule{}