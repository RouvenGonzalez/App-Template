export interface Task {
  description: string;
  status: Status;
}

enum Status {
  open = 0,
  wip = 1,
  finished = 2,
}
