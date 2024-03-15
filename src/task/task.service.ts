import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

import PrismaService from 'src/database/prisma.service';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  private prisma: PrismaService;

  constructor() {
    this.prisma = new PrismaService();
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const taskCreated: any = await this.prisma.task.create({
        data: createTaskDto,
      });

      return new Task(taskCreated);
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Task[]> {
    try {
      const tasks: any[] = await this.prisma.task.findMany();

      if (tasks.length <= 0) throw new NotFoundException('no tasks found');

      const tasksReturn: Task[] = [];
      for (const task of tasks) {
        tasksReturn.push(new Task(task));
      }

      return tasksReturn;
    } catch (error) {
      throw error;
    }
  }

  private async findOne(id: string): Promise<Task> {
    try {
      const task: any = await this.prisma.task.findFirst({
        where: { taskId: id },
      });

      if (!task) throw new NotFoundException('Task not found');

      return new Task(task);
    } catch (error) {
      throw error;
    }
  }

  async update(updateTaskDto: UpdateTaskDto): Promise<Task> {
    try {
      const task: Task = await this.findOne(updateTaskDto.taskId);

      if (updateTaskDto.finished != task.finished) {
        if (updateTaskDto.finished == true) {
          updateTaskDto.finishedAt = new Date();
        }

        if (updateTaskDto.finished == false) {
          updateTaskDto.finishedAt = null;
        }
      }

      const taskUpdated: any = await this.prisma.task.update({
        where: { taskId: updateTaskDto.taskId },
        data: updateTaskDto,
      });

      return new Task(taskUpdated);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.findOne(id);

      const taskDeleted: any = await this.prisma.task.delete({
        where: { taskId: id },
      });

      return taskDeleted.taskId ? true : false;
    } catch (error) {
      throw error;
    }
  }
}
