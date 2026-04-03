import {ArrayNotEmpty, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, min, Min, MinLength} from 'class-validator';
import { Gender } from '../entities/product.entity';
import { ApiProperty, ApiSchema } from '@nestjs/swagger';


export class SizeDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Dimension of the product size', example: 'W32/L34', name: 'dimension' })
    private _dimension: string; 

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Color of the product size', example: 'Blue', name: 'color' })
    private _color: string;

    @IsInt()
    @Min(0)
    @ApiProperty({ description: 'Quantity of the product size', example: 10, name: 'quantity' })
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


export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @ApiProperty({ description: 'Name of the product', example: 'T-Shirt', name: 'name' })
    private _name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'Brand of the product', example: 'Nike', name: 'brand' })
    private _brand: string; 

    @IsString()
    @IsOptional()
    @MaxLength(250)
    @ApiProperty({ description: 'Description of the product [Optional]', example: 'A comfortable cotton t-shirt', name: 'description' })
    private _description: string;

    @IsString()
    @MaxLength(200)
    @ApiProperty({ description: "Type of the product [required]", example: 'T-Shirt', name: "type" })
    private _type: string;

    @IsNotEmpty()
    @ApiProperty({ description: 'Gender for which the product is intended', example: 'Male', name: 'gender' })
    private _gender: Gender;

    @IsString()
    @IsOptional()
    @MaxLength(250)
    @ApiProperty({ description: 'Composition of the product [Optional]', example: 'Polyester; Cotton', name: 'composition' })
    private _composition: string;   // the composition of product ex. polyester; coton

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({ description: 'Price of the product', example: 29.99, name: 'price' })
    private _price: number;

    @ArrayNotEmpty()
    @ApiProperty({ description: 'available sizes for the product', type: [SizeDto], name: 'size' })
    private _size: Array<SizeDto>;

    @IsInt()
    @Min(0)
    @ApiProperty({ description: 'Stock quantity of the product', example: 100, name: 'stock' })    
    private _stock: number;

    @IsOptional()
    @ApiProperty({ description: 'Indicates if the product is new [Optional]', example: true, name: 'isNew' })
    private _isNew: boolean;

    @IsOptional()
    @ApiProperty({ description: 'Indicates if the product is on offer [Optional]', example: false, name: 'isOnOffer' })
    private _isOnOffer: boolean;


    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }
    public get description(): string {
        return this._description;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
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
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get size(): Array<SizeDto> {
        return this._size;
    }
    public set size(value: Array<SizeDto>) {
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
    public get composition(): string {
        return this._composition;
    }
    public set composition(value: string) {
        this._composition = value;
    }
}


