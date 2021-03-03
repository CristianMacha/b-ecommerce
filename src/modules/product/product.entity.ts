import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { SubCategory } from '../sub-category/sub-category.entity'
import { Subsidiary } from '../subsidiary/subsidiary.entity'

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    code: string

    @Column({ nullable: false })
    name: string

    @Column({ type: 'numeric', precision: 6, scale: 2, nullable: false })
    price: number

    @Column({ nullable: false })
    stock: number

    @Column({ nullable: false })
    photo: string

    @Column({ nullable: false, default: true })
    active: boolean

    @CreateDateColumn({ nullable: false, type: 'timestamp' })
    created_at: Date

    @UpdateDateColumn({ nullable: false, type: 'timestamp' })
    updated_at: Date

    @ManyToOne((type) => Subsidiary, (subsidiary) => subsidiary.products, { nullable: false })
    subsidiary: Subsidiary

    @ManyToOne((type) => SubCategory, (subCategory) => subCategory.products)
    sub_category: SubCategory
}
