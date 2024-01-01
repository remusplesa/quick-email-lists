import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSubscriberDto } from './create-subscriber.dto';

export class VerifySubscriberDto extends PartialType(CreateSubscriberDto) {
  @ApiProperty()
  isVerified: boolean;
}
