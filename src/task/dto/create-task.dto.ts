import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Task title', example: 'Clean badroom' })
  title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'Clean badroom because it is dirty',
  })
  description: string;
}
