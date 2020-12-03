import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}

  getTasks(): Task[] {
    return [
      { description: 'First Task ', status: 0 },
      { description: 'Second Task ', status: 0 },
    ];
  }

  getProjects(): Project[] {
    return this.projects;
  }

  addProject(newProject: Project): void {
    this.projects.push(newProject);
  }
  projects: Project[] = [
    { name: 'project 1', tasks: [] },
    { name: 'project 2', tasks: [] },
  ];
}
