import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

describe('Task', () => {
  let taskController: TaskController;
  let taskService: TaskService;

  beforeEach(async () => {
    const task: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
    }).compile();

    taskController = task.get<TaskController>(TaskController);
    taskService = task.get<TaskService>(TaskService);
  });

  describe('Task definition', () => {
    it('should be defined', () => {
      expect(taskController).toBeDefined();
      expect(taskService).toBeDefined();
    });
  });

  describe('create task', () => {
    it('should create task successfully', async () => {
      // act
      const result = await taskController.create({
        title: 'Tak test',
      });
      // assert
      expect(typeof result).toBe('object');
      expect(result.taskId).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.finished).toBeDefined();
      expect(result.createdAt).toBeDefined();
      expect(result.updatedAt).toBeDefined();
    });
  });

  describe('index tasks', () => {
    it('should findAll tasks successfully', async () => {
      // act
      const result = await taskController.findAll();
      // assert
      expect(result.length).toBeGreaterThan(0);
      expect(typeof result).toBe('object');
      expect(result[0].taskId).toBeDefined();
      expect(result[0].title).toBeDefined();
      expect(result[0].finished).toBeDefined();
      expect(result[0].createdAt).toBeDefined();
      expect(result[0].updatedAt).toBeDefined();
    });
  });

  describe('find task by Id', () => {
    it('should find task by id successfully', async () => {
      // arange
      const all = await taskController.findAll();
      const id = all[0].taskId;
      // act
      const result = await taskController.findById(id);
      // assert
      expect(typeof result).toBe('object');
      expect(result.taskId).toBe(id);
      expect(result.title).toBeDefined();
      expect(result.finished).toBeDefined();
      expect(result.createdAt).toBeDefined();
      expect(result.updatedAt).toBeDefined();
    });
  });

  describe('update task', () => {
    it('should update task successfully', async () => {
      // arange
      const all = await taskController.findAll();
      const id = all[0].taskId;
      const newTitle = 'teste task update';
      // act
      const result = await taskController.update({
        taskId: id,
        title: newTitle,
      });
      // assert
      expect(typeof result).toBe('object');
      expect(result.taskId).toBe(id);
      expect(result.title).toBe(newTitle);
      expect(result.title !== all[0].title).toBeTruthy();
    });
  });

  describe('delete task', () => {
    it('should delete task successfully', async () => {
      // arange
      const all = await taskController.findAll();
      const id = all[0].taskId;
      // act
      const result = await taskController.remove(id);
      // assert
      expect(typeof result).toBe('boolean');
      expect(result).toBeTruthy();
    });
  });
});
