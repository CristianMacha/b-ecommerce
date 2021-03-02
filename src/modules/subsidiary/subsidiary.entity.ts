import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Store } from '../store/store.entity'

@Entity()
export class Subsidiary {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    code: string

    @Column({ nullable: false })
    location: string

    @Column({ nullable: false, default: true })
    active: boolean

    @CreateDateColumn({ nullable: false, type: 'timestamp' })
    created_at: Date

    @UpdateDateColumn({ nullable: false, type: 'timestamp' })
    updated_at: Date

    @ManyToOne((type) => Store, (store) => store.subsidiaries)
    store: Store
}
