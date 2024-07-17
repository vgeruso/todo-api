import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({ description: 'Id of task' })
  @IsNotEmpty({ message: 'Id of task needs to be provided' })
  @IsString()
  taskId: string;

  @ApiProperty({ description: 'Task title', example: 'Clean badroom' })
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'Task is finished',
    example: 'false',
  })
  @IsBoolean()
  finished?: boolean;
  finishedAt?: Date;
}
