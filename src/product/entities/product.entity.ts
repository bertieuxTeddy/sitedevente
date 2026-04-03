import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum Gender{
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    UNISEX = 'UNISEX'
}

@Entity()
export class Product {
    @PrimaryGeneratedColumn({
        name: "id"
    })
    private _id: number;

    @Column({
        type: "varchar",
        unique: true,
        nullable: false,
        name: "uuid"
    })
    @Generated("uuid")
    private _uuid: string;

    @Column({
        name: "name",
        type: "varchar",
        length: 50,
        nullable: false,
        unique: true
    })
    private _name: string;
    
    @Column({
        name: "brand",
        type: "varchar",
        length: 50,
        nullable: false
    })
    private _brand: string;
    
    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    private _type: string;

    @Column({
        name: "description",
        type: "varchar",
        length: 250,
        nullable: true
    })
    private _description: string;
    
    @Column({
        name: "gender",
        type: "enum",
        enum: Gender,
        nullable: false
    })
    private _gender: Gender;

    @Column({
        name: "composition",
        type: "varchar",
        length: 250,
        nullable: true
    })
    private _composition: string;
    
    @Column({
        name: "price",
        type: "numeric",
        precision: 7,
        scale: 3,
        nullable: false,
    })
    private _price: number;
    
    @Column({
        name: "size",
        type: "simple-json",
        nullable: false
    })
    private _size: Array<Size>;
    
    @Column({
        name: "stock",
        type: "numeric",
        unsigned: true,
        nullable: false
    })
    private _stock: number;
    
    @Column({
        name: "isNew",
        type: "boolean",
        default: false
    })
    private _isNew: boolean;
    
    @Column({
        name: "isOnOffer",
        type: "boolean",
        default: false
    })
    private _isOnOffer: boolean;
    
    @CreateDateColumn({
        name: "createdAt"
    })
    private _createdAt: Date;
    
    @UpdateDateColumn({
        name: "updatedAt"
    })
    private _updatedAt: Date;


    public get id(): number{
        return this._id;
    }
    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }
    public get name(): string {
        return this._name;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get description(): string {
        return this._description;
    }
    public get gender(): Gender {
        return this._gender;
    }
    public set gender(value: Gender) {
        this._gender = value;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get composition(): string {
        return this._composition;
    }
    public set composition(value: string) {
        this._composition = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get size(): Array<Size> {
        return this._size;
    }
    public set size(value: Array<Size>) {
        this._size = value;
    }
    public get stock(): number {
        return this._stock;
    }
    public set stock(value: number) {
        this._stock = value;
    }
    public get isNew(): boolean {
        return this._isNew;
    }
    public set isNew(value: boolean) {
        this._isNew = value;
    }
    public get isOnOffer(): boolean {
        return this._isOnOffer;
    }
    public set isOnOffer(value: boolean) {
        this._isOnOffer = value;
    }
    public get updatedAt(): Date{
        return this._updatedAt;
    }
    public get createdAt(): Date{
        return this._createdAt;
    }
    public get uuid(): string{
        return this._uuid;
    }
}

export class Size{
    private _dimension: string; 
    private _color: string;
    private _quantity: number;

    public get dimension(): string {
        return this._dimension;
    }
    public set dimension(value: string) {
        this._dimension = value;
    }
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }

}

