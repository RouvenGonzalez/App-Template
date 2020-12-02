import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor(public backendService: BackendService) {}

  ngOnInit(): void {}

  getTasks() {
    return this.backendService.getTasks();
  }
}
