import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscriberDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  scope: string;
}
