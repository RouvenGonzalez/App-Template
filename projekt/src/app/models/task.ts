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
  review = 1,
  finished = 2,
}
