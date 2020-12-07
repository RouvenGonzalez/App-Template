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
    {
      name: 'Project 1',
      tasks: [
        { description: 'First Task for Project 1', status: 0 },
        { description: 'Second Task for Project 1', status: 0 },
      ],
    },
    {
      name: 'Project 2',
      tasks: [
        { description: 'First Task for Project 2', status: 0 },
        { description: 'Second Task for Project 2', status: 0 },
      ],
    },
  ];

  // provide task list for view
  getTasks(project: Project): Task[] {
    return project.tasks;
  }

  // create new task object
  addTask(newTask: string, project: Project): void {
    const task = new Task(newTask);
    project.tasks.push(task);
  }

  // provide project list for view
  getProjects(): Project[] {
    return this.projects;
  }

  // create new project object
  addProject(newProject: string): void {
    const addedproject = new Project(newProject);
    this.projects.push(addedproject);
  }
}
