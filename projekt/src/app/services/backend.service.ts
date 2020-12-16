import { Injectable } from '@angular/core';
import { Status, Task } from '../models/task';
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
  getTasks(projectName: string): Task[] {
    const index = this.projects.findIndex((project) => project.name == projectName);
    return this.projects[index].tasks;
  }

  // create new task object
  createTask(newTask: string, projectName: string): Task {
    let task: Task;
    // check if task description is not empty or null or undefined
    if (newTask) {
      // find index of the corresponding opject in database
      const index = this.projects.findIndex((project) => project.name == projectName);
      // create the new task
      task = new Task(newTask);
      // push it into the tasks array of the searched object
      this.projects[index].tasks.push(task);
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
    // check if task description is not empty or null or undefined
    if (newProject) {
      // create new project
      addedproject = new Project(newProject);
      // add project to database
      this.projects.push(addedproject);
    }
    return addedproject;
  }

  updateStatus(status: Status, taskName: string, projectName: string): void {
    // find Index of project
    const pIndex = this.projects.findIndex((project) => project.name == projectName);
    // find index of the task in the found project
    const tIndex = this.projects[pIndex].tasks.findIndex((task) => task.description == taskName);
    // change the found tasks status to the status that is given
    this.projects[pIndex].tasks[tIndex].status = status;
  }
}
