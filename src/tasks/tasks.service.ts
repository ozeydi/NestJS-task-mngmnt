import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Task, TaskStatus } from './task.model';
import { TasksModule } from './tasks.module';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; //array of tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }
  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    console.log(this.tasks);
    return task;
  }
}
