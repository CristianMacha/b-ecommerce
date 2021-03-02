import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { Person } from '../person/person.entity'

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    code: string

    @Column({ nullable: false, default: true })
    active: boolean

    @OneToMany((type) => Person, (person) => person.role)
    people: Person[]
}
