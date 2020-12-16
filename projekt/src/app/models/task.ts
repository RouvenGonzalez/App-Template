export class Task {
  description: string;
  status: Status = Status.OPEN;

  constructor(description: string) {
    this.description = description;
  }
}

export enum Status {
  OPEN = 0, // 0 => 0% finished
  REVIEW = 0.5, // 0.5 => 50% finished
  FINISHED = 1, // 1 => 100% finished
}
