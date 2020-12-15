export class Task {
  description: string;
  status: Status = Status.open;

  constructor(description: string) {
    this.description = description;
  }
}

export enum Status {
  open = 0, // 0 => 0% finished
  review = 0.5, // 0.5 => 50% finished
  finished = 1, // 1 => 100% finished
}
