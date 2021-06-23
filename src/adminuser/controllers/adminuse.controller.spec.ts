import { Test, TestingModule } from '@nestjs/testing';
import { AdminuseController } from './adminuse.controller';

describe('AdminuseController', () => {
  let controller: AdminuseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminuseController],
    }).compile();

    controller = module.get<AdminuseController>(AdminuseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
