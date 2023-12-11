import { Injectable } from '@nestjs/common';
import { CreateMeetupDto } from './dto/create-meetup.dto';
import { UpdateMeetupDto } from './dto/update-meetup.dto';
import { Repository } from 'typeorm';
import { Meetup } from './entities/meetup.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MeetupService {

  constructor(@InjectRepository(Meetup) private meetupRepository: Repository<Meetup>) { }

  create(createMeetupDto: CreateMeetupDto) {
    return this.meetupRepository.save(createMeetupDto);
  }

  findAll() {
    return this.meetupRepository.find();
  }

  findOne(id: number) {
    return this.meetupRepository.findOne({
      where: {
        id
      }
    });
  }

  update(id: number, updateMeetupDto: UpdateMeetupDto) {
    return this.meetupRepository.update(id, updateMeetupDto);
  }

  remove(id: number) {
    return this.meetupRepository.delete(id);
  }
}
