import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProjectComponent, TaskComponent, ProgressbarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
