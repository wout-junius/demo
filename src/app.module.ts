import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetupModule } from './meetup/meetup.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'database',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
MeetupModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
