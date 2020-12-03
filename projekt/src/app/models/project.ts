import { Task } from '../models/task';

export interface Project {
  name: string;
  tasks: Task[];
}
