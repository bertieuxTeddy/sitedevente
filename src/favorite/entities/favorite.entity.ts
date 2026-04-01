import { Product } from "src/product/entities/product.entity";
import { Column, CreateDateColumn, Entity, Generated, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('favorite')
export class Favorite {
    @PrimaryGeneratedColumn({
        name: 'id',
    })
    private _id: number;

    @Column({
        name: 'uuid',
        type: 'varchar',
        unique: true,
    })
    @Generated('uuid')
    private _uuid: string;
    
    @Column({
        name: 'user_id',
        type: 'int',
        unique: true,
    })
    private _userId: number; 
    
    @ManyToMany(() => Product)
    @JoinTable()
    private _productsId: Product[]; 
    
    @CreateDateColumn({
        name: 'created_at'
    })
    private _createdAt: Date;  

    @UpdateDateColumn({
        name: 'updated_at'
    })
    private _updatedAt: Date;


    public get id(): number {
        return this._id;
    }
    public get uuid(): string {
        return this._uuid;
    }
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    public get productsId(): Product[] {
        return this._productsId;
    }
    public set productsId(value: Product[]) {
        this._productsId = value;
    }
    public get createdAt(): Date {
        return this._createdAt;
    }
    public get updatedAt(): Date {
        return this._updatedAt;
    }

}
