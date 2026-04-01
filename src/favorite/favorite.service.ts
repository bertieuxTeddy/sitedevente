import { Inject, Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Repository } from 'typeorm';
import { Favorite } from './entities/favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(@Inject('FAVORITE_REPOSITORY') private favoriteRepository: Repository<Favorite>) {}

  create(createFavoriteDto: CreateFavoriteDto) {
    return this.favoriteRepository.save(createFavoriteDto);
  }

  findAll() {
    return this.favoriteRepository.find();
  }

  findOne(id: number) {
    return this.favoriteRepository.createQueryBuilder('favorite')
      .where('favorite.id = :id', { id })
      .getOne();
  }

  update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return this.favoriteRepository.update(id, updateFavoriteDto);
  }

  remove(id: number) {
    return this.favoriteRepository.delete(id);
  }

  addProductToFavorite(favoriteId: number, productId: number) {
    return this.favoriteRepository.createQueryBuilder()
      .relation(Favorite, 'productsId')
      .of(favoriteId)
      .add(productId);
  }
  
  removeProductFromFavorite(favoriteId: number, productId: number) {
    return this.favoriteRepository.createQueryBuilder()
      .relation(Favorite, 'productsId')
      .of(favoriteId)
      .remove(productId);
  }
}
