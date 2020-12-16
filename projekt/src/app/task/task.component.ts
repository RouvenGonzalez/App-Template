import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { Status, Task } from '../models/task';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor(public backendService: BackendService) {}

  status = Status;

  ngOnInit(): void {}

  @Input() currentProject: Project;

  // get task from backend.service
  viewTasks(currentProject: string): Task[] {
    return this.backendService.getTasks(currentProject);
  }
  // send data for a new task to backend.service
  addTask(taskName: string, projectName: string): void {
    this.backendService.createTask(taskName, projectName);
  }

  // send data to change a task to the backend.service
  changeStatus(status: Status, taskName: string, projectName: string): void {
    this.backendService.updateStatus(status, taskName, projectName);
  }
}
