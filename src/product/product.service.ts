import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY') private productRepository: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  async findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    return this.productRepository.createQueryBuilder('product')
      .where('product.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    if(!product){
      console.error(`Product with id ${id} not found`);
      return undefined
    }
    const keys = Object.keys(updateProductDto);
    keys.forEach(key => {
      if(updateProductDto[key] !== undefined){
        product[key] = updateProductDto[key];
      }
    });
    return this.productRepository.save(product);
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
