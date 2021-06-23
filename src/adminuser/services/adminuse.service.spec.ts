import { Test, TestingModule } from '@nestjs/testing';
import { AdminuseService } from './adminuse.service';

describe('AdminuseService', () => {
  let service: AdminuseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminuseService],
    }).compile();

    service = module.get<AdminuseService>(AdminuseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
