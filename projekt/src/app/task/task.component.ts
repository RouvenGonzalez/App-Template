import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { Task } from '../models/task';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor(public backendService: BackendService) {}

  ngOnInit(): void {}

  @Input() currentProject: Project;

  // get task from backend.service
  getTasks(currentProject: Project): Task[] {
    return this.backendService.getTasks(currentProject);
  }
  // send data for a new task to backend.service
  addTask(task: Task, currentProject: Project): void {
    this.backendService.createTask(task.description, currentProject);
  }
  changeStatus(status: number, task: Task): void {
    this.backendService.changeStatus(status, task);
  }
}
