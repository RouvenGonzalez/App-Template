import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
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
  // TODO: change create task to search the neccessary project to ad the task via name
  // create new task object
  createTask(newTask: string, project: Project): Task {
    let task: Task;
    if (newTask.length > 0) {
      task = new Task(newTask);
      project.tasks.push(task);
    }
    return task;
  }

  // provide project list for view
  getProjects(): Project[] {
    return this.projects;
  }

  // create new project object
  createProject(newProject: string): Project {
    let addedproject: Project;
    if (newProject) {
      addedproject = new Project(newProject);
      this.projects.push(addedproject);
    }
    return addedproject;
  }

  changeStatus(status: number, task: Task): void {
    task.status = status;
  }
}
