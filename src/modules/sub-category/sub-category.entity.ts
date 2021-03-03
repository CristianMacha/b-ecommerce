import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

import { Category } from '../category/category.entity'
import { Product } from '../product/product.entity'

@Entity()
export class SubCategory {
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

    @ManyToOne((type) => Category, (category) => category.sub_categories, { nullable: false })
    category: Category

    @OneToMany((type) => Product, (product) => product.sub_category)
    products: Product[]
}
