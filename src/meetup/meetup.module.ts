import { Module } from '@nestjs/common';
import { MeetupService } from './meetup.service';
import { MeetupController } from './meetup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meetup } from './entities/meetup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meetup])],
  controllers: [MeetupController],
  providers: [MeetupService],
})
export class MeetupModule {}
