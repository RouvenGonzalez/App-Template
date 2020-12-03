import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}

  // array of projects for view
  projects: Project[] = [
    { name: 'project 1', tasks: [] },
    { name: 'project 2', tasks: [] },
  ];
  // array of tasks for view
  tasks: Task[] = [
    { description: 'First Task ', status: 0 },
    { description: 'Second Task ', status: 0 },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }
  addTask(newTask: Task): void {
    this.tasks.push(newTask);
  }

  getProjects(): Project[] {
    return this.projects;
  }

  addProject(newProject: Project): void {
    this.projects.push(newProject);
  }
}
