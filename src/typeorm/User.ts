import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn({
      name: 'userId'
    })
    id: number

    @Column({
      name: 'firstName',
      nullable: false,
    })
    firstName: string

    @Column({
      name: 'lastName',
      nullable: false,
      default:' ',
    })
    lastName: string

    @Column({
      name: 'email',
      nullable: false,
      default:' ',
    })
    email: string

    @Column({
      name: 'password',
      nullable: false,
      default:' ',
    })
    password: string

    @Column({
      name: 'userName',
      nullable: false,
      default:' ',
    })
    userName: string
}