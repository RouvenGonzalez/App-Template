import { Task } from '../models/task';

export class Project {
  name: string;
  tasks: Task[];

  constructor(name: string) {
    this.name = name;
    this.tasks = [];
  }
}
