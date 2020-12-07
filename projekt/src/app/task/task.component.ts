import { Component, OnInit } from '@angular/core';
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

  // get task from backend.service
  getTasks(): Task[] {
    return this.backendService.getTasks();
  }
  // send data for a new task to backend.service
  addTask(task: Task): void {
    this.backendService.addTask(task.description);
  }
}
