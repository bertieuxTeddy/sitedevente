import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  @UsePipes(new ValidationPipe({transform: true}))
  @ApiOperation({ summary: 'Create a new favorite' })
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all favorites' })
  findAll() {
    return this.favoriteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a favorite by id' })
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.favoriteService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({transform: true}))
  @ApiOperation({ summary: 'Update a favorite by id' })
  update(@Param('id', new ParseIntPipe()) id: number, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    return this.favoriteService.update(id, updateFavoriteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a favorite by id' })
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.favoriteService.remove(id);
  }

  @Get(':favoriteId/products/:productId')
  addProductToFavorite(@Param('favoriteId', new ParseIntPipe()) favoriteId: number, @Param('productId', new ParseIntPipe()) productId: number) {
    return this.favoriteService.addProductToFavorite(favoriteId, productId);
  }

  @Delete(':favoriteId/products/:productId')
  removeProductFromFavorite(@Param('favoriteId', new ParseIntPipe()) favoriteId: number, @Param('productId', new ParseIntPipe()) productId: number) {
    return this.favoriteService.removeProductFromFavorite(favoriteId, productId);
  }
}
