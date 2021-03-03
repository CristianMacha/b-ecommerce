import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { SubCategory } from '../sub-category/sub-category.entity'

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

    @Column({ nullable: true })
    description: string

    @Column({ nullable: false, default: true })
    active: boolean

    @CreateDateColumn({ nullable: false, type: 'timestamp' })
    created_at: Date

    @UpdateDateColumn({ nullable: false, type: 'timestamp' })
    updated_at: Date

    @OneToMany((type) => SubCategory, (subCategory) => subCategory.category)
    sub_categories: SubCategory[]
}
