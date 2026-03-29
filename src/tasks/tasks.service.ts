import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = []; //array of tasks
  getAllTasks() {
    return this.tasks;
  }
}
