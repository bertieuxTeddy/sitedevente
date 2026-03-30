import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpException, ParseIntPipe, HttpStatus, HttpCode } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ApiConsumes, ApiOperation} from '@nestjs/swagger';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UsePipes(new ValidationPipe({transform: true}))      // to transform directly body to createProductDto object
  @ApiOperation({ summary: 'Create a new product' })
  @ApiConsumes('application/json')
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productService.create(createProductDto);
    if(!product){
      throw new HttpException('Failed to create product', 400);
    }
    return product;
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  async findAll() {
    const products: Product[] = await this.productService.findAll();
    if(!products){
      throw new HttpException('No products found', 404);
    }
    return products;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by id' })
  async findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
    const product = await this.productService.findOne(id);
    if(!product){
      throw new HttpException(`Product with id ${id} not found`, 404);
    }
    return product;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({transform: true}))
  @ApiOperation({ summary: 'Update a product by id' })
  async update(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number, @Body() updateProductDto: UpdateProductDto) {
    let product : Product | undefined;
    try{
      product = await this.productService.update(id, updateProductDto);
    } 
    catch(error){
      throw new HttpException('Failed to update product : ' + error.message, 400);
    }
    if(!product){
      throw new HttpException(`Product with id ${id} not found`, 404);
    }
    return product;
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a product by id' })
  async remove(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
    return this.productService.remove(id);
  }
}
