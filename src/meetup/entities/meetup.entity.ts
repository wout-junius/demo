import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Meetup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    speaker:string;
}
