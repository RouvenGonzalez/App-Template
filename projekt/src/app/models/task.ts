export class Task {
  description: string;
  status: Status;

  constructor(description: string) {
    this.description = description;
    this.status = 0;
  }
}

enum Status {
  open = 0,
  wip = 1,
  finished = 2,
}
