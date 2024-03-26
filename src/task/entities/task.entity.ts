export class Task {
  taskId: string;
  title: string;
  finished: boolean;
  finishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(task: Task) {
    this.taskId = task.taskId;
    this.title = task.title;
    this.finished = task.finished;
    this.finishedAt = task.finishedAt;
    this.createdAt = task.createdAt;
    this.updatedAt = task.updatedAt;
  }
}
