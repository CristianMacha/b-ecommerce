import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { Role } from '../role/role.entity'

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    names: string

    @Column({ nullable: false })
    surnames: string

    @Column({ nullable: false })
    dni: string

    @Column({ nullable: true })
    email: string

    @Column({ nullable: true })
    phone: string

    @Column({ nullable: true })
    address: string

    @Column({ nullable: false })
    password: string

    @Column({ nullable: false, default: true })
    active: boolean

    @CreateDateColumn({ nullable: false, type: 'timestamp' })
    created_at: Date

    @UpdateDateColumn({ nullable: false, type: 'timestamp' })
    updated_at: Date

    @ManyToOne((type) => Role, (role) => role.people, { nullable: false })
    role: Role
}
