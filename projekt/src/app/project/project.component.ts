import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  constructor(public backendService: BackendService) {}

  ngOnInit(): void {}

  // get projects from backend.service
  getProject(): Project[] {
    const projects = this.backendService.getProjects();
    return projects;
  }

  // send data for a new project to backend.service
  addProject(project: Project): void {
    this.backendService.addProject(project.name);
  }
}
