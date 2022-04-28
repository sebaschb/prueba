import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn({
        name: 'id'
      })
      id: number

    @Column({
      name: 'latitud',
      nullable: false,
      default:' ',
    })
    latitud: string

    @Column({
      name: 'longitud',
      nullable: false,
      default:' ',
    })
    longitud: string

    @Column({
        name: 'radio',
        nullable: false,
        default:' ',
    })
    radio: string
}