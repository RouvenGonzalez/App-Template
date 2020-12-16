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

  calculateProjectProgress(projectName: string): number {
    /* exaples:
     - 1 open , 0 review , 0 finished = 0%    : 0/1=0
     - 0 open , 1 review , 0 finished = 50%   : 0.5/1=0.5
     - 0 open , 0 review , 1 finished = 100%  :1/1=1
     - 0 open , 1 review , 1 finished = 75%   : (0.5+1)/2= 0.75
     - 1 open , 1 review , 1 finished = 50%   : (0+0.5+1)/3= 0.5

     formula: (status1+status2+...statusN)/n
     status : open = 0 , review = 0.5 , finished = 1
    */

    //get tasks of this project
    const tasks = this.getTasks(projectName);
    // check if tasks array has tasks in it
    if (tasks.length > 0) {
      //get the value of all task.status
      const statusValues = tasks.map((task) => task.status);
      //get sum of the values
      const sumOfValues = statusValues.reduce((previous, current) => previous + current);

      // return calculate the percentage : sumOfValues/tasks.length *100
      return (sumOfValues / tasks.length) * 100;
    }
    // return 0% if the array is empty
    return 0;
  }
}
