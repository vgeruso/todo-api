import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({ description: 'Id of task' })
  taskId: string;

  @ApiProperty({ description: 'Task title', example: 'Clean badroom' })
  title?: string;

  @ApiProperty({
    description: 'Task is finished',
    example: 'false',
  })
  finished?: boolean;
  finishedAt?: Date;
}
