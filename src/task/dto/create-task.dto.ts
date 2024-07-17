import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ description: 'Task title', example: 'Clean badroom' })
  @IsNotEmpty({ message: 'The title of task needs to be provided' })
  @IsString()
  title: string;
}
