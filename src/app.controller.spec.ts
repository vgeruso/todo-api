import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('App', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('App definition', () => {
    it('should be defined', () => {
      expect(appController).toBeDefined();
      expect(appService).toBeDefined();
    });
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const result = appController.getHello();

      expect(typeof result).toBe('string');
      expect(result).toBe('Hello World!');
    });
  });
});
