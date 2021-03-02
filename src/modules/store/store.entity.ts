import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Subsidiary } from '../subsidiary/subsidiary.entity'

@Entity()
export class Store {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

    @Column({ nullable: false })
    owner: string

    @Column({ nullable: false })
    address: string

    @Column({ nullable: false })
    phone: string

    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    ruc: string

    @Column({ nullable: false, default: true })
    active: boolean

    @CreateDateColumn({ nullable: false, type: 'timestamp' })
    created_at: Date

    @UpdateDateColumn({ nullable: false, type: 'timestamp' })
    updated_at: Date

    @OneToMany((type) => Subsidiary, (subsidiary) => subsidiary.store)
    subsidiaries: [Subsidiary]
}
