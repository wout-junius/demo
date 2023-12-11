import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMeetupDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @MaxLength(500)
    description: string;

    @IsString()
    @IsNotEmpty()
    speaker: string;
}
