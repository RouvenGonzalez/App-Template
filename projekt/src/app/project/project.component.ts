import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  constructor(public backendService: BackendService) {}

  ngOnInit(): void {}

  getProjekt() {
    return this.backendService.getProjects();
  }
}
